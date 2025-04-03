const Lists=()=>{

    const fruits=[{id:1,name:"Orange",colory:90},
                  {id:2,name:"Mango",colory:100},
                  {id:3,name:"Pawapawa",colory:120},
                  {id:4,name:"Painapa",colory:80}];

                
    const listOfItems=fruits.map(fruit=><li key={fruit.id}>&nbsp;&nbsp;{fruit.name}:&nbsp;&nbsp;&nbsp;&nbsp;{fruit.colory}</li>);
   
    return(
        <>
           <h4><ol>{listOfItems}</ol></h4>
        </>


    );
}
export default Lists