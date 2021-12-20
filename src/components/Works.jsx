import React from "react";
import "./css/Works.css"
import samples from "../utils/samples";

const Works = () => {
    return (    
        samples.map((sample) => {  
            return (
                
                <div className="grid-item">
                    <a href={sample.link} target="_blank">
                        <img src={sample.image} className="sample-fix"/>
                    </a>
                   
                    <p className="sample-title"> {sample.title} </p>
                    <p className="sample-year"> {sample.year} </p>
                </div>
            );
        })
    );
    
}

export default Works;
