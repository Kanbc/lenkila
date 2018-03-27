import React, { Component } from 'react';
import { TabsLayout, PriceModal, FMImportPriceModal, ButtonModal, Constant } from '../components';

class FieldManagementPrice extends Component {
  // [GET] - Users
  users = userData();

  render() {
    return (
      <TabsLayout title="ราคา" tabs={Constant.FieldTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col">
                    <select className="custom-select" defaultValue="0">
                      <option value="0">F1</option>
                      <option value="1">F2</option>
                      <option value="2">F3</option>
                      <option value="3">F4</option>
                    </select>
                  </th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#import-field">
                      Import
                      <FMImportPriceModal title="Import" type="import-field" />
                    </ButtonModal>
                  </th>
                  <th scope="col">
                    <button type="button" className="btn btn-primary um-add-button" data-toggle="modal" data-target="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">วัน</th>
                  <th scope="col">เวลาเริ่ม</th>
                  <th scope="col">เวลาสิ้นสุด</th>
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
        <PriceModal title="สร้างราคา" type="add-user" />
        {this.users.map(user => (
          <PriceModal key={user.id} title="แก้ไขราคา" type={`edit-user-${user.id}`} userData={user} />
        ))}
        <style jsx>{`
          .um-search{
            background-color: #e9ecef;
          }
          .tools-row th{
            border-top: none;
            padding-bottom: 20px;
          }
          .overall-table{
            margin-top:0px;
          }
          .overall-table th{
            height:70px;
          }
          .overall-table th,.overall-table td{
            text-align:center;
            vertical-align: middle;
          }
          .overall-table button{
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
            .overall-table button{
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

export default FieldManagementPrice;
