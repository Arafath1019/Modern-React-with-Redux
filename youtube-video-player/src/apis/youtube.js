import axios from "axios";

const KEY = "AIzaSyBJOUJzCs_qPP118V7ux9OYr8EBx2YsA3A";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});