export function ReturnSelectedMovie(id = null, movies = []) {
  if (id && movies.length > 0) {
    return movies.filter((movie) => movie.id === id);
  }
}
