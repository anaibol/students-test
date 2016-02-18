import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

import { reduxForm } from 'redux-form';

export const fields = ['firstname', 'lastname', 'birthdate', 'photo'];

class StudentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.props.student || {}
    console.log(this.state.firstname);
  }

  render() {
    const {
      fields: { firstname, lastname, birthdate, photo }
    } = this.props;
    console.log(firstname);

    return (
      <form>
        <TextField type="text" required hintText="First name" {...firstname} />
        <TextField type="text" required hintText="Last name" {...lastname} />
        <TextField type="url" required hintText="Photo url" {...photo} />
        <TextField type="date" required hintText="Birth date" {...birthdate} />
      </form>
    );
  }
}

StudentForm.propTypes = {
  student: PropTypes.object
};
export default reduxForm({
  form: 'student',
  fields
},
state => ({ // mapStateToProps
  initialValues: {
    firstname: state.student[0].firstname,
    lastname: state.student[0].lastname,
    birthdate: state.student[0].birthdate,
    photo: state.student[0].photo
}})
)(StudentForm);
