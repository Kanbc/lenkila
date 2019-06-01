import React, { Component } from 'react';
import { TabsLayout, Constant, ButtonModal, FMGiftEditModal, FMGiftAddModal,Loader } from '../components';
import {connect} from 'react-redux'
import { setFieldDataGift } from '../store';
import moment from 'moment'

class FieldManagementGift extends Component {


  componentDidMount() {
    this.props.setFieldDataGift();
  }

  render() {
    const toDay = new Date()
    const { gifcode } = this.props;
    
    return (
      <TabsLayout title="Gift Code" tabs={Constant.FieldTabs}>
        {this.props.isLoading ? <Loader /> :
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  {/* <th scope="col"><input className="form-control search" type="text" placeholder="ค้นหา..." /></th> */}
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <FMGiftAddModal title="เพิ่ม Gift Code" type="add-user" />
                    </ButtonModal>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">ชื่อ</th>
                  <th scope="col">สถานะ</th>
                  <th scope="col">เวลา</th>
                  <th scope="col">วันเริ่มต้น-วันสิ้นสุด</th>
                  <th scope="col">ราคา</th>
                  <th scope="col">จำนวน</th>
                  <th scope="col" className="hide2">สิทธิ์</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {gifcode.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.name}</td>
                    <td>{moment(toDay).format("YYYY-MM-DD") < user.start_at ? 'Waiting' : moment(toDay).format("YYYY-MM-DD") <= user.expired_at ? 'Active' : 'Expire'}</td>
                    <td>{user.is_allday === "0" ? "ทั้งวัน" : `${user.start_time} - ${user.end_time}`}</td>
                    <td className="hide2">{user.start_at} - {user.expired_at}</td>
                    <td className="hide1">{user.discount_amount}</td>
                    <td>{user.used_amount}</td>
                    <td>{user.per_person_limit_amount}</td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" />
                        <FMGiftEditModal key={user.id} title="ข้อมูล Gift Code" type={`edit-user-${user.id}`} userData={user} />
                      </ButtonModal>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
        }
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
    gifcode: state.field_managementGiftCodeSaga.fieldsGift,
    isLoading:state.field_managementGiftCodeSaga.isLoading,
  }
}

export default connect(mapStateToProps,{setFieldDataGift})(FieldManagementGift);
