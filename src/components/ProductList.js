import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";


const ProductList = () => {

    const productData = useSelector((state) => state.product);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState('');
    const [productID, setProductID] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Inside Users useEffect")
        if (productData.length == 0) {
            callApi();
        } else {
            setIsLoading(false);
        }

    }, [])

    let callApi = async () => {
        //fetch is used to make api calls.
        let res = await fetch('https://dummyjson.com/products');
        let jsonResponse = await res.json();

        //Adding custom delay
        setTimeout(() => {
            dispatch(addProduct(jsonResponse.products));
            setIsLoading(false);
        }, 2000)
    }
    useEffect(() => {
        function addproducts() {
            var cartproductlist = {
                title: title,
                thumb: thumbnail,
                price: price,
                id: productID
            }
            dispatch(addToCart(cartproductlist));
        }
        addproducts();

    }, [price])




    return isLoading ?
        (<div>
            <h4>Loading user data...</h4>
        </div>)
        :
        (
            <div className="container">
                <h2 style={{ textAlign: 'center', color:"white" }}>Products</h2>
                <div className="posts-container">
                    {
                        productData.map((products) => {
                            return (
                                <div className="post-card">

                                    <img src={products.thumbnail}></img>
                                    <p className="post_title">Title: {products.title}</p>
                                    <p className="post_price">Price: ${products.price}</p>
                                    <button onClick={() => {
                                        setTitle(products.title);
                                        setThumbnail(products.thumbnail);
                                        setPrice(products.price);
                                        setProductID(products.id);
                                    }}>Add to cart</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
}

export default ProductList;