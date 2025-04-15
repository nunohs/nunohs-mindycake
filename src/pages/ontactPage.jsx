import Navbar from '../NavBar';
import Footer from '../Footer';
import { Phone, Instagram, Mail, ShoppingCart } from 'lucide-react';

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Contact Banner */}
        <div className="bg-pink-50 py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-lg mx-auto text-lg">We'd love to hear from you! Get in touch with any questions or to place a custom order.</p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Methods */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Get In Touch</h2>
                
                <div className="space-y-6">
                  <a href="https://wa.me/6287775715252" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Phone / WhatsApp</h3>
                      <p className="text-gray-600">+6287775715252</p>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/mindy_cakes" className="flex items-center p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Instagram</h3>
                      <p className="text-gray-600">@mindy_cakes</p>
                    </div>
                  </a>
                  
                  <a href="mailto:mindymot@gmail.com" className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600">mindymot@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <ShoppingCart className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Tokopedia</h3>
                      <p className="text-gray-600">Mindy Cakes</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;