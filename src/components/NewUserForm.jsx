import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = ({ onSubmit }) => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleFirstNameChange = (e) => {
    e.preventDefault();
    setName({
      ...name,
      firstName: e.target.value,
    })
  };

  const handleLastNameChange = (e) => {
    e.preventDefault();
    setName({
      ...name,
      lastName: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      firstName: name.firstName,
      lastName: name.lastName,
    });
    setName({
      firstName: '',
      lastName: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          First Name
        </Label>
        <Input required placeholder="First Name" onChange={handleFirstNameChange} value={name.firstName} />
      </FormGroup>
      <FormGroup>
        <Label>
          Last Name
        </Label>
        <Input required placeholder="Last Name" onChange={handleLastNameChange} value={name.lastName} />
      </FormGroup>
      <FormGroup>
        <Button block outline color="primary" type="submit">
          Create
        </Button>
      </FormGroup>
    </Form>
  )
};

export default NewUserForm;
