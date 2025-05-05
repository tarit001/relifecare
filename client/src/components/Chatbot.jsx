// Chatbot.jsx
import React, { useEffect, useRef, useState } from "react";
import chatbotImg from "../assets/chatbot1.jpg";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false); // chatbot visible or not
  const [showButton, setShowButton] = useState(false); // shows after 2 sec
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", from: "bot" }
  ]);
  const [input, setInput] = useState("");

  const chatRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { text: input.trim(), from: "user" }
    ]);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "Thank you! We'll get back to you soon.", from: "bot" }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Button */}
      {showButton && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="fixed bottom-6 right-6 z-50"
        >
          <img
            src={chatbotImg}
            alt="Chatbot"
            className="w-14 h-14 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-transform"
          />
        </button>
      )}

      {/* Chatbot Container */}
      <div
        className={`fixed bottom-24 right-6 w-80 max-w-[90vw] h-96 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-xl shadow-2xl z-40 flex flex-col transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-3 rounded-t-xl">
          <h3 className="font-semibold">Relife Assistant</h3>
        </div>

        {/* Messages */}
        <div ref={chatRef} className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg max-w-[75%] ${
                msg.from === "bot"
                  ? "bg-blue-100 text-gray-800 self-start"
                  : "bg-blue-600 text-white self-end ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-gray-200 dark:border-slate-700 text-black">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-md px-3 py-2 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
