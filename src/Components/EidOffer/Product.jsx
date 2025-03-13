import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);

    return (
        <div className="py-10 px-4">
            <h3 className="text-center text-3xl from-amber-500 my-4">Eid products</h3>
            <div className="grid grid-cols-2 md:grid-cols-2
             lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-10">
                {
                    products?.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Products;