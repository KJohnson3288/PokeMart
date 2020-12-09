import React, { useState } from 'react'
import "../../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

toast.configure();




const Pokeballs = (props) => {

  const [Items] = useState([
    {
      name: "Poke Ball",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/d/dc/GO_Pok%C3%A9_Ball.png",
      description: "A device for catching wild Pokémon. It's thrown like a ball at a Pokémon, comfortably encapsulating its target."
      
    },
    {
      name: "Great Ball",
      price: "$" + 600,
      image: "https://cdn.bulbagarden.net/upload/thumb/9/95/GO_Great_Ball.png/150px-GO_Great_Ball.png",
      description: "A good, high-performance Poké Ball that provides a higher success rate for catching Pokémon than a standard Poké Ball."
      
    },
    {
      name: "Ultra Ball",
      price: "$" + 800,
      image: "https://cdn.bulbagarden.net/upload/thumb/5/5a/GO_Ultra_Ball.png/150px-GO_Ultra_Ball.png",
      description: "An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."
     
    },
    {
      name: "Master Ball",
      price: "$" + 100000,
      image: "https://cdn.bulbagarden.net/upload/7/73/GO_Master_Ball.png",
      description: "The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail."
      
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
      
      <div className="jumbotron jumbotron-fluid pokeball-title">
        <div className="container">
          <h1 className="display-4 font-weight-bolder text-white">Poke Balls</h1>
          <p className="lead font-weight-bold text-white"> A must have for any pokemon trainer, we have the best quality of all types to
          supply the trainers that want to catch'em all! </p>
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

export default Pokeballs;