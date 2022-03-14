import { useEffect, useState } from "react";
import  Button  from ".././Button/Button"
import "./Main.css"

const Main = () => {

    const [count, setCount] = useState(10)
    const [ maxLimit, setMaxLimit] = useState(19)
    const [minLimit, setMinLimit] = useState(0)
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

        setMaxLimit(value)
    }


    const changeMinHandler = (value) => {

        setMinLimit(value)
    }


    return(
        <>
        <div>
            <label htmlFor="">Max Limit</label>
            <input type="number" onChange={(e) => changeMaxHandler(e.target.value)} ></input>
            <br></br>
            <label htmlFor="">Min limit</label>
            <input type="number" onChange={(e) => changeMinHandler(e.target.value) } />
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