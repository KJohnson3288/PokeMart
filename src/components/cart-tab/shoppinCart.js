import React, { useState, useEffect } from "react"
import "../../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


toast.configure();


function Cart(props) {

    const [displayTotal, setDisplayTotal] = useState("");

    console.log(props.currentCart);

    const notify = () => {
        toast.error("item has been removed from cart", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1000 })
      }

      const thanks = () => {
        toast.warning("Thank You For Your Purchase", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
      }

    const removeFromCart = (itemToRemove) => {
        props.setCurrentCart(
          props.currentCart.filter((item) => item !== itemToRemove)
        );
        notify();
      };

    const clearCart = () => {
        props.setCurrentCart([]);
    }

    const emptyCart = () => {
        props.setCurrentCart([]);
        thanks();
    }

    useEffect(() => {

        let total = 0

        for (let i = 0; i < props.currentCart.length; i++) {
            total += parseFloat(props.currentCart[i].price.substring(1))
        }

        setDisplayTotal(total)
    })

    const tax = displayTotal * 0.07;
    

    return (
        <div>

            <div className="jumbotron jumbotron-fluid cart-title">
                <div className="container">
                    <h1 className="display-4 font-weight-bolder text-white">Guest Checkout </h1>
                    <p className="lead font-weight-bold">  </p>
                </div>
            </div>

            <div>
                <div className="clear-cart" >
                    <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={clearCart}> Clear Cart</button>
                </div>

                <div>
                    {props.currentCart.map((item, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={item.image} className="cart-img" alt={item.name} />
                                </div>
                                <div className="col-md-8 cart-info">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name} </h5>
                                        <p className="card-text">{item.description} </p>
                                    </div>
                                </div>
                                <div className="col-md-2 remove-area">
                                    <p className="card-text"><small className="text-muted">{item.price} </small></p>
                                    <button className="btn btn-outline-danger" onClick={() => removeFromCart(item)} > Remove </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="totals">
                    <div className="totals-item">
                        <label>Subtotal</label>
                        <div className="totals-value" id="cart-subtotal">{ "$" + displayTotal + ".00"}</div>
                    </div>
                    <div className="totals-item">
                        <label>Tax (7%)</label>
                        <div className="totals-value" id="cart-tax">{ "$" + tax.toFixed(2)} </div>
                    </div>
                    <div className="totals-item">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">$15.00</div>
                    </div>
                    <div className="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div className="totals-value" id="cart-total">{"$" + (displayTotal + tax) + ".00"}</div>
                    </div>
                </div>
            </div>

            <div className="clear-cart" >
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={emptyCart}>Checkout</button>
                </div>


        </div>
    );
}

export default Cart;