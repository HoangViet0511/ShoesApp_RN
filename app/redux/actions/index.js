import axios from 'axios';
import {FETCH_CATEGORIES, GET_PRODUCT_CATEGORY} from './type';

export const createAction = (type, payload) => ({
  type,
  payload,
});

//create async action to fetch category from backend anh save in redux store

export const actFetchCategories = () => dispatch => {
  axios({
    method: 'GET',
    url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
  })
    .then(res => {
      console.log(res.data);
      dispatch(createAction(FETCH_CATEGORIES, res.data.content));
    })
    .catch(err => {
      console.log({...err});
    });
};

export const actGetProductCategory = id => {
  axios({
    method: 'GET',
    url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${id}`,
  })
    .then(res => {
      console.log(res.data);
      dispatch(createAction(GET_PRODUCT_CATEGORY, res.data.content));
    })
    .catch(err => {
      console.log({...err});
    });
};
