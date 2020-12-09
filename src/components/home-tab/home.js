import React from "react"
import "../../App.css";
import Apricorns from "../Pokemon-images/apricorns.png";
import Kurt from "../Pokemon-images/Kurt-Apricorn.jpeg";


function Home() {
    return (
        <div>

            <div className="card mb-3" key="index">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={Apricorns} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Coming Soon!</h5>
                            <p className="card-text">
                                We teamed up with the local custom pokeball shop. We will now be
                                        selling aricorns for trainers that want to craft custom pokeballs.</p>

                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 kurt-card">
                <img src={Kurt} className="card-img-top kurt" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Kurt <span> (Pokeball Smith) </span></h5>
                    <p className="card-text">Kurt is regarded as an expert in Poké Balls, and specializes 
                    in crafting Apricorn Balls. He is often working extensive hours trying to meet 
                    customer demands, though he enjoys the process and required attention to detail to 
                    achieve a good product. Despite his gruff nature, he is a generous individual who adores his 
                    granddaughter Maizie, who he is currently mentoring to make Apricorn Balls.</p>

                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
}

export default Home;