import React from 'react'
import "../styles/JoggaSpesial.css"

const JoggaSpesial = () => {
    const grassHeight = 10
    const nodeRadius = 10
    const triangleWidth = 10
    const viewboxHeight = 50
    const viewboxWidth = 300
    const firstplaceX = viewboxWidth - (nodeRadius) - 1
    return (
        <div>
            <svg id="e15LCYrABvo1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}>
                <g>
                    <ellipse rx={nodeRadius} ry={nodeRadius} fill="#d2dbed" stroke="#000" transform={`translate(${firstplaceX} 20)`} />
                    <polygon points="0,0 10,0 5,7.5" transform={`translate(${firstplaceX - nodeRadius / 2} 31)`} />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf" stroke-width="2px" dy=".3em">DL</text>
                </g>
                <rect width="300" height="10" transform="translate(0 40)" fill="#105802" stroke-width="0" />
            </svg>
        </div>

    )
}

export default JoggaSpesial