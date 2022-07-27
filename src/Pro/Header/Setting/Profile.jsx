import React from 'react';
import { Link } from 'react-router-dom'
import "./Profile.css";

function Profile() {
  return (
    <div className='profile' style={{    position: "absolute",
        color: "teal",
        backgroundcolor: "beige",
        width: "100%",
        height: "100%",
        }}>
        <div>
           <h1>Profile Information </h1><Link to="#" style={{left:"60px", color:"blue"}}>edit</Link>
        </div>
        <br/>
        <input className='text_area' type="text area" placeholder="Rishabh Pratap Singh" /><br/><br/><br/>
        
        <div className='gender'>
            <h5>Your Gender</h5>
            <input type="radio" name="gender" value="male"  checked />
             Male
            <input type="radio" name="gender" value="female" style={{ left: "37px", position: "relative"}} disabled />
            <label for="gender" style={{ left: "37px", position: "relative"}}>Female</label> 
            <input type="radio" name="gender" value="other" style={{ left: "70px", position: "relative"}} disabled />
            <label for="gender" style={{ left: "70px", position: "relative"}}>Other</label>           
        </div>
        <br/>
        <br/>
        <div>
            <h4>Your Email Id:</h4>
            <input className='text_area' type="email" placeholder="rishabh2459@gmail.com" />
        </div>
        <br/>
        <br/>
        <div>
            <h4>Your Mobile No. :</h4>
            <input className='text_area' type="mobile" placeholder="9455641320" />
        </div>
    </div>
  )
}

export default Profile;