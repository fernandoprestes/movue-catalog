import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export class Api {
  static async getAllPopularMovies(page = 1) {
    const response = await axios.get(`${API_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=${page}&region=BR`);
    return response.data;
  }

  static async getMoviesWithGenres(query: string, page = 1) {
    // query = &with_genres=18&with_genres=14
    const response = await axios.get(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR${query}&page=${page}&region=BR`,
    );
    return response.data;
  }
}
