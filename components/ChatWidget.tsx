import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Cpu } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Greetings, warrior. I am the Sensei AI. How may I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Format history for context if needed, but for now just send prompt
    // Ideally we'd keep a session history
    const responseText = await sendMessageToGemini(userMsg.text, []);
    
    const aiMsg: Message = { role: 'model', text: responseText || "System malfunction." };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#FF0000] hover:bg-red-700 text-white p-4 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-all hover:scale-110 flex items-center justify-center group"
        >
          <Cpu className="w-8 h-8 animate-pulse group-hover:animate-none" />
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="w-[90vw] md:w-96 h-[500px] bg-black border-2 border-[#FF0000] rounded-lg shadow-[0_0_50px_rgba(255,0,0,0.3)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-[#FF0000] p-4 flex justify-between items-center clip-path-header">
            <div className="flex items-center gap-2">
                <Cpu size={20} className="text-white" />
                <h3 className="font-orbitron font-bold text-white tracking-wider">AI SENSEI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-black transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900/90 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm font-medium border ${
                    msg.role === 'user' 
                      ? 'bg-zinc-800 border-zinc-600 text-white rounded-br-none' 
                      : 'bg-[#1a0505] border-[#FF0000]/50 text-red-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-[#1a0505] border border-[#FF0000]/30 text-red-400 p-3 rounded-lg rounded-bl-none text-xs flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-bounce delay-150"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-black border-t border-[#FF0000]/30 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask the Sensei..."
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white px-3 py-2 rounded focus:outline-none focus:border-[#FF0000] font-mono text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#FF0000] hover:bg-red-700 text-white p-2 rounded transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
