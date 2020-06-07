import axios from 'axios';
import {FETCH_CATEGORIES} from './type';

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
