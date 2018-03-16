import React, { Component } from 'react';

class CustomerModalEdit extends Component {
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
      button1 = <GreenButton title="บันทึก" />;
      button2 = <RedButton title="ยกเลิก" onClick={() => this.cancelEditForm()} />;
      button3 = null;
    } else {
      button1 = <OrageButton title="ประวัติ" />;
      button2 = <BlueButton title="แก้ไข" onClick={() => this.editForm()} />;
      button3 = <DeleteButton />;
    }
    return (
      <form>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อเล่น*</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''} >{userDetail.firstname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="firstname" defaultValue={userDetail.firstname} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เบอร์โทรศัพท์*</p>
            </div>
            <div className="col-sm-2">
              <p>{userDetail.lastname}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">วันเกิด</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{userDetail.nickname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={userDetail.nickname} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อจริง</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{userDetail.username}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={userDetail.username} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">นามสกุล</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>xxxx</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue="xxxx" />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เพศ</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>ชาย</p>
              <select className={this.state.isEdit ? 'custom-select' : 'custom-select d-none'} defaultValue="0">
                <option value="0">ชาย</option>
                <option value="1">หญิง</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่:</p>
            </div>
            <div className="col-sm-2">
              <p>{userDetail.username}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">ความสัมพันธ์:</p>
            </div>
            <div className="col-sm-2">
              <p>ขาประจำ</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">Free Credits:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>50</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue="50" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ประเภท:</p>
            </div>
            <div className="col-sm-2">
              <p>{userDetail.username}</p>
            </div>
            <div className="col-sm-2">
              <OrageButton title="Member" />
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10" />
            <div className="col-sm-2">
              <label className={this.state.isEdit ? 'form-check-label red-label' : 'form-check-label red-label d-none'} htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="0" />
                Blacklist
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {button1}
          {button2}
          {button3}
        </div>
        <style jsx>{`
          .modal-body{
            padding-left:60px;
            padding-right:60px;
          }
          .modal-body p{
            text-align: center;
          }
          .modal-body .row{
            margin-top:10px;
            margin-bottom:30px;
          }
          .modal-footer{
            justify-content: center;
            padding-top:0px;
            padding-bottom:40px;
            border-top:none;
          }
          .red-label{
            color:#c82333;
          }
          .modal-footer>:not(:last-child){
            margin-right: 2rem;
          }
          .bold-text{
            font-weight:bold;
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

function BlueButton(props) {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.title}
      <style jsx>{`
        button{
          width:100px;
          background-color: #4A90E2;
          cursor:pointer;
        }
      `}
      </style>
    </button>
  );
}

function GreenButton(props) {
  return (
    <button type="button" className="btn btn-success">{props.title}
      <style jsx>{`
        button{
          width:100px;
        }
      `}
      </style>
    </button>
  );
}

function OrageButton(props) {
  return (
    <button type="button" className="btn btn-success">{props.title}
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

function RedButton(props) {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.onClick} >{props.title}
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

export default CustomerModalEdit;
