import React, { useState } from 'react'
import "../../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


toast.configure();


const Potions = (props) => {

  const [Items] = useState([
    {
      name: "Potion",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/thumb/2/2e/GO_Potion.png/200px-GO_Potion.png",
      description: "A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon."
      
    },
    {
      name: "Super Potion",
      price: "$" + 700,
      image: "https://cdn.bulbagarden.net/upload/thumb/b/b5/GO_Super_Potion.png/200px-GO_Super_Potion.png",
      description: "A spray-type medicine for treating wounds. It can be used to restore 60 HP to a single Pokémon."
      
    },
    {
      name: "Hyper Potion",
      price: "$" + 1500,
      image: "https://cdn.bulbagarden.net/upload/thumb/3/3f/GO_Hyper_Potion.png/200px-GO_Hyper_Potion.png",
      description: "A spray-type medicine for treating wounds. It can be used to restore 120 HP to a single Pokémon."
      
    },
    {
      name: "Max Potion",
      price: "$" + 2500,
      image: "https://cdn.bulbagarden.net/upload/thumb/8/85/GO_Max_Potion.png/200px-GO_Max_Potion.png",
      description: "A spray-type medicine for treating wounds. It can be used to completely restore the max HP of a single Pokémon."
      
    }
  ]);


  const notify = () => {
    toast.info("item is in cart", {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 })
  }


  const addToCart = (item) => {
    
    props.setCurrentCart([...props.currentCart, { ...item }]);
    
    notify();
  }

  return (
    <div>

      <div className="jumbotron jumbotron-fluid potion-title">
        <div className="container">
          <h1 className="display-4 font-weight-bolder text-white">Potions</h1>
          <p className="lead font-weight-bold"> These items are used to help your pokemon to recover HP (Health Points) after a battle. </p>
        </div>
      </div>

      {Items.map((item, index) => (
        <div className="card mb-3" key={index}>
            <div className="row no-gutters">
              <div className="col-md-4"> 
                <img src={item.image} className="card-img" alt={item.name}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"> {item.description}</p>
                  <p className="card-text"><small className="text-muted"> {item.price}</small></p>
                  <button className="btn btn-outline-primary add-to-cart" type="submit" name="action" onClick={() => {addToCart(item)}} >Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
      ))}

    </div>


  )
}

export default Potions;