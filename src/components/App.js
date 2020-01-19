import React from 'react';
import { connect } from 'react-redux';

const App = () => (
  <div>
    test
  </div>
);

const mapStateToProps = (state) => {
  console.log(state)
}

export default connect(mapStateToProps)(App);
