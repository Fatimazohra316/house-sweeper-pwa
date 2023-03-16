import axios from "axios";
import React, { useEffect, useState } from "react";
import image1 from "../images/purpleHand.png"
import { useNavigate } from "react-router-dom";


function Service() {
   
      const [item, setItem] = useState([]);
      const [arr, setArr] = useState([])
      const navigate = useNavigate();
      let data;
   
      const getData = () => {
         axios.post("https://cleaningapp.8tkt.com/public/api/categories").then((success) => {
           
            setItem(success.data.data)
            
         }).catch((err) => {
            
         })
         axios.post("https://cleaningapp.8tkt.com/public/api/services").then((success) => {
            setArr(success.data.data)
         }).catch((err) => {
            
         })
      }
    
      useEffect(() => {
         getData()
      }, [])
   
      function moveData(data) {
         navigate("/Item", {
            state: data
   
         })
       
   
      }
    
     
      return (
         <div className="container">
            <div>
              
               <p className="services"><img src={image1} /><span className="cleaning">Cleaning Services</span></p>
   
               {/* {alert(item)} */}
               <div className="cardMainDivs" >
                  {item.map((data) => (
                     <div className="card-bodys" onClick={() => moveData(data)} >
                        <div className="cardHalfPart"><img className="img" src={data.category_icon} /></div>
                        <div className="category">{data.category_name}</div>
   
   
                     </div>
                  ))}
               </div>
            </div>
            
         </div>
      )
   
}



export default Service;