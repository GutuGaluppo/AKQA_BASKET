import React from 'react'


const Buttons = ({index, currentQty, onChange}) => {
    // console.log("hi", onChange, index, currentQty)
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <button onClick={ e => onChange(index, parseInt(currentQty) + 1 || 0) }>+</button>
            <button onClick={ e => onChange(index, parseInt(currentQty) - 1 || 0) }>-</button>
        </div>
    )
}

export default Buttons;