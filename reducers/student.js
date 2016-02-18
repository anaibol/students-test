import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from '../components/constants/ActionTypes';

const studentsJson = require('../students.json')

const initialState = studentsJson;

export default function students(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
    console.log(action.student);
      return [{
        id: state.reduce((maxId, student) => Math.max(student.id, maxId), -1) + 1,
        ...action.student
      }, ...state];

    case DELETE_STUDENT:
      return state.filter(student =>
        student.id !== action.id
      );

    case EDIT_STUDENT:
      return state.map(student =>
        student.id === action.id ?
          Object.assign({}, student, { ...action.data }) :
          student
      );

    default:
      return state;
  }
}
