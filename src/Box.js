import React from 'react'

function Box(props) {
return (
    <div className="grid">
    <h1>{props.name}</h1>
    <p>{props.num}</p>
    <p>{props.num2}</p>
    <p>{props.num3}</p>
    </div>
)

}

export default Box;