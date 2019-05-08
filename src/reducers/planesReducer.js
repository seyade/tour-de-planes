import { FETCH_ALL_PLANES } from '../actions';

export default (state = [], action) => {
  console.log('PLANEREDUCER:STATE!!!!', state);
  console.log('PLANEREDUCER:ACTION!!!!', action);

  switch (action.type) {
    case FETCH_ALL_PLANES:
      console.log('REDUCER::PLANES:: ', action.payload);
      return action.payload;

    default:
      return state;
  }
};
