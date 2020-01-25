import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';

const App = ({ getUsersRequest, users, createUserRequest, deleteUserRequest, usersError }) => {
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

  const handleDeleteUserClick = (userId) => {
    deleteUserRequest(userId);
  };

  const handleCloseAlert = () => {
    usersError({
      error: '',
    });
  };

  return (
    <div style={styles}>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit}/>
      <UsersList
        users={users.items}
        onDeleteUser={handleDeleteUserClick}
      />
    </div>
  );
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps, {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
})(App);
