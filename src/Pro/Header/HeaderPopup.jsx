import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function HeaderPopup() {
  return (
    <div className='headerPopup'>
        <ul style={{ display: "table-row", height: "75px",color: "white"}}>
            <li>
            <Link to="/profile" style={{color:"white"}}>Profile</Link></li>
            <li style={{ position: "relative",
            top: "17px"}}>
            Change Password</li>
        </ul>
    </div>
  )
}

export default HeaderPopup;