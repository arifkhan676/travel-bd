import React from 'react'
import './Story.css'

const DivCard = (props) => {
    return (
        <div className='div-card' >
            <h1>{props.num}</h1>
            <h4>{props.para}</h4>
        </div>
    )
}

export default DivCard
