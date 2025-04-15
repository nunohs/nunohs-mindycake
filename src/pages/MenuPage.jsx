import Navbar from '../NavBar';
import Footer from '../Footer';
import ProductCard from '../ProductCard';
import products from '../products';

function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Menu Banner */}
        <div className="bg-pink-50 py-12 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Complete Menu</h1>
            <p className="text-gray-600 max-w-lg mx-auto">Explore our delicious selection of freshly baked goodies made with love by Mindy</p>
          </div>
        </div>

        {/* All Products Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} showAddButton={true} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MenuPage;
