import React, { Component } from 'react';
import { TabsLayout, CustomerModal, CustFilterModal, CustAddModal, ButtonModal, Constant } from '../components';

class Customer extends Component {
  // [GET] - Users
  users = userData();
  render() {
    return (
      <TabsLayout title="ข้อมูลลูกค้า" tabs={Constant.CustomerTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col"><input className="form-control search" type="text" placeholder="ค้นหา..." /></th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col">
                    <ButtonModal color={Constant.Grey} width={Constant.Buttons.default} bstrap="btn-secondary" modalName="#filter-user">
                      Filter
                      <CustFilterModal title="Filter" type="filter-user" />
                    </ButtonModal>
                  </th>
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <CustAddModal title="สร้างลูกค้า" type="add-user" />
                    </ButtonModal>
                  </th>
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
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} bstrap="btn-secondary" modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" />
                        <CustomerModal key={user.id} title="ข้อมูลลูกค้า" type={`edit-user-${user.id}`} userData={user} />
                      </ButtonModal>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
          .search{
            background-color: #e9ecef;
          }
          .tools-row th{
            border-top: none;
            padding-bottom: 20px;
          }
          .overall-table{
            margin-top:0px;
            th{
              height:70px;
              text-align:center;
              vertical-align: middle;
            }
            td{
              text-align:center;
              vertical-align: middle;
            }
          }
          .um-edit-button{
            background-color: #FD9226;
            border-color:#f77e06;
            cursor:pointer;
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
        `}
        </style>
      </TabsLayout>
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
