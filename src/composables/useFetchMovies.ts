export default function useFetchMovies() {
  const fetchAllPopularMovies = async () => {
    try {
      const response = await Api.getAllPopularMovies();
      return response;
    } catch (error) {
      return error;
    }
  };

  return { fetchAllPopularMovies };
}
