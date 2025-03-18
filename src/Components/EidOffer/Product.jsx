import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            fetch("http://localhost:5000/cloths")
                .then(res => res.json())
                .then(data => setProducts(data))
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [])
    console.log(products);

    return (
        <div className="py-10 px-4">

            {/* search implementation */}
            <div className="">
                <div className="w-full h-auto mx-auto p-4 
                 border my-2 shadow">
                    {/* Heading Section */}
                    <div className="text-center mb-4">
                        <h2 className="text-2xl   font-semibold">Search and filter Products</h2>
                        <p className="text-xl">
                            Find your desired products by brand, category, or title
                        </p>
                    </div>

                    {/* Search Box Section */}
                    <form className="flex md:flex-row items-center justify-center gap-2 w-full">
                        <input
                            type="text"
                            required
                            placeholder="Search by brand, category, or title"
                            name="search"
                            // value={search}
                            // onChange={handleSearchChange}
                            className="input input-bordered w-full md:w-full max-w-screen-sm bg-white"
                        />
                        <a href="#recentData">
                            <button
                                type="button"
                                className="px-4 py-2 bg-amber-500 text-white rounded-md"
                            >
                                Search
                            </button>
                        </a>
                    </form>
                </div>
            </div>
            <h3 className="text-center text-3xl from-amber-500 my-4">Eid products</h3>
            {loading ? <p>loading........</p> : <div className="grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-10">
                {
                    products?.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>}
        </div>
    )
}

export default Products;