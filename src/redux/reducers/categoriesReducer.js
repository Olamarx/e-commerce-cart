import { FETCH_CATEGORIES } from '../action/types';

const init = [];
const categoriesReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;

    default:
      return state;
  }
};

export default categoriesReducer;
