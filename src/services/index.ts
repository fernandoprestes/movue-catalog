const API_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export class Api {
  static async getAllPopularMovies(page = 1) {
    const response = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}&region=BR`,
    );
    return response.data;
  }

  static async getMoviesWithGenres(query: string, page = 1) {
    const response = await axios.get(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&page=${page}&${query}`,
    );
    return response.data;
  }

  static async getMovieDetails(movie_id: number) {
    const response = await axios.get(`${API_URL}/movie/${movie_id}?api_key=${API_KEY}&language=pt-BR`);
    return response.data;
  }

  static async getMovieCast(movie_id: number) {
    const response = await axios.get(`${API_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=pt-BR`);
    return response.data;
  }
}
