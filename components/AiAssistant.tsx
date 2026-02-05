"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, RefreshCw, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini, resetChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am Vincent, your virtual assistant at Vintage Tax. How may I assist you with your tax inquiries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Ref for the scrollable container instead of an element at the end
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Initialize an empty model message
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const stream = await sendMessageToGemini(userMessage);

      let fullResponse = "";

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text = fullResponse;
          }
          return newMessages;
        });
      }

    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'model', text: 'I apologize, but I encountered an error processing your request. Please try again later.', isError: true }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    resetChatSession();
    setMessages([{ role: 'model', text: 'Session reset. How can I help you with your taxes today?' }]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full text-primary-600 mb-4">
          <Bot size={32} />
        </div>
        <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Ask Vincent</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our AI-powered assistant trained to provide general guidance on US taxation and our firm's services.
          <br /><span className="text-xs text-slate-500 italic">*Not legal advice.</span>
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl shadow-primary-900/10 border border-slate-100 overflow-hidden flex flex-col h-[650px]">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 p-4 flex justify-between items-center">
          <div className="flex items-center text-white">
            <div className="relative">
              <Sparkles className="mr-2 text-accent-400" size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-500 rounded-full border border-primary-900 animate-pulse"></div>
            </div>
            <span className="font-medium tracking-wide">Vincent AI</span>
          </div>
          <button
            onClick={handleReset}
            className="text-primary-200 hover:text-white transition-colors p-2 hover:bg-primary-800 rounded-full"
            title="Reset Conversation"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-6 bg-slate-50/50 space-y-6 scroll-smooth"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-md ${msg.role === 'user' ? 'bg-gradient-to-br from-accent-500 to-accent-600 ml-3' : 'bg-gradient-to-br from-primary-600 to-primary-700 mr-3'
                  }`}>
                  {msg.role === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
                </div>

                <div className={`p-5 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-white text-slate-800 border border-slate-100 rounded-tr-sm'
                    : msg.isError
                      ? 'bg-red-50 text-red-800 border border-red-100 rounded-tl-sm'
                      : 'bg-primary-50 text-slate-800 border border-primary-100 rounded-tl-sm'
                  }`}>
                  {msg.isError && <AlertCircle size={16} className="inline mr-2 mb-1" />}
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  {msg.role === 'model' && !msg.isError && isLoading && index === messages.length - 1 && msg.text === '' && (
                    <div className="flex space-x-1.5 mt-1">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <form onSubmit={handleSend} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tax brackets, deductions, or our services..."
              className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400 shadow-inner"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-primary-500/30"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </form>
          <p className="text-center text-[10px] text-slate-400 mt-3">
            AI can make mistakes. Please verify important tax information with our certified accountants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;