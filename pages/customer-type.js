import React, { Component } from 'react';
import { TabsLayout, Constant, CustTypeAddModal, CustTypeEditModal, ButtonModal } from '../components';
import {connect} from 'react-redux'
import { getCustomerType,addCustomerType,editCustomerType,deleteCustomerType } from '../store';


class CustomerType extends Component {

  componentDidMount() {
    this.props.getCustomerType();
  }
  // [GET] - Users
  render() {
    console.log('test',this.props.customerType)
    return (
      <TabsLayout title="ประเภทลูกค้า" tabs={Constant.CustomerTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col" />
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col" />
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <CustTypeAddModal title="สร้างประเภทลูกค้าใหม่" type="add-user" addCustomerType={this.props.addCustomerType}/>
                    </ButtonModal>
                  </th>
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
                {this.props.customerType.map(user => (
                  <tr key={user.id}>
                    <td className="hide1" style={{ color: `${user.color}` }}>{user.name}</td>
                    <td style={{ color: `${user.color}` }}>{user.type}</td>
                    <td style={{ color: `${user.color}` }}>{user.hour_amount}</td>
                    <td className="hide2" style={{ color: `${user.color}` }}>{user.price}</td>
                    <td className="hide2">
                      <button type="button" style={{ color: `${user.color}`, backgroundColor: `${user.color}` }} className="btn btn-primary price-color">
                        +
                      </button>
                    </td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" />
                        <CustTypeEditModal key={user.id} title="ดูประเภทลูกค้า" type={`edit-user-${user.id}`} userData={user} />
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
        `}
        </style>
      </TabsLayout>
    );
  }
}


function mapStateToProps(state) {
  return {
    customerType: state.customer_typeSaga.customerType,
  }
}

export default connect(mapStateToProps,{getCustomerType,addCustomerType,editCustomerType,deleteCustomerType})(CustomerType);


