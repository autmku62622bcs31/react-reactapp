import { useState } from "react";
import img from "../assets/react.svg"
function Counting(){
    const [quantity,setQuantity]=useState(0);

    const increaseQuantity=()=>{
        setQuantity(quantity+1);
    }
    const decreaseQuantity=()=>{
        setQuantity(quantity-1);
    }

    return(
        <div className="buy">
            <img src={img} alt="" />
            <p>Quantity:</p>
            <div className="buyset">
                <button onClick={decreaseQuantity}>-</button>
                <p className="set">{quantity}</p>
                <button onClick={increaseQuantity}>+</button>
            </div>
        </div>
    )
}
export default Counting;