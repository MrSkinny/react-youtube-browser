// same as `const Component = React.Component;`

import React, { Component } from 'react';

// !!Learning Notes!!
// All class-based components must have a render function

class SearchBar extends Component {
  render() {
    return(
      <input onChange={ event => console.log(event.target.value) } />
    );
  }
  
}

export default SearchBar;
