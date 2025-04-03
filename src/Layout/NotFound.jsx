import { useNavigate } from "react-router-dom";

const NotFound=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <h3>404 Page Not Found</h3>
            <button>
                <button onClick={()=>navigate("/")} >Go to</button>
            </button>
        </div>
    );
}
export default NotFound