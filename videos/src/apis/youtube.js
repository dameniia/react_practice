import axios from 'axios'
const KEY = 'AIzaSyBijaOGZqwSLfMaL0WlF2_5btdX2hFwYXc'

export default axios.create({
    baseURL:  'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'videos',
        key: KEY
    }
})
