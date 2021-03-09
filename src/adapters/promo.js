export const adaptPromo = (movie) => {
  return {
    title: movie.name,
    previewImg: movie.preview_image,
    posterImg: movie.poster_image,
    backgroundImg: movie.background_image,
    backgroundColor: movie.background_color,
    videoLink: movie.video_link,
    previewVideo: movie.preview_video_link,
    description: movie.description,
    rating: movie.rating,
    scores: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    genre: movie.genre,
    released: movie.released,
    isFavorite: movie.is_favorite,
  };
};
