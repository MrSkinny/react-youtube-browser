import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBVgqyNxuUQb3qdmRmbaTSqE0QQu7TFA4Y';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'xbox' }, (videos) => {
      this.setState({ videos });
    });
  }
  
  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}


// Take this component's generated HTML and put on page.

ReactDOM.render(<App />, document.querySelector('.container'));

