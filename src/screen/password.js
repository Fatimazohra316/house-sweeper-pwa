import React from "react";

function ChangePassword(){
    
    let userDetails;
    let data = JSON.parse(localStorage.getItem("data"));
    userDetails = data.name;
    console.log(userDetails);
    return(
        <div>
           <div className="container">
               <div>
                        <div  className="passwordDiv">
                            <p>Hey, {userDetails} </p>
                         <p>Want to Change Password ? </p>
                         <div className="password">
                            <input placeholder="Enter Your Previous Password"  />
                             
                           
                        </div>
                         <div className="password">
                            <input placeholder="Enter Your New Password"  />
                             
                           
                        </div>
                        <div>
                    <button  className="nextButton">Update</button>
                </div>
                        </div>
                    </div> 
               
              
        </div>
        </div>
    )
}



export default ChangePassword;