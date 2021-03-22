/* eslint-disable camelcase */
import React from 'react';
import {render} from '@testing-library/react';
// import {Router} from 'react-router-dom';
// import {createMemoryHistory} from 'history';
import MovieDetails from './movie-details';
import {adaptMovie} from '../../adapters/films';


const movie = {
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
};

it(`MovieDetails should render correctly`, () => {
  // const history = createMemoryHistory();
  const {getByText} = render(<MovieDetails movie={adaptMovie(movie)} />);

  const directorElement = getByText(`Director`);
  const starringElement = getByText(`Starring`);
  const runTimeElement = getByText(`Run Time`);
  const genreElement = getByText(`Genre`);
  const releasedElement = getByText(`Released`);

  expect(directorElement).toBeInTheDocument();
  expect(starringElement).toBeInTheDocument();
  expect(runTimeElement).toBeInTheDocument();
  expect(genreElement).toBeInTheDocument();
  expect(releasedElement).toBeInTheDocument();
});
