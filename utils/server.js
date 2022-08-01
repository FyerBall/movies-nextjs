const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  trending: {
    url: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  },

  upcoming: {
    url: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  },
  people: {
    url: `${BASE_URL}/person/popular?api_key=${API_KEY}`,
  },
};
