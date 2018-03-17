import React, { Component } from 'react';
import { ColorButton } from '../components';

class PriceModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
  }

  editForm() {
    this.setState({
      isEdit: true,
    });
  }

  cancelEditForm() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    const userDetail = this.props.userData;
    let button1 = null;
    let button2 = null;
    let button3 = null;
    if (this.state.isEdit === true) {
      button1 = <SaveButton />;
      button2 = <CancelButton onClick={() => this.cancelEditForm()} />;
    } else {
      button1 = <SaveButton />;
      button2 = <EditButton />;
      button3 = <DeleteButton />;
    }
    return (
      <form>
        <div className="modal-body">
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
            <div className="col-sm-1">
              <p>เวลาที่เริ่ม</p>
            </div>
            <div className="col-sm-1">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>เวลาสิ้นสุด</p>
            </div>
            <div className="col-sm-1">
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="col-sm-1">
              <p>สี</p>
            </div>
            <div className="col-sm-1">
              <ColorButton />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ทั่วไป</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="user-id" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>นักเรียน</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="password" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>นักศึกษา</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="user-id" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>สูงวัย</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="password" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>VIP</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="user-id" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>Silver</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="password" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>Gold</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="user-id" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>1</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="password" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>2</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="user-id" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-1">
              <p>3</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <input type="text" className="form-control" id="password" />
              <button type="button" className="btn btn-secondary">แบ่งครึ่ง</button>
            </div>
            <div className="col-sm-6" />
          </div>
        </div>
        <div className="modal-footer">
          {button1}
          {button2}
          {button3}
        </div>
        <style jsx>{`
          .field-and-button input{
            width:48%;
            display:inline-block;
          }
          .field-and-button input{
            width:48%;
            display:inline-block;
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
      </form>
    );
  }
}

function SaveButton() {
  return (
    <button type="button" className="btn btn-success">บันทึก
      <style jsx>{`
        button{
          width:100px;
        }
      `}
      </style>
    </button>
  );
}

function EditButton() {
  return (
    <button type="button" className="btn btn-success">ยกเลิก
      <style jsx>{`
          .btn-success{
            background-color: #FD9226;
            border-color:#f77e06;
          }
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

function CancelButton(props) {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.onClick} >ยกเลิก
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

function DeleteButton() {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal">ลบ
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

export default PriceModalEdit;
