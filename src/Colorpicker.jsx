import React, {useState} from "react";

function Colorpicker(){

    const [color,setColor]=useState("#5ce4ff");
    const colorpicker=(event)=>{
        setColor(event.target.value)
    }

    return(

        <div className="color-picker-container">
            <h1 className="">color picker</h1>
            <div className="color-display" style={{backgroundColor:color}} >
                <p>selected color:{color}</p>
            </div>
            <label> select color:</label>
            <input type="color" value={color} onChange={colorpicker}/>
        </div>

    );
}
export default Colorpicker