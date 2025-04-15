import { Link } from 'react-router-dom';  
import { ShoppingBag, Phone, Instagram, Mail, MenuIcon, MapPin, Clock, ShoppingCart, Heart } from "lucide-react"
import Navbar from '../NavBar';
import Footer from '../Footer';
import ProductCard from '../ProductCard';
import products from '../products';

function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about"
          className="relative h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/bookmindy.jpg')",
            backgroundSize: "contain"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative w-full px-6 h-full flex flex-col justify-center">
            <h1 className="text-softPink text-3xl md:text-4xl font-bold mb-2">
              Good Morning! Ready to
              <br />
              bake up some smiles?
            </h1>
            <p className="text-softPink text-sm md:text-base mb-6">Freshly baked happiness, delivered with love</p>

            {/* Featured Product Card */}
            <a 
              href="https://www.amazon.com/Mindy-Cakes-Cookies-Indonesian-Mot/dp/6020387291" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-softPink rounded-lg p-4 shadow-md max-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-200 cursor-pointer"
            >
              <h3 className="text-gray-800 font-medium">My Book!</h3>
              <p className="text-gray-900 font-bold m-1">$9.99</p>
            </a>
          </div>
        </section>

        {/* Products Section */}
        <section id="menu" className="py-8 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Sweet Treats</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* View All Menu */}
            <div className="flex justify-center mt-8 ">
              <Link
                to="/menu"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                View all Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Us Section (Formerly Services) */}
        <section id="contact" className="py-8 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <Phone className="h-6 w-6 mb-2 text-green-500" />
                <span className="text-sm">Whatsapp</span>
                <p className="break-words text-sm">+6287775715252</p>
              </div>
              <div className="bg-pink-100 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <Instagram className="h-6 w-6 mb-2 text-pink-500" />
                <span className="text-sm">Instagram</span>
                <p className="break-words text-sm">@mindy_cakes</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-6 flex flex-col items-center justify-center text-center max-w-xs">
                <Mail className="h-6 w-6 mb-2 text-yellow-500" />
                <span className="text-sm">Email</span>
                <p className="break-words text-sm">mindymot@gmail.com</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <ShoppingCart className="h-6 w-6 mb-2 text-orange-500" />
                <span className="text-sm">Tokopedia</span>
                <p className="break-words text-sm">Mindy Cakes</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage; 