import React from 'react';
import { GiftcodeModalEdit } from '../components';

function GiftcodeModalBody(props) {
  const typeForm = props.type;
  if (typeForm === 'add-user') {
    return (
      <ModalBodyAdd />
    );
  }
  const userDetail = props.userData;
  return (
    <GiftcodeModalEdit userData={userDetail} />
  );
}

function ModalBodyAdd() {
  return (
    <form>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-2">
            <p>ชื่อ</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>วันสิ้นสุด</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>ประเภท</p>
          </div>
          <div className="col-sm-4">
            <select className="custom-select" defaultValue="0">
              <option value="0">%</option>
              <option value="1">เงิน</option>
            </select>
          </div>
          <div className="col-sm-2">
            <p>ราคา</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Mon
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Tue
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Wed
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Thu
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Fri
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Sat
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Sun
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                Hol
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                ทั้งวัน
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>เวลาเริ่ม</p>
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
        <div className="row">
          <div className="col-sm-2">
            <p>จำนวน</p>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-sm-2">
            <p>ครั้งต่อคน</p>
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

export default GiftcodeModalBody;
