import axios from 'axios';

export const getGifsByQuery = async (query) =>{
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=f6WEEl2xJi3B4BEIb8ZIY4o3nL0VAfbL&q=${query}&limit=100`)
    .then(res => {
        return res.data
    })
}