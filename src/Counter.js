import { useState } from "react";

export default function Counter(){
    const  [value, setValue] =useState(0)
    function handleClick(){
        setValue(value +1)
    }
    return(
        <div>
            <p>{value}</p>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}