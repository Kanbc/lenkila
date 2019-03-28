import React, { Component } from 'react';
import { TabsLayout, CustFilterModal, CustAddModal, CustEditModal, ButtonModal, Constant } from '../components';
import {connect} from 'react-redux'
import { getCustomer,addCustomer,editCustomer,deleteCustomer,getCustomerType,addCustomerHistory,getCustomerHistory } from '../store';

class Customer extends Component {
  // [GET] - Users

  componentDidMount() {
    this.props.getCustomer();
    this.props.getCustomerType();
  }

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
                      <CustFilterModal title="Filter" type="filter-user" customerType={this.props.customerType}/>
                    </ButtonModal>
                  </th>
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <CustAddModal title="สร้างลูกค้า" type="add-user" addCustomer={this.props.addCustomer}/>
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
                {this.props.customer.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.nick_name}</td>
                    <td>{user.tel}</td>
                    <td>{user.customer_relationship}</td>
                    <td className="hide2">{user.role}</td>
                    <td className="hide2">{user.role}</td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" />
                        <CustEditModal key={user.id} title="ข้อมูลลูกค้า" type={`edit-user-${user.id}`} 
                        userData={user} editCustomer={this.props.editCustomer}
                        deleteCustomer={this.props.deleteCustomer} 
                        customerType={this.props.customerType}
                        addCustomerHistory={this.props.addCustomerHistory}
                        getCustomerHistory={this.props.getCustomerHistory}
                        
                        />
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


function mapStateToProps(state) {
  return {
    customer: state.customerSaga.customer,
    customerType: state.customer_typeSaga.customerType,
  }
}

export default connect(mapStateToProps,{getCustomer,addCustomer,editCustomer,deleteCustomer,getCustomerType,addCustomerHistory,getCustomerHistory})(Customer);
