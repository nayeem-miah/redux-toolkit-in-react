import ProductCard from "../Card/ProductCard";

const Products = () => {

    const eidProducts = [
        {
            _id: 435435,
            name: "Mobile phone",
            price: 34455,
            discount: "2%",
            brandName: "vivo"
        },
        {
            _id: 3453,
            name: "Laptop",
            price: 3445567,
            discount: "2%",
            brandName: "samsung"
        },
        {
            _id: 345,
            name: "light",
            price: 34455,
            discount: "2%",
            brandName: "walton"
        },
        {
            _id: 45,
            name: "Mobile phone",
            price: 34455,
            discount: "2%",
            brandName: "samsung"
        },
        {
            _id: 145,
            name: "Mobile phone",
            price: 34455,
            discount: "2%",
            brandName: "samsung"
        },
    ]


    return (
        <div className="py-10 px-4">
            <h3 className="text-center text-3xl from-amber-500 my-4">Eid products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 gap-10">
                {
                    eidProducts.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Products;