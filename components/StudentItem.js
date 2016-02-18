import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import StudentForm from './StudentForm';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

class StudentItem extends Component {
  render() {
    const { student, editStudent } = this.props;

    return (
      <GridTile
        key={student.photo}
        title={student.lastname}
        subtitle={student.firstname}
        onClick={() => {
          editStudent(student)
        }}
      >
        <img src={student.photo} />
      </GridTile>
    );
  }
}

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
  editStudent: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired
};

export default StudentItem;
