import React from 'react'


const Buttons = ({index, currentQty, onChange}) => {
    // console.log("hi", onChange, index, currentQty)
    return (
        <div className="flex-cln">
            <button onClick={ e => onChange(index, parseInt(currentQty) + 1 || 0) } className="btn-qty">+</button>
            <button onClick={ e => onChange(index, parseInt(currentQty) - 1 || 0) } className="btn-qty">-</button>
        </div>
    )
}

export default Buttons;