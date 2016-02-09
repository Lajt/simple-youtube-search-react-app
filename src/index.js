import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import apiKey from './api';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = apiKey;
console.log(API_KEY);

 // Create new component that produce HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = { 
      videos: [], 
      selectedVideo: null 
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // this.setState({videos : videos }); ES6 only works if key and value is the same
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0] 
      });
    });

  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

 // Inject component's generated HTML into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
