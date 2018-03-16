import React, { Component } from 'react';

class FieldModalEdit extends Component {
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
            <div className="col-sm-2">
              <p>ชื่อสนาม</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" defaultValue={userDetail.firstname} />
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
              <input type="text" className="form-control" id="email" defaultValue={userDetail.email} />
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
    <button type="button" className="btn btn-danger" data-dismiss="modal">ลบสนาม
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

export default FieldModalEdit;
