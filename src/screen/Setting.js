import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../images/justin.png';
import image8 from "../images/account.png";
import image9 from "../images/profiles.jpg";
import image10 from "../images/reload.png";


function Setting() {
    const navigate = useNavigate();
    let email;
    let emailData;
    let name;
    let img ;
   
    if(localStorage.getItem("data")){
       emailData = JSON.parse(localStorage.getItem("data"))
       email = emailData.email;
       name = emailData.name;
       img = emailData.img

      }
   
    function moveToProfile(){
        navigate("/profile")
    }
    function moveToPassword(){
        navigate("/password")
    }
    return (
       <div>
          {email? <div className="container">
               <div>
                        <div onClick={moveToProfile} className="priceDiv">
                          <div className="profileDiv">
                          <img className="profileDetail" src={img ? img : image9}/>  
                          <p className="details">{name} Details</p>
                          </div>
                        </div>
                    </div> 
               <div>
                        <div onClick={moveToPassword} className="priceDiv">
                          <div className="profileDiv">
                          <img className="profileDetail" src={image10}/>  
                          <p className="details">Change Password</p>
                          </div>
                        </div>
                    </div> 
              
        </div> : <div className="d-flex justify-content-center align-items-center">
        <div className="container loginRequired">
            <div><img  src={image8}/></div>
             <p>Login required</p>
            </div></div>}
       </div>
    )
}



export default Setting;