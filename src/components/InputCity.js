import React from 'react';
import Button from './UI/Button';

const InputCity = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter city name"
        value={props.input}
        onChange={props.onChange}
      ></input>
      <Button title={'Get Weather'} />
    </form>
  );
};

export default InputCity;
