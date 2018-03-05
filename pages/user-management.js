import React, { Component } from 'react';
import { Layout, UserManagementModal } from '../components';

class UserManagement extends Component {
  users = [{
    firstname: 'สมชาย',
    lastname: 'เข็มกลัด',
    nickname: 'เข็มกลัด',
    user_id: 'kingko',
    email: 'onion@mail.com',
    role: 'Owner',
    password: '123456789',
    tel: '0980910291',
    id: 1,
  }, {
    firstname: 'onion',
    lastname: 'onion',
    nickname: 'เข็มกลัด',
    user_id: 'onion',
    email: 'onion',
    role: '.99',
    password: '123456789',
    tel: '.99',
    id: 2,
  }, {
    firstname: 'onion',
    lastname: 'onion',
    nickname: 'เข็มกลัด',
    user_id: 'onion',
    email: 'onion',
    role: '.99',
    password: '123456789',
    tel: '.99',
    id: 3,
  }, {
    firstname: 'onion',
    lastname: 'onion',
    nickname: 'เข็มกลัด',
    user_id: 'onion',
    email: 'onion',
    role: '.99',
    password: '123456789',
    tel: '.99',
    id: 4,
  }];

  render() {
    return (
      <Layout title="การจัดการบัญชีผู้ใช้">
        <div className="container">
          <div className="row um-one-row">
            <p className="lenkila-header">การจัดการบัญชีผู้ใช้</p>
          </div>
          <div className="row um-three-row">
            <table className="table">
              <thead>
                <tr className="um-two-row">
                  <th scope="col"><input className="form-control um-search" type="text" placeholder="ค้นหา..." /></th>
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col"> <button type="button" className="btn btn-primary um-add-button" data-toggle="modal" data-target="#add-user"><i className="fa fa-plus" aria-hidden="true" /></button> </th>
                </tr>
                <tr>
                  <th scope="col">ชื่อ - นามสกุล</th>
                  <th scope="col">ชื่อเล่น</th>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.users.map(user =>
                  (<tr key={user.id}>
                    <td>{user.firstname} {user.lastname}</td>
                    <td>{user.nickname}</td>
                    <td>{user.user_id}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><button type="button" className="btn btn-secondary um-edit-button"><i className="fa fa-pencil" /></button></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <UserManagementModal title="สร้างผู้ใช้ใหม่" activeId="add-user" />
        <style jsx>{`
          .lenkila-header {
            margin: 30px auto 20px auto;
            font-weight:bold;
            font-size:20px;
          }
          .um-search{
            background-color: #e9ecef;
          }
          .um-two-row{
            height:80px;
          }
          .um-two-row th{
            border-top: none;
          }
          .um-three-row{
            margin-top:0px;
          }
          .um-three-row th{
            height:70px;
          }
          .um-three-row th,.um-three-row td{
            text-align:center;
            vertical-align: middle;
          }
          .um-three-row button{
            width: 100px;
          }
          .um-add-button{
            background-color: #4A90E2;
            cursor:pointer;
          }
          .um-edit-button{
            background-color: #FD9226;
            cursor:pointer;
          }
        `}
        </style>
      </Layout>
    );
  }
}

function UserDataRow(user) {
  return (
    <tr key={user.id}>
      <td>{user.firstname} {user.lastname}</td>
      <td>{user.nickname}</td>
      <td>{user.user_id}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td><button type="button" className="btn btn-secondary um-edit-button"><i className="fa fa-pencil" /></button></td>
    </tr>
  );
}

function UserDataTable(users){
  return (
    users.map(user => (
      <UserDataRow user=user />
    ))
  );
}

export default UserManagement;
