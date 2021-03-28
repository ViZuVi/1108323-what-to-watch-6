import {createAPI} from '../../services/api';
import {activeMovie} from './active-movie';
import {fetchComments, postComment} from '../api-actions';
import {ActionType} from '../action';
import MockAdapter from 'axios-mock-adapter';

const mockComments = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const api = createAPI(() => {});

describe(`Reducer 'active-movie' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(activeMovie(void 0, {}))
      .toEqual({
        movie: {},
        movieStatus: `PENDING`,
        comments: [],
        commentStatus: `PENDING`,
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /comments/:film_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, mockComments);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: mockComments,
        });
      });
  });

  it(`Should make a correct API call to comments/:film_id with sendComment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = [{
      "movieId": 1,
      "rating": 8,
      "comment": ``
    }];
    const commentsLoader = postComment(1, 8, ``);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, fakeComment);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

});
