import React from "react";
import "./css/Home.css";
import Works from "./Works";
import Info from "./Info";
import profilePhoto from "../assets/profile.jpg";

    
const Home = () => {
    
    return (
       
        <div className="background">   
            <div className="whoiam">  
                <img src={profilePhoto} className="profile-apresentation"/>  
                <div>
                    <p className="profile-name">LUISA PRENDIN</p>
                    <p className="profile-text">Através da arte demonstro quem sou, o mundo aos meus olhos se transforma em pinturas a óleo.</p>
                    <p className="profile-icons"> 
                        <a class="icons" href="https://www.facebook.com/luisa.prendin.9" target="_blank"> <i class="fa fa-facebook m-4" aria-hidden="true"></i></a>
                        <a class="icons" href="https://twitter.com/luisaprendin_" target="_blank"> <i class="fa fa-twitter m-4" aria-hidden="true"></i></a>
                        <a class="icons" href="https://www.instagram.com/luprendinartes/" target="_blank"> <i class="fa fa-instagram m-4" aria-hidden="true"></i></a>
                    </p>
                </div>  
            </div>     

            <hr class="fixed"/>   

          
            <div className="profile-about">
                <p className="description">Pincel, tela e cor : <br/> UMA JANELA PARA A VIDA</p>
                <a class="icons" href="#section1"><i class="fa fa-arrow-down fa-4x" aria-hidden="true"></i></a>
                <p className="description-view">SEGUE PORTFÓLIO</p>
                
            </div>

            <div className="grid-container" id="section1">
                <Works />
            </div> 
            <Info />
          
            
            <footer>
                <div className="container">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <p className="footer-about">This page was made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a class="footer" href="https://github.com/VauP" target="_blank">VauP</a></p>
                    </div>  
                </div>
            </footer>

        </div>   
    );
}

export default Home;
