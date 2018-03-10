import React, { Component } from 'react';
import { FieldManagementLayout } from '../components';

class FieldManagement extends Component {
  render() {
    return (
      <FieldManagementLayout title="สนาม">
      <div className="row">
      </div>
      <style jsx>
        {`
          .header {
            height: 60px;
          }
          .pick-td-btn {
            margin-left: 10px;
          }
          .stadiums-wrapper {
            height: calc(100vh - 150px);
            padding: 20px 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;
            padding-right: 5%;
            .item {
              margin-right: 15px;
              height: 100%;
            }
          }
        `}
      </style>
      </FieldManagementLayout>
    );
  }
}

export default FieldManagement;
