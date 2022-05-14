import React from "react";
import bg from "./images/landing.avif"
import { Products } from "./Products";


import { FaTwitterSquare , FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import womens from "./images/womens.jpg";
import mens from "./images/mens.jpg";
import kids from "./images/kids.jpg";
import beauty from "./images/beauty.jpg";
import shoes from "./images/shoes&bags.jpg";
import logo from "./images/logo.jpg";
import "./styles.css"
export const Home=()=>{
    return (

        <div className="hero">
            <div className="card bg-dark text-white">
                <img src={bg} className="card-img" alt="bg" height="500px"/>
                <div className="card-img-overlay">
                  <div  className="container">
                      <h5 className="card-title display-4  mb-0">NEW SESSION ARRIVALS</h5>
                      <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
 
                    </div>
               </div>
           </div>
    


           <div id="carouser">
         <div><img src={womens} alt="" /> <button>Womens</button ></div>
         <div><img src={mens} alt="" /> <button>Mens</button></div>
         <div><img src={kids} alt="" /> <button>Kids</button></div>
         <div><img src={shoes} alt="" /> <button>Shoes</button></div>
         <div><img src={beauty} alt="" /> <button>Beauty</button></div>   
    </div>

           <section>
    <div id="footer">
      <div className="roww">
        <div >
          <img src={logo} alt="" />
          <p  >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
         
          <div  >
        
            <FaFacebookSquare className="icons"/>
            <FaTwitterSquare className="icons"/>
            <FaInstagram className="icons"/>
          </div>
        </div>

        <div  >
          <h2>About </h2>
          <p>about us</p>
          <p>Contact us</p>
          <p>Our Blogs</p>
          <p>Our Service</p>
        </div>

        <div >
          <h3  >Help</h3>
          <p>Product issue solve</p>
          <p>Faqce</p>
          <p>Welfixce</p>
        </div>

        <div>
          <h3>Download Apps</h3>
          <button >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="apps"
              viewBox="0 0 512 512"
            >
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
           
              <span  >GET IT ON Google Play</span>
           
          </button>
          <br />
          <br />

          <button  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="apps"
              viewBox="0 0 305 305"
            >
             <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
           
              <span >Download on the App Store</span>
           
          </button>
        </div>
      </div>

      <hr />
      <div  >
        <p>
          &copy; {new Date().getFullYear()} All Copyright Reserved  
        </p>
      </div>
    </div>
    </section>
        </div>
    )
}