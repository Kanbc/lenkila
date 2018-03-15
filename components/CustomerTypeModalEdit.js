import React, { Component } from 'react';
import { ColorButton } from '../components';

class CustomerTypeModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false, isDisableTime: true };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
    this.cancelDisableTime = this.cancelDisableTime.bind(this);
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

  cancelDisableTime(event) {
    if (event.target.value === '0') {
      this.setState({
        isDisableTime: true,
      });
    } else {
      this.setState({
        isDisableTime: false,
      });
    }
  }

  render() {
    const userDetail = this.props.userData;
    let button1 = null;
    let button2 = null;
    if (this.state.isEdit === true) {
      button1 = <SaveButton />;
      button2 = <CancelButton onClick={() => this.cancelEditForm()} />;
    } else {
      button1 = <EditButton />;
      button2 = <DeleteButton />;
    }
    return (
      <form>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" defaultValue={userDetail.firstname} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" defaultValue="0" value={this.state.inputValue} onChange={(e) => { this.cancelDisableTime(e); }}>
                <option value="0">ถาวร</option>
                <option value="1">ชั่วโมง</option>
                <option value="2">รายเดือน</option>
                <option value="3">รายปี</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p>วันหมดอายุ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="nickname" defaultValue={userDetail.nickname} onChange={this.editForm} disabled={this.state.isDisableTime} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวนชั่วโมง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" defaultValue={userDetail.username} onChange={this.editForm} disabled={this.state.isDisableTime} />
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" defaultValue={userDetail.username} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>สี</p>
            </div>
            <div className="col-sm-2">
              <ColorButton />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" onChange={this.editForm} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {button1}
          {button2}
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
    <button type="button" className="btn btn-success">แก้ไข
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

export default CustomerTypeModalEdit;
