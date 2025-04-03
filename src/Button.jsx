function Button(){
     let count=0;
    const handleClick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me`)
        }else{
            console.log(`${name} why are clicking more than 3 times please stop`)
        }

    };
    return(

        <button onClick={()=>handleClick("mucyo")}>click me </button>
    );


}
export default Button