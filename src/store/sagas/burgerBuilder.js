import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from'../../axios-orders';

export function* initIngredientsSaga() {
  try {
    const response = yield axios.get('/ingredients');
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFail());
  }
}
