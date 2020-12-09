import React from "react"
import "../App.css";
import Logo from "./Pokemon-images/pokeball-logo.png";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid main-title">
                <div className="container d-flex flex-column bd-highlight mb-3">
                    <h1 className="display-4 font-weight-bolder text-white p-2 bd-highlight pokemart">PokeMart</h1>
                    <img className="poke-logo p-2 bd-highlight" src={Logo} alt="PokeMart Logo"/>
                    <p className="lead font-weight-bold p-2 bd-highlight pokemart">We have all the supplies needed for trainers of all types.</p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;