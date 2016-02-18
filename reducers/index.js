import { combineReducers } from 'redux';
import student from './student';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  student,
  form: formReducer
});

export default rootReducer;
