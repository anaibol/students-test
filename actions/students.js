import * as types from '../components/constants/ActionTypes';

export function addStudent(student) {
  return { type: types.ADD_STUDENT, student };
}

export function deleteStudent(id) {
  return { type: types.DELETE_STUDENT, id };
}

export function editStudent(id, student) {
  return { type: types.EDIT_STUDENT, id, student };
}
