import {
  loadFavoriteFilms,
  changeGenre,
  getFilteredMovies,
  getShownMovies,
  loadMovies,
  requiredAuthorization,
  getUserInfo,
  loadComments,
  loadPromoMovie,
  ActionType
} from './action';

const mockFilms = [
  {
    name: `Macbeth`,
    backgroundColor: `#F1E9CE`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    isavorite: false,
    posterImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    backgroundColor: `#F1E9CE`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    isavorite: false,
    posterImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    name: `Macbeth`,
    backgroundColor: `#F1E9CE`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Comedy`,
    id: 1,
    isavorite: false,
    posterImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scores: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  }
];

const mockGenre = `Drama`;

const mockUser = {
  email: `Oliver.conner@gmail.com`,
  password: `12345678`,
};

const mockComments = [
  {
    rating: 8,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
  },
  {
    rating: 9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
  },
];

const mockMovie = {
  name: `Macbeth`,
  backgroundColor: `#F1E9CE`,
  backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  director: `Justin Kurzel`,
  genre: `Drama`,
  isavorite: false,
  posterImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  previewImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.3,
  released: 2015,
  runTime: 113,
  scores: 48798,
  starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};

describe(`Actions work correctly`, () => {
  it(`Action for loading favorite films returns correct array`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: mockFilms,
    };

    expect(loadFavoriteFilms(mockFilms)).toEqual(expectedAction);
  });

  it(`Action for genre change returns correct genre`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: mockGenre,
    };

    expect(changeGenre(`Drama`)).toEqual(expectedAction);
  });

  it(`Action for getting filtered movies returns correct movies`, () => {
    const expectedAction = {
      type: ActionType.GET_FILTERED_MOVIES,
      payload: `Drama`,
    };

    expect(getFilteredMovies(mockGenre)).toEqual(expectedAction);
  });

  it(`Action for getting shown movies returns correct movies`, () => {
    const expectedAction = {
      type: ActionType.GET_SHOWN_MOVIES,
    };

    expect(getShownMovies()).toEqual(expectedAction);
  });

  it(`Action for getting movies returns correct movies`, () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIES,
      payload: mockFilms,
    };

    expect(loadMovies(mockFilms)).toEqual(expectedAction);
  });

  it(`Action for required authorization returns correct status`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    };

    expect(requiredAuthorization(`AUTH`)).toEqual(expectedAction);
  });

  it(`Action for getting user info returns correct information`, () => {
    const expectedAction = {
      type: ActionType.GET_USER_INFO,
      payload: mockUser,
    };

    expect(getUserInfo(mockUser)).toEqual(expectedAction);
  });

  it(`Action for loading comments returns correct comments`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: mockComments,
    };

    expect(loadComments(mockComments)).toEqual(expectedAction);
  });

  it(`Action for loading propmo movie returns correct movie`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: mockMovie,
    };

    expect(loadPromoMovie(mockMovie)).toEqual(expectedAction);
  });
});
