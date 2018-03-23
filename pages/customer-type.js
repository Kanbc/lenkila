import React, { Component } from 'react';
import { TabsLayout, Constant, CustomerTypeModal } from '../components';

class CustomerType extends Component {
  // [GET] - Users
  users = userData();
  render() {
    return (
      <TabsLayout title="ประเภทลูกค้า" tabs={Constant.CustomerTabs}>
        <div className="container">
          <div className="row um-one-row">
            <table className="table">
              <thead>
                <tr className="um-two-row">
                  <th scope="col" />
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col" />
                  <th scope="col"><button type="button" className="btn btn-primary um-add-button" data-toggle="modal" data-target="#add-user"><i className="fa fa-plus" aria-hidden="true" /></button></th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">ชื่อ</th>
                  <th scope="col">ประเภท</th>
                  <th scope="col">จำนวนชั่วโมง</th>
                  <th scope="col" className="hide2">ราคา</th>
                  <th scope="col" className="hide2">สี</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.users.map(user => (
                  <tr key={user.id}>
                    <td className="hide1" style={{ color: `${user.color}` }}>{user.weekday}</td>
                    <td style={{ color: `${user.color}` }}>{user.start}</td>
                    <td style={{ color: `${user.color}` }}>{user.end}</td>
                    <td className="hide2" style={{ color: `${user.color}` }}>{user.price}</td>
                    <td className="hide2"><button type="button" style={{ color: `${user.color}`, backgroundColor: `${user.color}` }} className="btn btn-primary price-color">+</button></td>
                    <td><button type="button" className="btn btn-secondary um-edit-button" data-toggle="modal" data-target={`#edit-user-${user.id}`}><i className="fa fa-pencil" /></button></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <CustomerTypeModal title="สร้างประเภทลูกค้าใหม่" type="add-user" />
        {this.users.map(user => (
          <CustomerTypeModal key={user.id} title="ดูประเภทลูกค้า" type={`edit-user-${user.id}`} userData={user} />
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
      </TabsLayout>
    );
  }
}

function userData() {
  const users = [
    {
      id: 1,
      weekday: 'Rhynyx',
      start: '10:24',
      end: '13:44',
      price: 734,
      color: '#FD9226',
    },
    {
      id: 2,
      weekday: 'Aimbu',
      start: '7:44',
      end: '13:03',
      price: 999,
      color: '#9013FE',
    },
    {
      id: 3,
      weekday: 'DabZ',
      start: '5:58',
      end: '6:37',
      price: 664,
      color: '#D0021B',
    },
  ];
  return users;
}

export default CustomerType;
