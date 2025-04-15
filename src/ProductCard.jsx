function ProductCard({ product, showAddButton = false }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="h-48 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2 p-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-bold">{product.price}</span>
            {showAddButton && (
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full text-sm transition-colors">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  