import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';
import { openTelegramChat } from '../../utils/telegram';

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Need Assistance?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Connect with our support team instantly through Telegram
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-80"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Telegram Live Support</h3>
              <p className="text-gray-600 max-w-md text-center">
                Get instant support through our Telegram channel. Our team is ready to assist you 24/7.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full hover:shadow-lg transition-shadow"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Open Chat Window
                </button>
                <button
                  onClick={openTelegramChat}
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open in Telegram
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Chat Interface */}
      <ChatBubble onClick={() => setIsChatOpen(true)} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
};

export default Contact;