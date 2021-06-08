import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Die from './Die';
import './RollDice.css';

const RollDice = props => {

  const [faceValue, setFaceValue] = useState(
    { die1: 'one', die2: 'one', rolling: false });

  const roll = () => {
    const newDie1 = props.sides[
      Math.floor(Math.random() * props.sides.length)
    ];
    const newDie2 = props.sides[
      Math.floor(Math.random() * props.sides.length)
    ];
    
    setFaceValue({ die1: newDie1, die2: newDie2, rolling: true })

    setTimeout(() => {
      setFaceValue({ die1: newDie1, die2: newDie2, rolling: false })
    }, 1000);

  };

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={faceValue.die1} rolling={ faceValue.rolling}/>
        <Die face={faceValue.die2} rolling={faceValue.rolling}/>
      </div>
      <button onClick={roll} disabled={faceValue.rolling}>
        {faceValue.rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  )
}

RollDice.defaultProps = {
  sides: ["one", "two", "three", "four", "five", "six"]
};

// RollDice.propTypes = {
//   sides: ["one", "two", "three", "four", "five", "six"]
// }

export default RollDice;
