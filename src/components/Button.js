import React from "react"

const Button = ({text, handleClick}) => {
    return(
        <div className="button" onClick={handleClick}>
            <span>{text}</span>
        </div>
    )
}

export default Button;