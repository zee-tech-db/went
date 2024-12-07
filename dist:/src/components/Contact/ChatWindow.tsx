import { motion } from 'framer-motion';
import { X, Send, Bot, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { openTelegramChat } from '../../utils/telegram';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openTelegramChat();
    setMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 ${!isOpen && 'pointer-events-none'}`}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8 text-white" />
          <div>
            <h3 className="text-white font-bold">Telegram Live Support</h3>
            <p className="text-blue-100 text-sm">Available 24/7</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-blue-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-blue-900">
                👋 Hello! Welcome to our Telegram support.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-blue-900">
                Click the button below or type a message to connect with our support team on Telegram.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openTelegramChat}
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Open Telegram Chat
              <ExternalLink className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type and press enter to open Telegram..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-2 rounded-full"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ChatWindow;