import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as StudentActions from '../actions/students';

class App extends Component {
  render() {
    const { students, actions } = this.props;
    return (
      <div>
        <MainSection students={students} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  students: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    students: state.student
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(StudentActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
