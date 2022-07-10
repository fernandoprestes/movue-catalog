const { fetchAllPopularMovies } = useFetchMovies();
import { IMoviesResults } from '~/type/IMoviesResults';

interface MoviesProps {
  page: number;
  results: Array<IMoviesResults>;
  total_pages: number;
  total_results: number;
}

export const useMoviesStore = defineStore('useMovies', {
  state: () => {
    return {
      moviesList: {} as MoviesProps,
    };
  },

  getters: {
    movies: state => state.moviesList,
  },

  actions: {
    async getMovies() {
      const data = await fetchAllPopularMovies();
      this.moviesList = data;
    },
  },
});
