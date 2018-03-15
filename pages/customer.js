import React, { Component } from 'react';
import { CustomerLayout, CustomerModal } from '../components';

class Customer extends Component {
  // [GET] - Users
  users = userData();
  render() {
    return (
      <CustomerLayout title="ข้อมูลลูกค้า">
        <div className="container">
          <div className="row um-one-row">
            <table className="table">
              <thead>
                <tr className="um-two-row">
                  <th scope="col"><input className="form-control um-search" type="text" placeholder="ค้นหา..." /></th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col"><button type="button" className="btn btn-secondary grey-button" data-toggle="modal" data-target="#add-user">Import</button></th>
                  <th scope="col"><button type="button" className="btn btn-primary um-add-button" data-toggle="modal" data-target="#add-user"><i className="fa fa-plus" aria-hidden="true" /></button></th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">ชื่อเล่น</th>
                  <th scope="col">เบอร์โทรศัพท์</th>
                  <th scope="col">ความสัมพันธ์</th>
                  <th scope="col" className="hide2">วันที่มาบ่อย</th>
                  <th scope="col" className="hide2">เวลาที่มาบ่อย</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.users.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.nickname}</td>
                    <td>{user.tel}</td>
                    <td>{user.lastname}</td>
                    <td className="hide2">{user.role}</td>
                    <td className="hide2">{user.role}</td>
                    <td><button type="button" className="btn btn-secondary um-edit-button" data-toggle="modal" data-target={`#edit-user-${user.id}`}><i className="fa fa-pencil" /></button></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <CustomerModal title="สร้างผู้ใช้ใหม่" type="add-user" />
        {this.users.map(user => (
          <CustomerModal key={user.id} title="ข้อมูลผู้ใช้งาน" type={`edit-user-${user.id}`} userData={user} />
        ))}
        <style jsx>{`
          .um-search{
            background-color: #e9ecef;
          }
          .grey-button{
            background-color: #9B9B9B;
          }
          .um-two-row th{
            border-top: none;
            padding-bottom: 20px;
          }
          .um-one-row{
            margin-top:0px;
          }
          .um-one-row th{
            height:70px;
          }
          .um-one-row th,.um-one-row td{
            text-align:center;
            vertical-align: middle;
          }
          .um-one-row button{
            width: 100px;
          }
          .um-add-button{
            background-color: #4A90E2;
            cursor:pointer;
          }
          .um-edit-button{
            background-color: #FD9226;
            border-color:#f77e06;
            cursor:pointer;
          }
          .container{
            max-width: 100%;
          }
          .price-color{
            border:none;
          }
          @media (max-width: 992px) { 
            .hide1{
              display:none;
            }
          }
          @media (max-width: 768px) { 
            .hide2{
              display:none;
            }
          }
          @media (max-width: 576px) { 
            .um-one-row button{
              width: 50px;
            }
          }
        `}
        </style>
      </CustomerLayout>
    );
  }
}

function userData() {
  const users = [
    {
      id: 1,
      firstname: 'Archer',
      lastname: 'Traher',
      email: 'atraher0@google.it',
      nickname: 'Yellow',
      username: 'atraher0',
      password: '0K7d35r',
      tel: '941-715-4509',
      role: 'Owner',
    },
    {
      id: 2,
      firstname: 'Sherilyn',
      lastname: 'Wooding',
      email: 'swooding1@live.com',
      nickname: 'Khaki',
      username: 'swooding1',
      password: 'W6wSVjGDVV',
      tel: '589-802-3451',
      role: 'Owner',
    },
    {
      id: 3,
      firstname: 'Erminie',
      lastname: 'Georgiades',
      email: 'egeorgiades2@diigo.com',
      nickname: 'Blue',
      username: 'egeorgiades2',
      password: 'GdKAPoubYOIV',
      tel: '177-268-9690',
      role: 'Owner',
    },
    {
      id: 4,
      firstname: 'Dominik',
      lastname: 'Switsur',
      email: 'dswitsur3@wired.com',
      nickname: 'Pink',
      username: 'dswitsur3',
      password: 'If6DgzXJPxg',
      tel: '625-877-1952',
      role: 'Admin',
    },
    {
      id: 5,
      firstname: 'Sharleen',
      lastname: 'Bostick',
      email: 'sbostick4@github.io',
      nickname: 'Fuscia',
      username: 'sbostick4',
      password: 'UaXVPi',
      tel: '892-646-7110',
      role: 'Admin',
    },
    {
      id: 6,
      firstname: 'Ford',
      lastname: 'Chasier',
      email: 'fchasier5@phoca.cz',
      nickname: 'Aquamarine',
      username: 'fchasier5',
      password: 'mCLrLR',
      tel: '179-637-9279',
      role: 'Admin',
    },
    {
      id: 7,
      firstname: 'Maia',
      lastname: 'Spurett',
      email: 'mspurett6@joomla.org',
      nickname: 'Teal',
      username: 'mspurett6',
      password: 'bMgyzA',
      tel: '904-911-4607',
      role: 'Admin',
    },
    {
      id: 8,
      firstname: 'Simona',
      lastname: 'Acres',
      email: 'sacres7@rambler.ru',
      nickname: 'Orange',
      username: 'sacres7',
      password: 'WG7DpIKKWm',
      tel: '907-273-8871',
      role: 'Admin',
    },
    {
      id: 9,
      firstname: 'Aaron',
      lastname: 'Crossingham',
      email: 'acrossingham8@163.com',
      nickname: 'Fuscia',
      username: 'acrossingham8',
      password: '7k0mnsvvdo',
      tel: '381-990-2820',
      role: 'Staff',
    },
    {
      id: 10,
      firstname: 'Niel',
      lastname: 'Voelker',
      email: 'nvoelker9@rakuten.co.jp',
      nickname: 'Crimson',
      username: 'nvoelker9',
      password: '6DJdjBzcSWO',
      tel: '767-174-0948',
      role: 'Staff',
    },
  ];
  return users;
}

export default Customer;
