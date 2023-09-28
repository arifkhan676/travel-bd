import React from 'react'
import sample from './travel bd.mp4';

const BgVideo = () => {
    return (
        <div>
            <video style={{ width: '100%', height: '180vh' }} className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
        </div>
    )
}

export default BgVideo
