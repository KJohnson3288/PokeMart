import React, { useState } from "react";
import "../App.css";



//Tab Imports
import Home from "./home-tab/home";
import Pokeballs from "./pokeball-tab/pokeball-card";
import Potions from "./potions-tab/potions";
import Heals from "./heals-tab/heals";
import ShoppingCart from "./cart-tab/shoppinCart";


function Nav() {

    const [cart, setCart] = useState([]);


    return (
        <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-pokeballs" role="tab" aria-controls="nav-profile" aria-selected="false">Pokeballs</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-potions" role="tab" aria-controls="nav-contact" aria-selected="false">Potions</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-heals" role="tab" aria-controls="nav-contact" aria-selected="false">Heals</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-cart" role="tab" aria-controls="nav-contact" aria-selected="false">Cart</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Home />
                </div>

                <div className="tab-pane fade" id="nav-pokeballs" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <Pokeballs currentCart={cart} setCurrentCart={setCart} />
                </div>

                <div className="tab-pane fade" id="nav-potions" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Potions currentCart={cart} setCurrentCart={setCart}/>
                </div>

                <div className="tab-pane fade" id="nav-heals" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Heals currentCart={cart} setCurrentCart={setCart}/>
                </div>

                <div className="tab-pane fade" id="nav-cart" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <ShoppingCart currentCart={cart} setCurrentCart={setCart}/>
                </div>

                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <form className="contact-form site-form">
                            <h3 className="mb-5 text-primary contact-title">Contact Us</h3>
                            <input type="hidden" name="contact_number" />
                            <div className="form-group">
                                <input type="text" className="form-control px-3 py-4" placeholder="Your Name" name="user_name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control px-3 py-4" placeholder="Your Email" name="user_email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message" name="message"/>
                            </div>
                            <input type="submit" value="Send" className="btn btn-outline-primary btn-lg btn-block  px-4 py-3 contact-btn"/>
                        </form>
                </div>

            </div>
        </div>
    );
}

export default Nav;