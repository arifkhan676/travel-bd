import React from 'react'
import './Story.css'
import DivCard from './DivCard'

const Stories = () => {

    return (
        <div className='repliq'>
            <h2>Story</h2>
            <div className="header">
                <h1>
                    RepliQ is here to help you <br /> <span className='book' > book more meetings </span>
                </h1>
            </div>
            <div className="paragraph">
                <p>
                    Today, generating leads through prospecting is increasingly DIFFICULT.
                    <br />  This is obviously something that always works, but you have to raise your <br />   LEVEL.
                </p>

            </div>

            <div className="about">
                <div className="about-left">

                    <h1> About Us </h1>
                    <p>
                        Looking for a way to increase reply rates in your cold outreach campaigns?
                        We did too! After creating several hundreds of cold email and Linkedin outreach campaigns we realized -
                        a strong copy is no longer enough. We started to look at what the receiver actually cares about when they received
                        our emails or messages.

                        The answer is suprisingly simple: They care about themselves!
                        Using RepliQ was a game changer for us to make it more about them. Our goal is now to help you
                        do the same and discover how simple it is to make a bigger impact in less time
                    </p>
                </div>
                <div className="about-right">
                    <div className="up-div">
                        <DivCard num='1,000,000+'
                            para='Videos generated'
                        />
                        <DivCard num='11'
                            para='Years of outreach experience'
                        />
                    </div>
                    <div className="bottom-div">
                        <DivCard num='7000+'
                            para='Meetings booked'
                        />

                        <DivCard num='97,2%'
                            para='Customer satisfaction'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stories
