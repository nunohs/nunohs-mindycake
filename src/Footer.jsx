import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-6 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <p className="text-gray-500 text-sm">
            Delicious Baked Goods, Made with <Heart className="h-4 w-4 inline text-pink-500" />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-xs">© 2023 Mindy Cakes by Mindy Mot. All rights reserved.</p>
          <div className="flex space-x-4 text-xs text-gray-500">
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;