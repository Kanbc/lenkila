import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button, Constant } from '../..';
import { editUsersData,deleteUsersData,resetpasswordUsersData } from '../../../store';
import {compose,withState,lifecycle} from 'recompose'

class UMEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.userData.user_id,
      firstname: this.props.userData.name,
      lastname: this.props.userData.surname,
      nickname: this.props.userData.nickname,
      username: this.props.userData.username,
      password: this.props.userData.password,
      email: this.props.userData.email,
      tel: this.props.userData.tel,
      role: this.props.userData.role,
      note: this.props.userData.address, 
      isEdit: false, 
      changePass: false 
    };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.cancelChangePassword = this.cancelChangePassword.bind(this);
  }
  changePassword() {
    this.setState({ changePass: true });
  }

  cancelChangePassword() {
    this.setState({ changePass: false });
  }

  editForm() {
    this.setState({isEdit: true});
  }

  cancelEditForm() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    let button1 = null;
    let button2 = null;
    if (this.state.isEdit === true) {
      button1 = <CancelModal width="100px" bstrap="btn-success" onClick={() => {
        // validation
        // add user api
        this.props.editUsersData({
          id: this.state.id,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          nickname: this.state.nickname,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          tel: this.state.tel,
          role: this.state.role,
          note: this.state.note
        });

        this.cancelEditForm();
      }}>บันทึก</CancelModal>;
      button2 = <CancelModal width="100px" color={Constant.Red} onClick={() => this.cancelEditForm()}>ยกเลิก</CancelModal>;
    } else {
      
      button1 = <Button width="100px" color={Constant.Orange} onClick={this.editForm}>แก้ไข</Button>;
      button2 = <CancelModal width="100px" bstrap="btn-danger" disabled={this.props.userData.user_id === this.props.user[0].user_id} onClick={() =>{
        let result = confirm("คุณต้องการลบข้อมูลส่วนนี้ใช่หรือไม่");
        if (result) {
          this.props.deleteUsersData(this.props.userData.user_id)
        }
      }
        }>
          ลบ</CancelModal>;
      
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">ชื่อ</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''} >{this.props.userData.name}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'}  id="firstname" defaultValue={this.props.userData.name} onChange={e => this.setState({ firstname: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">นามสกุล</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.surname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="lastname" defaultValue={this.props.userData.surname} onChange={e => this.setState({ lastname: e.target.value })} />
            </div>
            <div className="col-sm-1">
              <p className="bold-text">ชื่อเล่น</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.nickname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={this.props.userData.nickname} onChange={e => this.setState({ nickname: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">ID</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.username}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="username" defaultValue={this.props.userData.username} onChange={e => this.setState({ username: e.target.value })} />
            </div>
            {
  
              this.props.roleUser === "Mod" || this.props.roleUser === "Dev"? 
              <React.Fragment>
              <div className="col-sm-2">
                <p className="bold-text">Password</p>
              </div>
              <div className={this.state.changePass ? 'col-sm-2' : 'col-sm-3'}>
                <input type="text" className={this.state.changePass ? 'form-control' : 'form-control d-none'} id="password" onChange={e => this.setState({ password: e.target.value })} />
                <Button width="100%" color={Constant.Blue} onClick={this.changePassword} bstrap={this.state.changePass ? 'd-none' : ''}>เปลี่ยนรหัส</Button>
              </div>
              </React.Fragment>
              :
              this.props.roleUser === "Manager" && this.props.userData.role === "Mod" || this.props.userData.role === "Dev" || this.props.userData.role === "Manager" ? null
              :
              <React.Fragment>
              <div className="col-sm-2">
                <p className="bold-text">Password</p>
              </div>
              <div className={this.state.changePass ? 'col-sm-2' : 'col-sm-3'}>
                <input type="text" className={this.state.changePass ? 'form-control' : 'form-control d-none'} id="password" onChange={e => this.setState({ password: e.target.value })} />
                <Button width="100%" color={Constant.Blue} onClick={this.changePassword} bstrap={this.state.changePass ? 'd-none' : ''}>เปลี่ยนรหัส</Button>
              </div>
           </React.Fragment>
            }

            
            <div className="col-sm-2">
              <CancelModal width="100%" color={Constant.Green} onClick={()=>
              {
                this.props.resetpasswordUsersData({id:this.state.id,password: this.state.password})
                this.setState({ changePass: false })
              }
              }
                 bstrap={this.state.changePass ? '' : 'd-none'} >บันทึก</CancelModal>
            </div>
            <div className={this.state.changePass ? 'col-sm-2' : 'col-sm-1'}>
              <Button width="100%" color={Constant.Red} onClick={this.cancelChangePassword} bstrap={this.state.changePass ? '' : 'd-none'} >ยกเลิก</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">Email</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.email}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="email" defaultValue={this.props.userData.email} onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เบอร์โทร</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.tel}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="tel" defaultValue={this.props.userData.tel} onChange={e => this.setState({ tel: e.target.value })} />
            </div>
            <div className="col-sm-1">
              <p className="bold-text">Role</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.role==="Mod"?"Owner":this.props.userData.role}</p>
              <select className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="role" defaultValue={this.props.userData.role} onChange={e => this.setState({ role: e.target.value })} >
                <option>Manager</option>
                <option>Employee</option>
                {this.props.roleUser === "Mod" && <option value='Mod'>Owner</option>}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">โน้ต</p>
            </div>
            <div className="col-sm-11">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.props.userData.address}</p>
              <textarea className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="note" rows="3" defaultValue={this.props.userData.address} onChange={e => this.setState({ note: e.target.value })} />
            </div>
          </div>
        </Body>
        {
        this.props.roleUser === "Mod" || this.props.roleUser === "Dev"? 
        <Footer>
        {button1}
        {button2}
        </Footer>
        :
        this.props.roleUser === "Manager" && this.props.userData.role === "Mod" || this.props.userData.role === "Dev" || this.props.userData.role === "Manager" ? null
        :
        <Footer>
          {button1}
          {button2}
        </Footer>
        }
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
          .bold-text{
            font-weight:bold;
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

function mapStateToProps(state) {
  return {
    roleUser: state.auth.roleUser,
    user: state.auth.user,
  }
}


export default compose(
  connect(mapStateToProps,{editUsersData,deleteUsersData,resetpasswordUsersData}),
)(UMEditModal);
