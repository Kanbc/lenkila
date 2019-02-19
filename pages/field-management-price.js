import React, { Component } from 'react';
import { TabsLayout, FMImportPriceModal, FMPriceAddModal, FMPriceEditModal, ButtonModal, Constant } from '../components';
import {connect} from 'react-redux'
import {setData} from '../sagas/field_managementPriceSaga'

import { setFieldDataPrice } from '../store';

class FieldManagementPrice extends Component {
  // [GET] - Users
  componentDidMount(){
    this.props.setFieldDataPrice()
   
  }

  render() {
    
    return (
      <TabsLayout title="ราคา" tabs={Constant.FieldTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col">
                    <select className="custom-select" defaultValue="0" id="fieldID" onChange={e=>this.props.setData({fieldIdPrice:e.target.value})}>
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
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <FMPriceAddModal title="สร้างราคา" type="add-user" />
                    </ButtonModal>
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
                {this.props.fieldsPrice.map(user => (
                  <tr key={user.id}>
                    <td className="hide1" style={{ color: `${user.color}` }}>
                    {user.is_mon === "0" && "Mon "}	
                    {user.is_tue === "0" && "Tue "}
                    {user.is_wed === "0" && "Wed "}
                    {user.is_thu === "0" && "Thu "}
                    {user.is_fri === "0" && "Fri "}
                    {user.is_sat === "0" && "Sat "}
                    {user.is_sun === "0" && "Sun "}
                    {user.is_hol === "0" && "Hol "}
                    </td>
                    <td style={{ color: `${user.color}` }}>{user.start_time}</td>
                    <td style={{ color: `${user.color}` }}>{user.end_time}</td>
                    <td className="hide2" style={{ color: `${user.color}` }}>{parseInt(user.normal_class)}</td>
                    <td className="hide2">
                      <button type="button" style={{ color: `${user.color}`, backgroundColor: `${user.color}` }} className="btn price-color">
                        +
                      </button>
                    </td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" />
                        <FMPriceEditModal key={user.id} title="แก้ไขราคา" type={`edit-user-${user.id}`} userData={user} />
                      </ButtonModal>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
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
            .price-color{
              width:100px;
            }
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



function mapStateToProps(state) {
  return {
    fieldsPrice: state.field_managementPriceSaga.fieldsPrice,
  }
}

export default connect(mapStateToProps,{setFieldDataPrice,setData})(FieldManagementPrice);
