import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID f6OwLg2_r9-RY246pSRfP0jm2vEGLEOmgNW4Bg5qvX8',
    }
})


