import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function MyAddedProduct() {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user?.email])
    console.log(products);
    return (
        <div>
            <h1>MyAddedProduct</h1>
        </div>
    );
}

export default MyAddedProduct;