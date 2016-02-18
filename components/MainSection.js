import React, { Component, PropTypes } from 'react';
import mui, { AppBar, Styles, List } from 'material-ui';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import MyRawTheme from '../src/material_ui_raw_theme_file';
import GridList from 'material-ui/lib/grid-list/grid-list';

import StudentForm from './StudentForm';
import StudentItem from './StudentItem';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24
  }
};

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      editing: {}
    };
  };

  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }

  getChildContext() {
    return {  muiTheme: Styles.ThemeManager.getMuiTheme(MyRawTheme)};
  }

  toggleDialog = () => {
    this.setState({open: !this.state.open});
  }

  editStudent = (student) => {
    this.setState({
      open: true,
      editing: student
    });
  }

  handleSubmit = () => {
    this.refs.studentForm.submit();  // will return a promise
    this.setState({open: false});
  }

  render() {
    const { students, actions } = this.props;
    const onSubmit = actions.addStudent;

    const dialogActions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.toggleDialog}
      />,
      <FlatButton
        label="Submit"
        secondary={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <section className="main">
        <AppBar title="Students class management" />
        <h1>Students</h1>
          <FlatButton label="Add student" onClick={this.toggleDialog} />
          <Dialog
            title="Dialog With Actions"
            actions={dialogActions}
            modal={true}
            open={this.state.open}
          >
            <StudentForm ref="studentForm"
              onSubmit={onSubmit}
              student={this.state.editing || {}}
               />
          </Dialog>
          <div style={styles.root}>
             <GridList
               cellHeight={200}
               style={styles.gridList}
             >
             {students.map(student =>
               <StudentItem key={student.id} student={student} {...actions} editStudent={this.editStudent}/>
             )}
             </GridList>
           </div>
      </section>
    );
  }
}

MainSection.propTypes = {
  students: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
