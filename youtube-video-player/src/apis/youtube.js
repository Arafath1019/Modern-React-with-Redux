import axios from "axios";

const KEY = "AIzaSyBJOUJzCs_qPP118V7ux9OYr8EBx2YsA3A";

export default axios.create({
    baseURL: 'your_youtube_api_goes_here',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});