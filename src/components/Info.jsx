import React from "react";
import "./css/Info.css";

const Info = () => {
    return (
        <div>
            <p className="contact-me">Contate-me</p>
            <p className="contact-number"><i class="fa fa-phone" aria-hidden="true"></i> +55 (19) 99812-6202</p>
            <img src="/assets/contact-image.png" className="contact-image"/>
            <p className="contact-text">luisaprendin@hotmail.com</p>
            <p className="contact-text">Paulínia, SP - Brasil</p>
            <hr class="fixed-info"/>
        </div>
    );   
}

export default Info;
