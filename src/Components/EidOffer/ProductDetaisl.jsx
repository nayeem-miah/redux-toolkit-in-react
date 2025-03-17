import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PRoductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            fetch(`http://localhost:5000/single-product/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data))
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [id])
    console.log(product);

    if (loading) {
        return <p>loading........</p>
    }

    return (
        <div>
            product details
        </div>
    )
}
export default PRoductDetails;