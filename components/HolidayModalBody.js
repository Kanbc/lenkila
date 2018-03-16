import React from 'react';
import { FieldModalEdit } from '../components';

function FieldModalBody(props) {
  const typeForm = props.type;
  if (typeForm === 'add-user') {
    return (
      <ModalBodyAdd />
    );
  }
  const userDetail = props.userData;
  return (
    <FieldModalEdit userData={userDetail} />
  );
}

function ModalBodyAdd() {
  return (
    <form>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-2">
            <p>ชื่อสนาม</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>ประเภท</p>
          </div>
          <div className="col-sm-4">
            <select className="custom-select" defaultValue="0">
              <option value="0">ฟุตบอล</option>
              <option value="1">แบตมินตัน</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>แบ่งครึ่งสนาม</p>
          </div>
          <div className="col-sm-4">
            <select className="custom-select" defaultValue="0">
              <option value="0">ได้</option>
              <option value="1">ไม่ได้</option>
            </select>
          </div>
          <div className="col-sm-6" />
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>รายละเอียด</p>
          </div>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="email" />
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

export default FieldModalBody;
