// Import `useEffect` Hook from React
import React, { useState, useEffect } from 'react';

function Thermostat() {
  // Set the starting temperature
  const [temp, setTemp] = useState(67);
  // dependency:
    // If we had a function set up to find the temp by location, we could use this dependency to update the temp everytime the location is changed.
  const [location, setLocation] = useState('Newark, CA')

  // TODO: Use the `useEffect` Hook to set the `document.title` to the current temperature
  // YOUR CODE HERE
useEffect(() => {
  document.title = `${temp} ° Farenheit | ${location}`
}, [location])

// useEffect(() => {
//   console.log(location)
// })

function handleChange(event) {
  setLocation(event.target.value);
}

  // Handler for increasing the temp by 1
  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  // Handler for decreasing the temp by 1
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={increaseTemp}
        >
          Raise temperature
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={decreaseTemp}
        >
          Lower temperature
        </button>
        <div>
          <h3>Enter your location</h3>
        <input name='location' onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Thermostat;
