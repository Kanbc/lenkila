import React from 'react';

function CustomerMemberModal(props) {
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
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-2">
                <p className="bold-text">Default:</p>
              </div>
              <div className="col-sm-4">
                <p>ทั่วไป</p>
              </div>
              <div className="col-sm-2">
                <p className="bold-text">ปัจจุบัน:</p>
              </div>
              <div className="col-sm-4">
                <p>Silver</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <p className="bold-text">จำนวนชั่วโมง:</p>
              </div>
              <div className="col-sm-4">
                <p>6</p>
              </div>
              <div className="col-sm-2">
                <p className="bold-text">หมดอายุ:</p>
              </div>
              <div className="col-sm-4">
                <p>10/04/61</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <p className="bold-text">Next :</p>
              </div>
              <div className="col-sm-4">
                <p>-</p>
              </div>
              <div className="col-sm-2" />
              <div className="col-sm-4" />
            </div>
          </div>
          <div className="modal-footer">
            <CancelButton />
          </div>
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
        .modal-body{
          padding-left:60px;
          padding-right:60px;
        }
        .bold-text{
          font-weight:bold;
        }
        .modal-body p{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          text-align: center;
        }
        .modal-body .row{
          margin-top:10px;
          margin-bottom:40px;
        }
        .modal-footer{
          justify-content: center;
          padding-top:0px;
          padding-bottom:40px;
          border-top:none;
        }
        .modal-footer>:not(:last-child){
          margin-right: 2rem;
        }
        .modal-footer>:not(:first-child){
          margin-left: 2rem;
        }
        @media (max-width: 576px) { 
          .modal-body p{
            position: relative;
            text-align: left;
          }
          .modal-body .row{
            margin-top:0px;
            margin-bottom:0px;
          }
          .modal-body{
            padding-bottom:30px;
            padding-top:0px;
          }
          .form-control{

          }
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

function CancelButton() {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal">ปิด
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

export default CustomerMemberModal;
