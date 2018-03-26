import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button, Constant } from '../..';

class UMEditModal extends Component {
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
    if (this.state.isEdit === true) {
      button1 = <Button width="100px" bstrap="btn-success" >บันทึก</Button>;
      button2 = <CancelModal width="100px" color={Constant.Red} onClick={() => this.cancelEditForm()}>ยกเลิก</CancelModal>;
    } else {
      button1 = <Button width="100px" color={Constant.Orange} >แก้ไข</Button>;
      button2 = <CancelModal width="100px" bstrap="btn-danger" >ลบ</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" defaultValue={userDetail.firstname} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>นามสกุล</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="lastname" defaultValue={userDetail.lastname} onChange={this.editForm} />
            </div>
            <div className="col-sm-1">
              <p>ชื่อเล่น</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="nickname" defaultValue={userDetail.nickname} onChange={this.editForm} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ID</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="username" defaultValue={userDetail.username} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>Password</p>
            </div>
            <div className="col-sm-3">
              <Button width="100%" color={Constant.Blue} >เปลี่ยนรหัส</Button>
            </div>
            <div className="col-sm-1" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>Email</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="email" defaultValue={userDetail.email} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="tel" defaultValue={userDetail.tel} onChange={this.editForm} />
            </div>
            <div className="col-sm-1">
              <p>Role</p>
            </div>
            <div className="col-sm-2">
              <select className="form-control" id="role" defaultValue={userDetail.role} onChange={this.editForm} >
                <option>Owner</option>
                <option>Admin</option>
                <option>Staff</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-11">
              <textarea className="form-control" id="note" rows="3" onChange={this.editForm} />
            </div>
          </div>
        </Body>
        <Footer>
          {button1}
          {button2}
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:40px;
            p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              right: 0;
              text-align: center;
            }
          }
          @media (max-width: 576px) { 
            .row{
              margin-top:0px;
              margin-bottom:0px;
              p{
                position: relative;
                text-align: left;
              }
            }
          }
        `}
        </style>
      </DefaultModal>
    );
  }
}

export default UMEditModal;
