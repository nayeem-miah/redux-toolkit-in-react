import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`http://localhost:5000/single-product/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl font-semibold">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!product) {
        return <p className="text-center text-gray-500">Product not found</p>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 my-10 bg-white shadow-lg rounded-xl mt-10">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={product.product_img}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Product Details Section */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-lg text-gray-600 mt-2">{product.category} | {product.brand}</p>

                    <div className="mt-4">
                        <p className="text-xl font-semibold text-gray-900">৳ {product.price}</p>
                        <p className={`mt-2 text-sm font-medium ${product.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                            {product.availability}
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4 text-gray-700 space-y-2">
                        <p><strong>Size:</strong> {product.size}</p>
                        <p><strong>Color:</strong> {product.color}</p>
                        <p><strong>Material:</strong> {product.material}</p>
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-yellow-500 text-lg ${i < Math.round(product.rating) ? "opacity-100" : "opacity-30"}`}>
                                ★
                            </span>
                        ))}
                        <span className="text-gray-600 text-sm">({product.rating})</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
