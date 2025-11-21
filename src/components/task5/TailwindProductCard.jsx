export default function TailwindProductCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300">
      <img
        className="w-full"
        src="https://placehold.co/400x200"
        alt="Product"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">Sample Product</h3>
        <p className="text-gray-700 text-base">
          This is a brief description of the sample product. It highlights key
          features and benefits to attract potential customers.
        </p>
      </div>

      <div className="px-6 py-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
