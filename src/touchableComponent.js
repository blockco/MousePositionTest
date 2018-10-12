import React from 'react';

const PositionLabel = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    position: {
      x = 0,
      y = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    backgroundColor = 'blue'
  } = props;

  return (
    <div style={{backgroundColor: backgroundColor, borderStyle: 'solid', borderCollapse: 'black', borderWidth: '2px'}}>
      {`x: ${x}`}<br />
      {`y: ${y}`}<br />
      {props.shouldShowIsActive && [`isActive: ${isActive}`, <br key="line-break"/>]}
      {`width: ${width}`}<br />
      {`height: ${height}`}<br />
      {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
      {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
      {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`}
    </div>
  );
};

PositionLabel.defaultProps = {
  shouldShowIsActive: true,
  backgroundColor: 'blue',
};

export default PositionLabel;
