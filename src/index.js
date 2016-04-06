import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBVgqyNxuUQb3qdmRmbaTSqE0QQu7TFA4Y';

// Create new component. This component to produce HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put on page.

ReactDOM.render(<App />, document.querySelector('.container'));

