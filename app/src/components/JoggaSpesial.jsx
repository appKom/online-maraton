import React from 'react'
import "../styles/JoggaSpesial.css"

const JoggaSpesial = () => {
    const grassHeight = 20
    const nodeRadius = 10
    const numOfRunners = 6
    const trackTop = 50
    const triangleWidth = 10
    const viewboxHeight = trackTop + grassHeight * numOfRunners
    const viewboxWidth = 300
    const firstplaceX = viewboxWidth - (nodeRadius) - 1
    return (
        <div>
            <svg id="e15LCYrABvo1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}>

                {[...Array(6).keys()].map((i) =>
                    <g>
                        {/* Track fields: */}
                        <rect width="300" height={`${grassHeight}`} transform={`translate(0 ${trackTop + i * grassHeight})`} fill="#dd1111" stroke-width="1" stroke="#FFF" />
                        {/* <line width/> */}

                        {/* Markers */}
                        <ellipse rx={nodeRadius} ry={nodeRadius} fill="#d2dbed" stroke="#000" transform={`translate(${((i + 1) / numOfRunners) * firstplaceX} ${trackTop + i * grassHeight})`} />
                        <text x={`${((i + 1) / numOfRunners) * firstplaceX}`} y={`${trackTop + i * grassHeight}`} text-anchor="middle" stroke="#51c5cf" stroke-width="1px" dy=".3em" fontSize={10}>MN</text>
                        <polygon points="0,0 10,0 5,7.5" transform={`translate(${((i + 1) / numOfRunners) * firstplaceX - nodeRadius / 2} ${trackTop + i * grassHeight + triangleWidth})`} />
                    </g>
                )}
            </svg>
        </div>

    )
}

export default JoggaSpesial