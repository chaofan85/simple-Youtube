import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './util/api_key.js';


const App = () => {
  console.log(API_KEY);
  return <div>Hi!</div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));
