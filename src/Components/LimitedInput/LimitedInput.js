

const LimitedInput = (onchange, label) => {
    return (
        <div>
             <label htmlFor="">{ label }</label>
             <input type="number" onChange={ onchange } />
        </div>
    )
}


export default LimitedInput