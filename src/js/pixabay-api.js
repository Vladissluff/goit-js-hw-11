import axios from 'axios';

const API_KEY = '49391964-291726ed136d1a3fb828b3b36';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchImages(query) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    });
    return response.data.hits;
}