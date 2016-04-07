import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

import SECRETS from './config/secrets.json';

const API_KEY = SECRETS.api_key;

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('xbox');

  }
  
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });    
  }
  
  render() {
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 400 );
    
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} 
        />
      </div>
    );
  }
}


// Take this component's generated HTML and put on page.

ReactDOM.render(<App />, document.querySelector('.container'));

