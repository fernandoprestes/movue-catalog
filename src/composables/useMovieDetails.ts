const { fetchDetailsMovie } = useFetchMovies();
import { MovieDetails as MovieDetailsTypes } from '~/types/MovieDetails';

export const useMovieDetailsStore = defineStore('useMovieDetails', {
  state: () => {
    return {
      movieDetails: {} as MovieDetailsTypes,
    };
  },

  getters: {
    movie: state => state.movieDetails,
  },

  actions: {
    async getMovie(id: number) {
      const data = await fetchDetailsMovie(id);
      this.movieDetails = data;
    },
  },
});
