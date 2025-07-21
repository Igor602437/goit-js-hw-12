import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42598065-1779ad5a953180c3fe77c2809';
  const requestParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '21',
  });

  return axios.get(`${BASE_URL}?${requestParams}`).then(response => {
    return response.data;
  });
}
