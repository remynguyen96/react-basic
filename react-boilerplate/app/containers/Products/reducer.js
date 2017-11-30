/*
 *
 * Products reducer
 *
 */

import { fromJS } from 'immutable';
import * as typeActions from './constants';
import {GET_PRODUCTS} from "./constants";
import {ADD_PRODUCTS} from "./constants";

const initialState = fromJS({
  listProducts: [
    {
      id: '',
      name: '',
      price: '',
      images: '',
      description: '',
      createdAt: '',
      updatedAt: '',
    },
  ],
  error: '',
  loading: false,
});

function productsReducer(state = initialState, action) {
  const products = state.get('listProducts');
  switch (action.type) {
    case typeActions.GET_PRODUCTS:
      return state.set('listProducts', action.products);
    case typeActions.ADD_PRODUCTS:
      // console.log(state.set('listProducts', products.concat(action.product)).toJS());
      return state.set('listProducts', [action.product].concat(products));
    case typeActions.EDIT_PRODUCTS:
      return state;
    case typeActions.DELETE_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default productsReducer;