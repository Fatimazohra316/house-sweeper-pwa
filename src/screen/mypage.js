import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import close from '../images/close.png'



function MyPage(){
    const navigate = useNavigate()
    const [email,setEmailAddress] = useState();
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState('')
    let url1 = "https://cleaningapp.8tkt.com/public/api/signin";
    function submituser(e) {
        e.preventDefault();
        const customerDetails = new FormData;
        customerDetails.append("email", email);
        customerDetails.append("cpass", password);
        fetch(url1, {
            method: "POST",
            body: customerDetails,

        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem("data", JSON.stringify(data))
                console.log(data);
                if (data.error) {
                    // alert(data.error);
                    setMessage(data.error)
                   
                   

                }
               

            })


    }
    return(
        <div><form onSubmit={submituser} className="box">
        <img className="close"  src={close} />
       
        <p className="access">Access your Account</p>
        <p className="dontAccount">Don’t have an account? <span onClick={()=>navigate('/signup')}>Signup</span></p>
        <div className="container d-block m-auto">
            <div className="emaildiv">
                <p>Email</p>
                <input onChange={(e) => setEmailAddress(e.target.value)} className="emailInput" />
            </div>
            <div className="emaildiv">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} className="emailInput" />
                
            </div>
            <p>{message}</p>
            <button  className="loginButton">Log In</button>
        </div>
    </form> </div>
    )
}


export default MyPage;