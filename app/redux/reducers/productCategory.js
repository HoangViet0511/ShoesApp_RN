import {GET_PRODUCT_CATEGORY} from '../actions/type';

let initialState = {
  productList: [],
  //selectedCategory: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCT_CATEGORY:
      state.productList = payload;
      return {...state};
    default:
      return state;
  }
};
