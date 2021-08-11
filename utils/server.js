const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  genres: {
    title: "genres",
    url: `/genre/movie/list?api_key=${API_KEY}&language=en-US
`,
  },
  discover: {
    title: "discover",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  },

  trending: {
    title: "trending",
    url: `/trending/all/day?api_key=${API_KEY}
`,
  },

  results: {
    title: "results",
    url: `/discover/movie?api_key=ee6fdf67b0b4cf0acc0aed720f3da8ce&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`,
  },
};
