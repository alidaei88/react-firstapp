

const Button = ({children, style}) => {

    return (
        <div>
            <button className="button" style={ {style} }>{ children }</button>
        </div>
    )
}

export default Button