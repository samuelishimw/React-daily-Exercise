import { replace, useNavigate } from "react-router-dom";

const SignUp=()=>{
   
   const navigate=useNavigate();
    return(

        <div><h3 className="regi">Register here</h3>
            <form method="POST">
                
                 <p><input type="text"  placeholder="Enter your name" /></p>
                 <p><input type="Email"  placeholder="Enter your Email" /></p>
                 <p><input type="number"  placeholder="Enter phone number" /></p>
                 <p><input type="password"  placeholder="Enter Password" /></p>
                 <button className="but" onClick={()=>navigate("/SignIn")}>Register</button>
            </form>
        </div>

    );
}
export default SignUp