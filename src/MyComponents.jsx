import { useState } from "react"

const MyComponents=()=>{


    const [car,setCar]=useState([]);
    const [cayear,setCaryear]=useState(new Date().getFullYear());
    const [carmake,setCarMake]=useState("");
    const [carmodel,setCarModel]=useState("");

    const handleAddCar=()=>{
        const newCar={year:cayear,make:carmake,model:carmodel};
        setCar((c)=>[...c,newCar])
        setCaryear(new Date().getFullYear())
        setCarMake("");
        setCarModel("")

    }

    const CarRemove=()=>{

    }

    const handleCarYear=(event)=>{
        setCaryear(event.target.value)

    }
    const handleCarMake=(event)=>{
        setCarMake(event.target.value)

    }
    const handleCarModel=(event)=>{
        setCarModel(event.target.value)

    }

    return(

        <div>
              <h2>this is my car</h2>
              {car.map((car,index)=><li key={index}>{car.year} {car.make} {car.model}</li>)}
              <input type="number" value={cayear} onChange={handleCarYear} /><br/>
              <input type="text" value={carmake}onChange={handleCarMake} placeholder="Enter car make" /><br/>
              <input type="text" value={carmodel} onChange={ handleCarModel} placeholder="Enter car model"/><br/>
              <button onClick={handleAddCar}>Add Here</button>
        </div>
    );



}
export default MyComponents