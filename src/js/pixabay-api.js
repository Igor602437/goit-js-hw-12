import axios from 'axios';

export const perFotoLimit = 15;
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const API_KEY = '42598065-1779ad5a953180c3fe77c2809';
  const axiosOptions = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perFotoLimit,
      page: page,
    },
  };
  const response = await axios.get(``, axiosOptions);

  return response.data;
}
