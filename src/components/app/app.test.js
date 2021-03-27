import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import App from './app';
import {movies, movie, genres} from '../../test-mocks';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {movies: [], promoMovie: movie, filteredMovies: [], genres, isVisibleShowMore: true},
      USER: {authorizationStatus: AuthorizationStatus.AUTH, userInfo: {}},
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/What to watch Ltd/i)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);
    const store = mockStore({
      DATA: {movies: [], promoMovie: {}, filteredMovies: [], genres: []},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH, userInfo: {}},
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      DATA: {favoriteFilms: movies},
    });

    const history = createMemoryHistory();
    history.push(`/mylist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const store = mockStore({
      ACTIVE_MOVIE: {movie},
      USER: {userInfo: {}, authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/films/2/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByDisplayValue(8)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
  });

  it(`Render 'MoviePage' when user navigate to '/films/:id' url`, () => {
    const store = mockStore({
      ACTIVE_MOVIE: {movie},
      USER: {authorizationStatus: AuthorizationStatus.AUTH, userInfo: {}},
      DATA: {movies},
    });

    const history = createMemoryHistory();
    history.push(`/films/2`);
    store.dispatch = () => {};
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'Player' when user navigate to '/player/:id' url`, () => {
    const store = mockStore({
      ACTIVE_MOVIE: {movie},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    const history = createMemoryHistory();
    history.push(`/player/2`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render 'NotFound' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Return to the main page`)).toBeInTheDocument();
  });
});


