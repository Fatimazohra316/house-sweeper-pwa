import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../images/justin.png';
import image8 from "../images/account.png";;


function Setting() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    let emailData;
   
    if(localStorage.getItem("data")){
       emailData = JSON.parse(localStorage.getItem("data"))
      
      }
    useEffect(()=>{
      setEmail(emailData.email)
    },[])
    function moveToProfile(){
        navigate("/profile")
    }
    return (
       <div>
          {email? <div className="container">
               <div>
                        <div onClick={moveToProfile} className="priceDiv">
                          <div className="profileDiv">
                          <img src={image1}/>  
                          <p className="details">My Details</p>
                          </div>
                        </div>
                    </div> 
              
        </div> : <div className="d-flex justify-content-center align-items-center">
        <div className="container loginRequired">
            <div><img src={image8}/></div>
             <p>Login required</p>
            </div></div>}
       </div>
    )
}



export default Setting;