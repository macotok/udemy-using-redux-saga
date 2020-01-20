import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const UsersList = ({ users }) => (
  <ListGroup>
    {
      users.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        } else if (a.firstName < b.firstName) {
          return -1;
        } else if (a.lastName > b.lastName) {
          return 1;
        } else if (a.lastName < b.lastName) {
          return -1;
        } else {
          return 0;
        }
      }).map(user => (
        <ListGroupItem key={user.id}>
          <div style={{ display: 'flex'}}>
            <div style={{ flexGrow: 1, margin: 'auto 0'}}>
              {user.firstName} {user.lastName}
            </div>
            <div>
              <Button outline color="danger">
                Delete
              </Button>
            </div>
          </div>

        </ListGroupItem>
      ))
    }
  </ListGroup>
);

export default UsersList;
