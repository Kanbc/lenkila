import React from 'react';
import { HolidayModalEdit } from '../components';

function HolidayModalBody(props) {
  const typeForm = props.type;
  if (typeForm === 'add-user') {
    return (
      <ModalBodyAdd />
    );
  }
  const userDetail = props.userData;
  return (
    <HolidayModalEdit userData={userDetail} />
  );
}

function ModalBodyAdd() {
  return (
    <form>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-2">
            <p>ชื่อวันหยุด</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>เปิดทำการ</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>วันที่เริ่ม</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>เวลาเริ่ม</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>วันสิ้นสุด</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>เวลาสิ้นสุด</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <AddButton />
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

export default HolidayModalBody;