import React from 'react';

function UserManagementModal(props) {
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
          <form>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-3">
                  <p>เลือกสนาม</p>
                </div>
                <div className="col-sm-9">
                  <select className="form-control" id="role">
                    <option>F1</option>
                    <option>F2</option>
                    <option>F3</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <p className="warning">*คำเตือน ไม่สามารถ Import สนามที่แบ่งสนามคนละประเภท ไม่ได้</p>
              </div>
            </div>
            <div className="modal-footer">
              <AddButton />
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .warning{
          margin-top:20px;
          text-align:center;
          color: #47494E;
          font-size:0.8rem;
        }
        .modal-header{
          border-bottom:none;
        }
        .modal-header .close {
          margin:-1rem -1rem -1rem -1rem;
        }
        .modal-dialog{
          max-width:36%;
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
        .modal-body{
          padding-left:60px;
          padding-right:60px;
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
      `}
      </style>
    </div>
  );
}

function AddButton() {
  return (
    <button type="button" className="btn btn-success">ยืนยัน
      <style jsx>{`
        button{
          width:100px;
        }
      `}
      </style>
    </button>
  );
}

export default UserManagementModal;
