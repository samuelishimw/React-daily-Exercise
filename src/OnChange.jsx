import React, {useState} from "react";

function Clicki(){

    const [name,setName]=useState("");
    const [quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState("Give comment")
    const [payment,setPayment]=useState("master card")
    const [shipping,setShipping]=useState("Delivary")



    const shippingFunc=(event)=>{
        setShipping(event.target.value)
    }
    const Insert=(event)=>{

        setName(event.target.value);


    }

    const quantityFunc=(event)=>{
         setQuantity(event.target.value);
    }

    const myComment=(event)=>{
        setComment(event.target.value)
    }


    const peyment=(event)=>{
        setPayment(event.target.value)
    }
    return(

        <div>
            <input onChange={Insert} value={name} />
            <h3>Name: {name}</h3>


            <input type="number" value={quantity} onChange={quantityFunc} />
              <h3>Quantity: {quantity}</h3>

              <textarea onChange={myComment} value={comment}></textarea>
              <h2>Comment : {comment}</h2>

              <select onChange={peyment} value={payment}>
                          
                          <option value="">select your payment</option>
                          <option value="Visa">Visa</option>
                          <option value="master card">master card</option>
                          <option value="Green card">Green card</option>
                          <option value="Rss">Rss</option>
                          <option value="Imbuto foundation">Imbuto foundation</option>

              </select>
              <h2>Payment: {payment}</h2>


              <label>
              <input type="radio" value="pick up" checked={shipping==="pick up"} onChange={shippingFunc}/>
              pick up
              </label>
                <label>
              <input type="radio" value="Delivary" checked={shipping==="Delivary"} onChange={shippingFunc}/>
              Delivary
              </label>

              <p>shipping : {shipping}</p>

        </div>

    );
}
   export default Clicki