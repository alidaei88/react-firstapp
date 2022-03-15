import React from "react";
import { useEffect, useState } from "react";
import  Button  from ".././Button/Button"
import LimitedInput from "../LimitedInput/LimitedInput";
import "./Main.css"

const Main = () => {

    const [count, setCount] = useState(10)
    const [ maxLimit, setMaxLimit] = useState()
    const [minLimit, setMinLimit] = useState()
    const [color, setColor] = useState("#ccc")

    const increment = () => {

        if (count >= maxLimit) setCount(count) 
         else setCount(count+1)

    } 

    const decrement = () => {
        
        if (count <= minLimit) setCount(count)
        else setCount(count-1)
    }

    // const backgroundCOlor = () => {

    //     if (count > 15)  setColor("rgba(0,128,0, 0.5)")
    //     else if (count < 5)  setColor("rgba(255, 0, 0, 0.5)")
    //     else setColor("#ccc")

    // }
    
    
    useEffect(() => {

        if (count > 15)  setColor("rgba(0,128,0, 0.5)")
        else if (count < 5)  setColor("rgba(255, 0, 0, 0.5)")
        else setColor("#ccc")
    }, [count])


    const changeMaxHandler = (value) => {
        // if (value <= count) setCount(10)
         setMaxLimit(value)
        
    }


    const changeMinHandler = (value) => {

        setMinLimit(value)
    }


    return(
        <>
        {/* <div>
            <LimitedInput label={"Maximum Limit"} onchange={ changeMaxHandler }/>
            <LimitedInput label={"Minimum Limit"}  onchange={ changeMinHandler }/> 
        </div> */}
            
            <div className="limit-inputs-holder">
                <div className="maximum">
                     <label htmlFor="">{ "Maximum Limit:" }</label>
                     <input type="number" onChange={(e) => changeMaxHandler(+e.target.value) } />
                </div>  
                <div className="minimum">
                     <label htmlFor="">{ "Minimum Limit:" }</label>
                     <input  type="number" onChange={ (e) => changeMinHandler(+e.target.value) } />
                 </div>
              
        </div>    
        <div className="main" style={{ backgroundColor: color }}>
            <Button style={ {backgroundColor: "green"}} onClick={ increment } > + </Button>
            <span className="counter" > { count } </span>
            <Button style={ {backgroundColor: "red"} } onClick={ decrement }> - </Button>
        </div>

     </>
        
    );

}


export default Main;