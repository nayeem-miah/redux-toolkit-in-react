import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const { name, price, discount, brandName, _id } = product;
    return (
        <div className="border bg-amber-200 text-black rounded">
            <h3>product title : {name}</h3>
            <p>price : {price}</p>,
            <p>discount :{discount}</p>
            <p>Brand Name : {brandName}</p>
            <Link to={`/product/${_id}`}> <button className="btn text-center mx-5 p-4 my-4">details</button></Link>
        </div>
    );
}

export default ProductCard;