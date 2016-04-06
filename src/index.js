import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBVgqyNxuUQb3qdmRmbaTSqE0QQu7TFA4Y';

// Create new component. This component to produce HTML

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put on page.

ReactDOM.render(<App />, document.querySelector('.container'));

