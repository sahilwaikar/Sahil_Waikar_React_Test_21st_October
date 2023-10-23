import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
let Cart = () => {

    const filteredData = useSelector((state) => state.cart);
    console.log(filteredData);
    let dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState('');
    const [removeID, setRemoveID] = useState('');
    function removeProduct() {
        let removeProductList = {
            title: title,
            thumb: thumbnail,
            price: price,
            id: removeID
        }
        dispatch(removeFromCart(removeProductList));
    }

    let total = 0;
    return (
        (
            <div className="cart_container">
                <h2 style={{ textAlign: 'center' }}>Cart</h2>
                <div className="inner_cart">


                    <div className="posts-container">
                        {
                            filteredData.map((cart) => {
                                if (cart.id != '') {
                                    return (
                                        <div className="inner-cart">
                                            <div className="Cart_div">

                                                <div className="post-card">
                                                    <img src={cart.thumb}></img>
                                                    <p className="post_title" >Title: {cart.title}</p>
                                                    <p className="post_price">Price: ${cart.price}</p>
                                                    <button onClick={() => {
                                                        setTitle(cart.title);
                                                        setThumbnail(cart.thumb);
                                                        setPrice(cart.price)
                                                        setRemoveID(cart.id);
                                                        removeProduct();
                                                    }}>Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }

                            })


                        }
                    </div>
                    <div className="checklist">
                        <div className="inner-cart">
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    {
                                        filteredData.map((check) => {

                                            if (check.id != '') {
                                                total = total + check.price
                                                return (
                                                    <div>
                                                        <td>{check.title}</td>
                                                        <td>{check.price}</td>

                                                    </div>

                                                )

                                            }


                                        })}
                                    <div><tr>
                                        <td>Total</td>
                                        <td>
                                            {total}
                                        </td>
                                    </tr></div>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )

    )
}
export default Cart;
