import "./Button.css"

const Button = ({children, style, onClick}) => {

    return (
        <div>
            <button className="button" style={style} onClick={ onClick }>{ children }</button>
        </div>
    )
}

export default Button