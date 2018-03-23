import React from 'react';
import UserManagementModalBody from './UmModal/UserManagementModalBody';
import DefaultModal from './DefaultModal';

const UMModal = ({
  title,
  type,
  data,
}) => (
  <DefaultModal title={title} type={type} >
    <UserManagementModalBody type={type} data={data} />
  </DefaultModal>
);

export default UMModal;
