import React from 'react';
import { CustomerModalEdit } from '../components';

function CustomerModalBody(props) {
  const typeForm = props.type;
  if (typeForm === 'add-user') {
    return (
      <ModalBodyAdd />
    );
  }
  const userDetail = props.userData;
  return (
    <CustomerModalEdit userData={userDetail} />
  );
}

function ModalBodyAdd() {
  return (
    <form>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-1">
            <p>ชื่อเล่น*</p>
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>เบอร์โทรศัพท์</p>
          </div>
          <div className="col-sm-3">
            <input type="text" className="form-control" id="lastname" />
          </div>
          <div className="col-sm-2">
            <p>วันเกิด</p>
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" id="nickname" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1">
            <p>ชื่อจริง</p>
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" id="user-id" />
          </div>
          <div className="col-sm-2">
            <p>นามสกุล</p>
          </div>
          <div className="col-sm-3">
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="col-sm-2">
            <p>เพศ</p>
          </div>
          <div className="col-sm-2">
            <select className="custom-select" defaultValue="0">
              <option value="0">ชาย</option>
              <option value="1">หญิง</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1">
            <p>โน้ต</p>
          </div>
          <div className="col-sm-11">
            <textarea className="form-control" id="note" rows="3" />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <AddButton />
        <CancelButton />
      </div>
      <style jsx>{`
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
    </form>
  );
}

function AddButton() {
  return (
    <button type="button" className="btn btn-success">สร้าง
      <style jsx>{`
        button{
          width:100px;
        }
      `}
      </style>
    </button>
  );
}

function CancelButton() {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal">ยกเลิก
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

export default CustomerModalBody;
