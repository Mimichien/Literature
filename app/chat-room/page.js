'use client';
import Navbar from '../../components/Navbar';
import { useState } from 'react';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() && !isLoading) {
      // 添加使用者訊息
      const userMessage = {
        text: inputText,
        time: new Date().toLocaleTimeString(),
        user: '我'
      };
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsLoading(true);

      try {
        // 發送請求到 AI API
        const response = await fetch('/chat-ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputText }),
        });

        if (!response.ok) {
          throw new Error('API 請求失敗');
        }

        const data = await response.json();
        
        // 添加 AI 回應
        const aiMessage = {
          text: data.message,
          time: new Date().toLocaleTimeString(),
          user: 'AI'
        };
        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error('錯誤：', error);
        // 顯示錯誤訊息
        const errorMessage = {
          text: '抱歉，發生錯誤了。請稍後再試。',
          time: new Date().toLocaleTimeString(),
          user: 'System'
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">聊天室</h1>
        
        {/* 聊天訊息顯示區域 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 min-h-[300px]">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-2 p-2 rounded-lg ${
                message.user === '我' 
                  ? 'bg-green-100 ml-auto max-w-[80%]' 
                  : 'bg-white max-w-[80%]'
              }`}
            >
              <span className="font-bold">{message.user}</span>
              <span className="text-gray-500 text-sm ml-2">{message.time}</span>
              <p className="mt-1">{message.text}</p>
            </div>
          ))}
        </div>

        {/* 輸入框區域 */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg"
            placeholder="請輸入訊息..."
            disabled={isLoading}
          />
          <button 
            type="submit"
            className={`px-6 py-2 bg-green-600 text-white rounded-lg ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-green-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? '處理中...' : '送出'}
          </button>
        </form>
      </div>
    </div>
  );
} 