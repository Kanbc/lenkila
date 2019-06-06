import React, { Component } from 'react';
import CollapseMenu from './CollapseMenu';
import CollapseMenu2 from './CollapseMenu2';
import { AdminEditModal } from '../../../index';
import { connect } from 'react-redux';
import {logout} from '../../../../store'

class TopNavbar extends Component {
  // [GET] - admin
  componentDidMount() {
    console.log('adminporps',this.props)
  }
  render() {
    const admin = this.props.userAdmin[0];
    const logout = this.props.logout

    console.log('render!', admin);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-space-between">
        <a className="navbar-brand d-none d-sm-block" href="/">LENKILA Stadium</a>
        <a className="navbar-brand d-sm-none" href="/">LENKILA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-lg-none d-xl-none">
            {
              this.props.menulists.map(menu => (
                <CollapseMenu
                  key={menu.id}
                  href={menu.href}
                  name={menu.name}
                  iconClass={menu.iconClass}
                />
              ))
            }
          </ul>
          <div className="dropdown-divider" />
          {admin &&
            <ul className="navbar-nav d-lg-none d-xl-none">
              <CollapseMenu2
                href="#"
                name="ลงชื่อออก"
                onClick={() => logout()}
              />
              <CollapseMenu2
                href="#"
                dataToggle="modal"
                dataBackdrop="static"
                dataTarget="#edit-admin2"
                name="ข้อมูลส่วนตัว"
              />
              <CollapseMenu2
                href="#"
                name="คำถามที่พบบ่อย"
              />
              <CollapseMenu2
                href="#"
                name="แจ้งปัญหา"
              />
              {/* <a className="dropdown-item" href="#" data-toggle="modal" data-backdrop="static" data-target="#edit-admin">ข้อมูลส่วนตัว</a> */}
              <AdminEditModal title="ข้อมูลส่วนตัว" type="edit-admin2" userData={admin} />
            </ul>
          }
        </div>
         
        <div className="collapse navbar-collapse" id="navbarNavDropdown2">
          {admin &&
            <ul className="navbar-nav d-none d-sm-block">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {admin.username + ' '}
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#" onClick={()=>logout()}>ลงชื่อออก</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#" data-toggle="modal" data-backdrop="static" data-target="#edit-admin">ข้อมูลส่วนตัว</a>
                  <a className="dropdown-item" href="#">คำถามที่พบบ่อย</a>
                  <a className="dropdown-item" href="#">แจ้งปัญหา</a>
                </div>
              </li>
              <AdminEditModal title="ข้อมูลส่วนตัว" type="edit-admin" userData={admin} />
            </ul>
          }
        </div>
        
        <style jsx>{`
          .navbar {
            background: linear-gradient(270deg,#000 0,#062a64 100%);
            box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
            #navbarNavDropdown2 ul {
              position: absolute;
              right:15px;
              .dropdown-divider{
                border-top: 1px solid #484848;
              }
              .dropdown-item{
                color:#7a7b7b;
                text-align: right;
                padding:.5rem 1.5rem
              }
              .dropdown-item:hover{
                color: #fff;
                background-color: #000;
              }
              .dropdown-menu-right{
                background-color: #000;
                color: rgba(255,255,255,.5);
              }
            }
          }
        `}
        </style>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    userAdmin: state.auth.user,
  }
}

export default connect(mapStateToProps,{logout})(TopNavbar);
