
function Student(props){
    return (

         <div className="pro"><p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
         <p>Result: {props.isStudent?"yes":"No"}</p>
           
            </div>
            
             );
}



export default Student