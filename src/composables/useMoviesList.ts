const { fetchAllPopularMovies } = useFetchMovies();
import { MoviesResults as MoviesResultsTypes } from '~/types/MoviesResults';

interface MoviesStoreProps {
  page: number;
  results: Array<MoviesResultsTypes>;
  total_pages: number;
  total_results: number;
}

export const useMoviesStore = defineStore('useMoviesList', {
  state: () => {
    return {
      moviesList: {} as MoviesStoreProps,
    };
  },

  getters: {
    moviesListPage: state => state.moviesList.page,
    moviesListResults: state => state.moviesList.results,
    moviesListTotalPage: state => state.moviesList.total_pages,
    moviesLisTotalResults: state => state.moviesList.total_results,
  },

  actions: {
    async getMovies(page = 1) {
      const data = await fetchAllPopularMovies(page);
      this.moviesList = data;
    },
  },
});
