import { NavLink, useNavigate } from "react-router-dom";
const Navbar=()=>{
const navigate=useNavigate()
    return(
       <div className="navbar">
          <ul>
           <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="Contact"><li>Contact</li></NavLink> 
           <NavLink to="About"><li>About</li></NavLink>
           <NavLink to="Profile"><li>Profile</li></NavLink>
           </ul>

           <input type="text" placeholder="search here" />
           <button className="but" onClick={()=>navigate("/Sign Up")}>Sign up</button>
       </div>
    );
}
export default Navbar