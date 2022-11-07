import { SELECTED_PRODUCT } from '../action/types';

const item = localStorage.getItem('selected_item') ? JSON.parse(localStorage.getItem('selected_item')) : { }
// const init = {};
const selectedProductReducer = (state = item, action) => {
  const newData = action.payload;
  switch (action.type) {
    case SELECTED_PRODUCT:
        return { ...newData }

    default:
      return state;
  }
};

export default selectedProductReducer;
