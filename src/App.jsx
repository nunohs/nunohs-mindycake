import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'  // <-- This line is super important!
import { ShoppingBag, Phone, Instagram, Mail, MenuIcon, MapPin, Clock, ShoppingCart, Heart } from "lucide-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 ">
        <div className="w-full flex justify-between items-center">
          <a href="/" className="text-pink-300 text-xl font-semibold">
            MINDY CAKES
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#menu" className="text-gray-600 hover:text-gray-900">
              Menu
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a href="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about"
          className="relative h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/bookmindy.jpg')",
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
            <div className="bg-softPink rounded-lg p-4 shadow-md max-w-[200px]">
              <h3 className="text-gray-800 font-medium">My Book!</h3>
              <p className="text-gray-900 font-bold m-1">$9.99</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="menu" className="py-8 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Sweet Treats</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <img
                    src="/bun2.jpg"
                    alt="Japanese Soft Milk Bun"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Japanese Soft Milk Bun</h3>
                  <p className="text-sm text-gray-600 mb-2 p-2">Soft and fluffy with cream cheese frosting</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">Rp100.000</span>
                    
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <img
                    src="/choco.jpg"
                    alt="Salted Choco Chips"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Salted Choco Chips</h3>
                  <p className="text-sm text-gray-600 mb-2 p-2">Freshly baked every morning</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">Rp 110.000</span>
                    
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <img
                    src="/kurma.jpg"
                    alt="Kurma Steam Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Kurma Steam Cake</h3>
                  <p className="text-sm text-gray-600 mb-2 p-2">Chewy and sweet dessert</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">Rp. 160.000</span>
                  
                  </div>
                </div>
              </div>

              
            </div>
            {/* View All Menu */}
            <div className="flex justify-center  mt-8 ">
                <a
                  href="/menu"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  View all Menu
                </a>
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

      {/* Footer */}
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
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
