import React from 'react';

const SplitHeading = ({ part1, part2, center = false, noAnimation = true, style = {} }) => {
  const classes = `split-heading ${center ? 'center-title' : ''} ${noAnimation ? 'no-animation' : ''}`;

  return (
    <h2 className={classes} style={style}>
      <span className="half-1">{part1} </span>
      <span className="half-2"> {part2}</span>
    </h2>
  );
};

export default SplitHeading;
