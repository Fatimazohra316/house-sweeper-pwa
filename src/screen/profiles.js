import React, { useEffect, useState } from "react";
import Profile from "./profile";
import image1 from '../images/justin.png';
import { Form } from "react-router-dom";


function Profiles(){
    const [name,setName] = useState()
    const [username,setUsername] = useState();
    const [status,setStatus] = useState();
    const [email,setEmail] = useState();
    const [country,setCountry] = useState();
    const [address,setAddress] = useState();
    let datas ;
    const [arr,setArr] = useState([])
    const url = "https://cleaningapp.8tkt.com/public/api/editprofile";

    useEffect(()=>{

        const datas = JSON.parse(localStorage.getItem('data')).data;
        if(datas){
            // setData(detail.data);

            console.log(datas);
            setName(datas.name);
            setAddress(datas.address);
            setStatus(datas.status);
            setUsername(datas.username);
            setCountry(datas.country);
            setEmail(datas.email);
           
        }

    },[])
    

    const updateProfile = ()=>{
        let userData = new FormData ;
        userData.append('email',email);
        userData.append('name',name);
        userData.append('username',username);
        userData.append('status',status);
        userData.append('address',address);
        userData.append('country',country);
       
        fetch(url, {
            method : "POST",
            body :userData,
        })
            .then(response => {
                console.log(response.json());
              

                    const datas = JSON.parse(localStorage.getItem('data')).data;
                    if(datas){
                        // setData(detail.data);
            
                        // console.log(datas);
                        setName(datas.name);
                        setAddress(datas.address);
                        setStatus(datas.status);
                        setUsername(datas.username);
                        setCountry(datas.country);
                        setEmail(datas.email);
                       
                    }
            
              
                
            })
            .catch(error => {
                console.log(error);
            });
        
        
        
    }


    // console.log(datas);
    return(
        <div>
               <div className="container">
               <div  className="detailDiv">
                          <div className="profilesDiv">
                          <img src={image1}/>  
                          <p className="details">My Details</p>
                          </div>
                </div>
            <div className="informationDiv">
              <div>
               <div>
               <p className="emailAddress">Email Address</p>
               <div className="emailDiv">
                   
                    <input defaultValue={email}/>
                </div>
               </div>
               <div>
               <p className="emailAddress"> Name</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setName(e.target.value)} defaultValue={name} />
                </div>
               </div>
               <div>
               <p className="emailAddress"> Address</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setAddress(e.target.value)} defaultValue={address}/>
                </div>
               </div>
              
              </div>
              <div>
              <div>
               <p className="emailAddress">UserName</p>
               <div  className="emailDiv">
                   
                    <input onChange={(e)=>setUsername(e.target.value)} defaultValue={username}/>
                </div>
               </div>
              <div>
               <p className="emailAddress">Status</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setStatus(e.target.value)} defaultValue={status}/>
                </div>
               </div>
              <div>
               <p className="emailAddress">Country</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setCountry(e.target.value)} defaultValue={country}/>
                </div>
               </div>
              </div>
            </div>
            <div>
                <button onClick={updateProfile} className="nextButton">Update</button>
            </div>
        </div> : 
        </div>
    )
}



export default Profiles;