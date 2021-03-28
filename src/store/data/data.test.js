/* eslint-disable camelcase */
import {data, getGenresSet} from './data';
import {createAPI} from '../../services/api';
import {fetchMovies, fetchPromoMovie, addToFavorite, fetchFavoriteMovies} from '../api-actions';
import {AppRoute} from '../../const';
import {ActionType} from '../action';
import MockAdapter from 'axios-mock-adapter';
import {adaptMovies, adaptMovie} from '../../adapters/films';

const api = createAPI(() => {});

const mockFilms = [
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Comedy`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
];

const mockFavoriteFilms = [
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: true,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    is_favorite: true,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
];

const mockPromoMovie = {
  name: `Macbeth`,
  background_color: `#F1E9CE`,
  background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  director: `Justin Kurzel`,
  genre: `Drama`,
  is_favorite: true,
  poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.3,
  released: 2015,
  runTime: 113,
  scores: 48798,
  starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
  video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};

const filteredFilms = [
  {
    name: `Macbeth`,
    background_color: `#F1E9CE`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Comedy`,
    id: 1,
    is_favorite: false,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
];

describe(`Reducer for sync actions works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {}))
      .toEqual({
        activeGenre: `All genres`,
        initMovies: [],
        movies: [],
        filteredMovies: [],
        genres: [],
        shownMoviesCount: 8,
        isVisibleShowMore: false,
        isDataLoaded: false,
        promoMovie: null,
        favoriteFilms: [],
      });
  });

  it(`Reducer should change genre to a given value`, () => {
    const state = {
      activeGenre: `All genres`,
    };
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`
    };

    expect(data(state, changeGenreAction))
      .toEqual({
        activeGenre: `Drama`,
      });
  });

  it(`Reducer should change movies after Show more button was pressed`, () => {
    const state = {
      movies: mockFilms,
      filteredMovies: mockFilms.slice(0, 8),
      isVisibleShowMore: true,
    };
    const getShownMoviesAction = {
      type: ActionType.GET_SHOWN_MOVIES,
    };

    expect(data(state, getShownMoviesAction))
          .toEqual({
            movies: mockFilms,
            filteredMovies: mockFilms,
            isVisibleShowMore: false,
          });
  });

  it(`Reducer should filter movies after filter changed`, () => {
    const state = {
      initMovies: mockFilms,
      movies: mockFilms,
      filteredMovies: mockFilms.slice(0, 8),
      isVisibleShowMore: true,
    };
    const getFilteredMoviesAction = {
      type: ActionType.GET_FILTERED_MOVIES,
      payload: `Comedy`
    };

    expect(data(state, getFilteredMoviesAction))
          .toEqual({
            initMovies: mockFilms,
            movies: filteredFilms,
            filteredMovies: filteredFilms.slice(0, 8),
            isVisibleShowMore: false,
          });
  });
});

describe(`Reducer for async actions works correctly`, () => {
  it(`Reducer should update films by load films`, () => {
    const state = {
      initMovies: [],
      movies: [],
      filteredMovies: [],
      genres: [],
      isVisibleShowMore: false,
      isDataLoaded: false,
    };
    const loadFilmsAction = {
      type: ActionType.LOAD_MOVIES,
      payload: mockFilms
    };
    const adaptedMovies = adaptMovies(mockFilms);
    expect(data(state, loadFilmsAction))
      .toEqual({
        initMovies: adaptedMovies,
        movies: adaptedMovies,
        filteredMovies: adaptedMovies.slice(0, 8),
        genres: getGenresSet(adaptedMovies),
        isVisibleShowMore: adaptedMovies.length > 8 && true,
        isDataLoaded: true,
      });
  });

  it(`Reducer should update favorite films by load favorite films`, () => {
    const state = {
      favoriteFilms: [],
    };
    const loadFavoriteFilmsAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: mockFavoriteFilms
    };
    expect(data(state, loadFavoriteFilmsAction))
      .toEqual({
        favoriteFilms: adaptMovies(mockFavoriteFilms),
      });
  });

  it(`Reducer should update promo movie by load promo movie`, () => {
    const state = {
      promoMovie: {},
    };
    const loadPromoMovieAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: mockPromoMovie
    };
    expect(data(state, loadPromoMovieAction))
      .toEqual({
        promoMovie: adaptMovie(mockPromoMovie),
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchMovies();

    apiMock
      .onGet(AppRoute.MOVIES)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = fetchPromoMovie();

    apiMock
      .onGet(AppRoute.PROMO_MOVIE)
      .reply(200, [{fake: true}]);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = addToFavorite(1, 1);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, [{fake: true}]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavoriteMovies();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});

