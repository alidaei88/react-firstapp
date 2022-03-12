import { useEffect, useState } from "react";
import  Button  from ".././Button/Button"
import "./Main.css"

const Main = () => {

    const [count, setCount] = useState(10)

    const [color, setColor] = useState("#ccc")
    
    useEffect(() => {
        if (count > 15) {
            setColor("rgba(0,128,0, 0.2)")
        } else if (count < 5) {
            setColor("rgba(255, 0, 0, 0.2)")
        } else {
            setColor("#ccc")
          }
    }, [count])

    return(
        <div className="main" style={{ backgroundColor: color }}>
            <Button style={ {backgroundColor: "green"}} onClick={ () => setCount(count+1) } > + </Button>
            <span className="counter" > { count } </span>
            <Button style={ {backgroundColor: "red"} } onClick={ () => setCount(count-1) }> - </Button>
        </div>
    );

}


export default Main;