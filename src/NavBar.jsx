import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 py-4 px-6">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="text-pink-300 text-xl font-semibold">
          MINDY CAKES
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <Link to="/menu" className="text-gray-600 hover:text-gray-900">
            Menu
          </Link>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
            <ShoppingBag className="h-5 w-5" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;