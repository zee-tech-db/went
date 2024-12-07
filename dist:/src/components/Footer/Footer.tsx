import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-6">&copy; 2024 Wealth Empowerment Network Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-cyan-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-300 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-300 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;