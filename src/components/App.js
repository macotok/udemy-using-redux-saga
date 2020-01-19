import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';

const App = (props) => {
  useEffect(() => {
    props.getUsersRequest();
  }, []);

  return (
    <div >
      test
    < /div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
}

export default connect(null, {
  getUsersRequest,
})(App);
