import { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
  // const handleClick = (event, newValue) => {
  //     console.log(event);
  //     console.log(newValue);
  // }

  const [counter, setCounter] = useState(value);

  const handleSum = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleSubtraction = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      {/* <h2>{ value }</h2> */}
      {/* <button onClick={ (event) => handleClick(event, 'Hola') }> +1 </button> */}

      <h2>{counter}</h2>
      <button onClick={handleSum}> +1 </button>
      <button onClick={handleSubtraction}> -1 </button>

      <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
    </>
  );
}

export default CounterApp;

CounterApp.prototypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
