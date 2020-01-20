import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest } from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';

const App = ({ getUsersRequest, users, createUserRequest }) => {
  useEffect(() => {
    getUsersRequest();
  },[getUsersRequest]);

  const styles = {
    margin: '0 auto',
    padding: 20,
    maxWidth: 600,
  };

  const handleSubmit = ({ firstName, lastName }) => {
    createUserRequest({
      firstName,
      lastName,
    })
  };

  return (
    <div style={styles}>
      <NewUserForm onSubmit={handleSubmit}/>
      <UsersList users={users.items} />
    </div>
  );
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps, {
  getUsersRequest,
  createUserRequest,
})(App);
