import Navbar from '../NavBar';
import Footer from '../Footer';

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* About Banner */}
        <div className="bg-pink-50 py-12 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Mindy Cakes by Mindy Mot</h1>
            <p className="text-gray-600 max-w-lg mx-auto">Our story of passion, baking, and bringing smiles to our customers</p>
          </div>
        </div>

        {/* About Content Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/mindpic.png" 
                    alt="Mindy in her bakery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                  
                  <p className="text-gray-600 mb-4">
                    Mindy Cakes was born from a lifelong passion for baking. What started as weekend baking sessions for family and friends quickly blossomed into something more when people couldn't stop talking about Mindy's delicious creations.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    Founded in 2010, our bakery specializes in handcrafted cakes, cookies, and pastries made with premium ingredients and lots of love. Every recipe has been perfected through years of dedication and a commitment to quality.
                  </p>
                  
                </div>
              </div>
            </div>
            
            {/* Values Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-500 text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-gray-600">Premium ingredients and meticulous attention to detail in every bake.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-500 text-2xl">♥️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Passion</h3>
                <p className="text-gray-600">Baking isn't just our job, it's our passion and source of joy.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-500 text-2xl">👩‍🍳</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Craftmanship</h3>
                <p className="text-gray-600">Whether it’s a beloved childhood dessert or an international classic with a twist, we bring cultures together one bite at a time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
