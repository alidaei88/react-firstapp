import { useState } from "react";
import  Button  from ".././Button/Button"
import "./Main.css"

const Main = () => {

    const [ count, setCount ] = useState(10)

    return(
        <div className="main">
            <Button style={ {backgroundColor: "green"}}> + </Button>
            <span> { count } </span>
            <Button style={ {backgroundColor: "red"} }> - </Button>
        </div>
    );

}


export default Main;