import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component to produce HTML

const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put on page.

ReactDOM.render(<App />, document.querySelector('.container'));

