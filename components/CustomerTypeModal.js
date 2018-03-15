import React from 'react';
import { CustomerTypeModalBody } from '../components';

function CustomerTypeModal(props) {
  return (
    <ModalLayout title={props.title} type={props.type} userData={props.userData} />
  );
}

function ModalLayout(props) {
  return (
    <div className="modal fade" id={props.type} tabIndex="-1" role="dialog" aria-labelledby="lenkilaModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="lenkilaModalLongTitle">{ props.title }</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <CustomerTypeModalBody type={props.type} userData={props.userData} />
        </div>
      </div>
      <style jsx>{`
        .modal-header{
          border-bottom:none;
        }
        .modal-header .close {
          margin:-1rem -1rem -1rem -1rem;
        }
        .modal-dialog{
          max-width:70%;
        } 
        .modal-title{
          margin-left:auto;
          margin-right:auto;
          font-weight:900;
          font-size: 1.5rem;
        }
        @media (max-width: 992px) { 
          .modal-dialog{
            max-width:90%;
          }
        }
        @media (max-width: 768px) { 
          .modal-dialog{
            max-width:95%;
          }
        }
        @media (max-width: 576px) { 
          .modal-dialog{
            max-width:96%;
          }
        }
      `}
      </style>
    </div>
  );
}

export default CustomerTypeModal;
