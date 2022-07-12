export default function useFetchMovies() {
  const fetchAllPopularMovies = async (id: number) => {
    try {
      const response = await Api.getAllPopularMovies(id);
      return response;
    } catch (error) {
      return error;
    }
  };
  const fetchDetailsMovie = async (id: number) => {
    try {
      const response = await Api.getMovieDetails(id);
      return response;
    } catch (error) {
      return error;
    }
  };

  return { fetchAllPopularMovies, fetchDetailsMovie };
}
