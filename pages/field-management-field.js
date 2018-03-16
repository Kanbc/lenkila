import React, { Component } from 'react';
import { FieldManagementLayout, FieldModal } from '../components';

class FieldManagementField extends Component {
  // [GET] - Users
  users = userData();

  render() {
    return (
      <FieldManagementLayout title="สนาม">
        <div className="container">
          <div className="row um-one-row">
            <table className="table">
              <thead>
                <tr className="um-two-row">
                  <th scope="col"><input className="form-control um-search" type="text" placeholder="ค้นหา..." /></th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" />
                  <th scope="col"> <button type="button" className="btn btn-primary um-add-button" data-toggle="modal" data-target="#add-user"><i className="fa fa-plus" aria-hidden="true" /></button> </th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">ชื่อ</th>
                  <th scope="col">ประเภท</th>
                  <th scope="col">แบ่งครึ่ง</th>
                  <th scope="col" className="hide2">รายละเอียด</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.users.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.firstname} {user.lastname}</td>
                    <td>{user.nickname}</td>
                    <td>{user.username}</td>
                    <td className="hide2">{user.email}</td>
                    <td><button type="button" className="btn btn-secondary um-edit-button" data-toggle="modal" data-target={`#edit-user-${user.id}`}><i className="fa fa-pencil" /></button></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <FieldModal title="เพิ่มสนาม" type="add-user" />
        {this.users.map(user => (
          <FieldModal key={user.id} title="แก้ไขสนาม" type={`edit-user-${user.id}`} userData={user} />
        ))}
        <style jsx>{`
          .um-search{
            background-color: #e9ecef;
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
      </FieldManagementLayout>
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
    {
      id: 11,
      firstname: 'Kattie',
      lastname: 'Loding',
      email: 'klodinga@tinyurl.com',
      nickname: 'Pink',
      username: 'klodinga',
      password: '6OdrWq',
      tel: '949-345-2637',
      role: 'Staff',
    },
    {
      id: 12,
      firstname: 'Inesita',
      lastname: 'Cardenosa',
      email: 'icardenosab@behance.net',
      nickname: 'Turquoise',
      username: 'icardenosab',
      password: '3k4I81',
      tel: '685-631-6326',
      role: 'Staff',
    },
    {
      id: 13,
      firstname: 'Josey',
      lastname: 'Laffan',
      email: 'jlaffanc@tumblr.com',
      nickname: 'Maroon',
      username: 'jlaffanc',
      password: 'tO1psUtvrJ75',
      tel: '503-798-6012',
      role: 'Staff',
    },
    {
      id: 14,
      firstname: 'Jacquie',
      lastname: 'Joddens',
      email: 'jjoddensd@weebly.com',
      nickname: 'Aquamarine',
      username: 'jjoddensd',
      password: 'E5Pg0YK3o',
      tel: '231-377-0643',
      role: 'Staff',
    },
    {
      id: 15,
      firstname: 'Dasha',
      lastname: 'Wallach',
      email: 'dwallache@adobe.com',
      nickname: 'Pink',
      username: 'dwallache',
      password: '7K9YCLvfg',
      tel: '749-427-3016',
      role: 'Staff',
    },
  ];
  return users;
}

export default FieldManagementField;
