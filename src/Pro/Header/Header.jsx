import React,{ useState} from 'react'
import HeaderPopup from './HeaderPopup';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  const [isHeaderPop, setisHeaderPop] = useState(false);
  return (
    <div>
        <ul>
            <li className='list1'
              onMouseOver={()=>{
                setisHeaderPop(!isHeaderPop);
              }}>
              Settings</li>
            <li className='list2'>
            <Link to="/cart" style={{color:"white"}}>Cart</Link></li>
            <li className='list3'>
            <Link to="/" style={{color:"white"}}>Log Out</Link></li>
        </ul>
        {isHeaderPop && <HeaderPopup />}
    </div>
  )
}

export default Header;