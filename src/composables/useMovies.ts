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
    moviesListPage: state => state.moviesList.page,
    moviesListResults: state => state.moviesList.results,
    moviesListTotalPage: state => state.moviesList.total_pages,
    moviesLisTotalResults: state => state.moviesList.total_results,
  },

  actions: {
    async getMovies() {
      const data = await fetchAllPopularMovies();
      this.moviesList = data;
    },
  },
});
