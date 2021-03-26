import React from 'react';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import GenresList from './genres-list';

const onGenreClick = jest.fn();
const mockStore = configureStore({});
const store = mockStore({
  DATA: {
    genres: [`All genres`, `Drama`, `Comedy`, `Thriller`],
    activeGenre: `Drama`,
  },
});

it(`GenresList should render correctly`, () => {
  const {container} = render(
      <Provider store={store}>
        <GenresList
          onGenreClick={onGenreClick}
        />
      </Provider>
  );
  expect(container).toMatchSnapshot();
});
