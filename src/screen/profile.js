import { FaceRetouchingNatural } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// import image1 from '../images/justin.png';
import image8 from "../images/profiles.jpg";
import { json } from "react-router-dom";



function Profile() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [status, setStatus] = useState("");
    const [country, setCountry] = useState("");
    const [email,setEmail] = useState('')

    let userDetails;
    const url = "https://cleaningapp.8tkt.com/public/api/editprofile";
    let data = JSON.parse(localStorage.getItem("data"));
    userDetails = data;
    const img = userDetails.img

     


   


    // console.log(userDetails);

    useEffect(() => {
        setEmail(userDetails.email)
        setName(userDetails.name);
        setAddress(userDetails.address);
        setStatus(userDetails.status);
        setUsername(userDetails.username);
        setCountry(userDetails.country)

    }, [])

    function updateProfile() {
        const datas = new FormData;
        datas.append("email", email);
        datas.append("name", name);
        datas.append("address", address);
        datas.append("username", username);
        datas.append("status", status);
        datas.append("country", country);




        userDetails.name = name;
        userDetails.address = address;
        userDetails.username = username;
        userDetails.status = status;
        userDetails.country = country;
        // userDetails.email = email;
        console.log(userDetails.email);
       

        fetch(url,{
            method : "POST",
            body : datas
        }).then((response)=>response.json()).then((success)=>{
            console.log(success);
            JSON.stringify(localStorage.setItem("data", JSON.stringify(userDetails)))
        })



        // console.log(email);
        // console.log(name);
    //     const fetchData = async () => {
    //         const response = await fetch(url, {
    //             method: "POST",
    //             body: datas
    //         })
    //         if (!response.ok) {
    //             throw new Error;
    //         } else {
    //             return response.json();
    //         }
    //     }


    //     fetchData()
    //         .then((res) => {
                
                
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })
     }



 



    return (
        <div>
            <div className="container">
                <div className="detailDiv">
                    <div className="profilesDiv">
                        <img className="detailImage" src={img ? img : image8} />
                        <p className="details">My Details</p>
                    </div>
                </div>
                <div className="informationDiv">
                    <div>
                        <div>
                            <p className="emailAddress">Email Address</p>
                            <div className="emailDiv">

                                <input disabled value={email} />
                            </div>
                        </div>
                        <div>
                            <p className="emailAddress"> Name</p>
                            <div className="emailDiv">

                                <input onChange={(e) => setName(e.target.value)} defaultValue={name} />
                            </div>
                        </div>
                        <div>
                            <p className="emailAddress"> Address</p>
                            <div className="emailDiv">

                                <input onChange={(e) => setAddress(e.target.value)} defaultValue={address} />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <p className="emailAddress">UserName</p>
                            <div className="emailDiv">

                                <input onChange={(e) => setUsername(e.target.value)} defaultValue={username} />
                            </div>
                        </div>
                        <div>
                            <p className="emailAddress">Status</p>
                            <div className="emailDiv">

                                <input onChange={(e) => setStatus(e.target.value)} defaultValue={status} />
                            </div>
                        </div>
                        <div>
                            <p className="emailAddress">Country</p>
                            <div className="emailDiv">

                                <input onChange={(e) => setCountry(e.target.value)} defaultValue={country} />
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


export default Profile;