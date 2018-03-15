import React from 'react';
import { CustomerTypeModalEdit, CustomerTypeModalAdd } from '../components';

function CustomerTypeModalBody(props) {
  const typeForm = props.type;
  if (typeForm === 'add-user') {
    return (
      <CustomerTypeModalAdd />
    );
  }
  const userDetail = props.userData;
  return (
    <CustomerTypeModalEdit userData={userDetail} />
  );
}

export default CustomerTypeModalBody;
