import React, { useState } from 'react'
import "../../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


toast.configure();


const Heals = (props) => {


  const [Items] = useState([
    {
      name: "Burn Heal",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png",
      description: "A spray-type medicine for treating burns. It can be used to heal a single Pokémon suffering from a burn."
      
    },
    {
      name: "Ice Heal",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/2/2a/Dream_Ice_Heal_Sprite.png",
      description: "A spray-type medicine for treating freezing. It can be used to thaw out a single Pokémon that has been frozen solid."
      
    },
    {
      name: "Paralyze Heal",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/2/2a/Dream_Paralyze_Heal_Sprite.png",
      description: "A spray-type medicine for treating paralysis. It can be used to free a single Pokémon that has been paralyzed."
      
    },
    {
      name: "Antidote",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/4/42/Dream_Antidote_Sprite.png",
      description: "A spray-type medicine for treating poisoning. It can be used to lift the effects of being poisoned from a single Pokémon."
      
    },
    {
      name: "Awakening",
      price: "$" + 200,
      image: "https://cdn.bulbagarden.net/upload/7/7b/Dream_Awakening_Sprite.png",
      description: "A spray-type medicine to wake the sleeping. It can be used to rouse a single Pokémon from the clutches of sleep."
      
    },
    {
      name: "Full Heal",
      price: "$" + 400,
      image: "https://cdn.bulbagarden.net/upload/0/07/Dream_Full_Heal_Sprite.png",
      description: "A spray-type medicine that is broadly effective. It can be used to heal all the status conditions of a single Pokémon."
      
    },
    {
      name: "Full Restore",
      price: "$" + 3000,
      image: "https://cdn.bulbagarden.net/upload/0/0c/Dream_Full_Restore_Sprite.png",
      description: "A medicine that can be used to fully restore the HP of a single Pokémon and heal any status conditions it has."
     
    },
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

      <div className="jumbotron jumbotron-fluid heal-title">
        <div className="container">
          <h1 className="display-4 font-weight-bolder text-white">Heal Items</h1>
          <p className="lead font-weight-bold"> These items are used to heal your pokemon from any status affects they maythat may have occured from battle. </p>
        </div>
      </div>

      {Items.map((item, index) => (
        <div className="card mb-3" key={index}>
            <div className="row no-gutters">
              <div className="col-md-4"> 
                <img src={item.image} className="heal-img" alt={item.name}/>
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

export default Heals;