import axiosClient from "./axiosClient";
const apiKey = process.env.REACT_APP_TMDB_API;

const tmdbApi = {
  getTrendingMovies: (category, time, page = 1) => {
    const url = `trending/${category}/${time}?api_key=${apiKey}&page=${page}`;
    return axiosClient(url);
  },
  getMovies: (type, category) => {
    const url = `${category}/${type}?api_key=${apiKey}`;
    return axiosClient(url);
  },
  getDetails: (category, id) => {
    const url = `${category}/${id}?api_key=${apiKey}`;
    return axiosClient.get(url);
  },
  getSimilarMovies: (category, id) => {
    const url = `${category}/${id}/similar?api_key=${apiKey}`;
    return axiosClient.get(url);
  },
  getCredits: (category, id) => {
    const url = `${category}/${id}/credits?api_key=${apiKey}`;
    return axiosClient.get(url);
  },
  search: (category, query, page) => {
    const url = `search/${category}?api_key=${apiKey}&query=${query}&page=${page}`;
    return axiosClient.get(url);
  },
};

export default tmdbApi;
