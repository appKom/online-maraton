import React from "react";
import "../styles/JoggaSpesial.css";

const JoggaSpesial = (data) => {
  const grassHeight = 25;
  const nodeRadius = 10;
  const numOfRunners = data.data.length;
  const trackTop = 50;
  const triangleWidth = 10;

  const viewboxHeight = trackTop + grassHeight * numOfRunners;
  const viewboxWidth = 350;
  const trackWidth = 300;
  const xConstant = (viewboxWidth - trackWidth) / 2;

  const firstplaceX = trackWidth - nodeRadius - 1;

  let firstPlaceTotal = 0;
  data.data.forEach((runner) => {
    if (runner.total > firstPlaceTotal) {
      firstPlaceTotal = runner.total;
    }
  });

  const colors = [
    "#FF9900",
    "#F9B759",
    "#DDC15C",
    "#44BBA4",
    "#3A8E71",
    "#29888C",
  ];

  console.log(data.data);

  return (
    <div className="jogga-div">
      <svg
        className="jogga-svg"
        id="e15LCYrABvo1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
      >
        {data.data.map((runner, i) => {
          //let xPosition = ((i + 1) / numOfRunners) * firstplaceX - 15;
          let xPosition =
            (runner.total / firstPlaceTotal) * firstplaceX * 0.8 + 45;
          let yPosition = trackTop + i * grassHeight;

          let runnerColor = colors[i % colors.length];

          return (
            <g key={i}>
              {/* Whole lane */}
              <rect
                width={trackWidth}
                height={grassHeight}
                transform={`translate(
                    ${xConstant}
                    ${trackTop + i * grassHeight})`}
                fill="#0d5474"
                strokeWidth=".75"
                stroke="#072f41"
              />
              {/* Starting line */}
              <rect
                width="1"
                height={grassHeight - 6}
                transform={`translate(
                    ${xConstant + grassHeight}
                    ${yPosition + 3}
                    )`}
                fill="#FFFFFF"
              />
              {/* Lane number */}
              <text
                transform={`translate(
                    ${xConstant + 8}
                    ${trackTop + (i + 1) * grassHeight - 7}
                    )`}
                fill="#FFF"
                fontSize={14}
              >
                {i + 1}
              </text>

              {/* Markers */}
              {/* Marker bubble */}
              <ellipse
                rx={nodeRadius}
                ry={nodeRadius}
                fill={runnerColor}
                transform={`translate(
                    ${xConstant + xPosition}
                    ${yPosition - 20}
                )`}
              />
              {/* Marker text */}
              <text
                x={xConstant + xPosition}
                y={yPosition - 20}
                textAnchor="middle"
                fill="#fff"
                strokeWidth="0"
                dy=".3em"
                fontSize={10}
              >
                {/*{runner.firstname} {runner.lastname}*/}
                {runner.firstname[0]}
                {runner.lastname[0]}
              </text>
              {/* Marker triangle */}
              <polygon
                fill={runnerColor}
                points="0,0 10,0 5,7.5"
                transform={`translate(
                    ${xConstant + xPosition - nodeRadius / 2}
                    ${yPosition + triangleWidth - 25}
                    )`}
              />
              {/* Running man */}
              <image
                href="/running-person.png"
                width="30"
                height="30"
                transform={`translate(
                    ${xConstant + xPosition - nodeRadius / 2 - 13}
                    ${yPosition + triangleWidth - 17}
                    )`}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default JoggaSpesial;
