import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';
import UsersList from './UsersList';

const App = (props) => {
  useEffect(() => {
    props.getUsersRequest();
  });

  const users = props.users;
  const styles = {
    margin: '0 auto',
    padding: 20,
    maxWidth: 600,
  };
  return (
    <div style={styles}>
      <UsersList users={users.items} />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps, {
  getUsersRequest,
})(App);
