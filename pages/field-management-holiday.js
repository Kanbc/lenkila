import React, { Component } from 'react';
import { TabsLayout, Constant, FMHolidayAddModal, FMHolidayEditModal, ButtonModal,Loader } from '../components';
import { connect } from 'react-redux';
import { setFieldDataHoliday} from '../store';

class FieldManagementHoliday extends Component {
  // [GET] - Users
  componentDidMount() {
    this.props.setFieldDataHoliday();
  }

  render() {
 
    const { users } = this.props;
   
    return (
      <TabsLayout title="วันหยุด" tabs={Constant.FieldTabs}>
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
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <FMHolidayAddModal title="เพิ่มวันหยุด" type="add-user" />
                    </ButtonModal>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">ชื่อ</th>
                  <th scope="col">วันที่เริ่ม</th>
                  <th scope="col">เวลาที่เริ่ม</th>
                  <th scope="col">วันสิ้นสุด</th>
                  <th scope="col">เวลาสิ้นสุด</th>
                  <th scope="col" className="hide2">เปิด/ปิด</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.name} {user.lastname}</td>
                    <td>{user.start_date}</td>
                    <td>{user.start_time}</td>
                    <td className="hide2">{user.end_date}</td>
                    <td className="hide1">{user.end_time}</td>
                    <td style={{ color: `${user.flag === "1" ? '#D0021B' : '#417505'}` }} >{user.flag === "1" ? 'ปิดบริการ' : 'เปิดบริการ'}</td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}` }>
                        <i className="fa fa-pencil" />
                        <FMHolidayEditModal key={user.id} title="แก้ไขวันหยุด" type={`edit-user-${user.id}`} userData={user} />
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
    users: state.field_managementHolidaySaga.fieldsHLD,
    isLoading:state.field_managementHolidaySaga.isLoading,
  }
}

export default connect(mapStateToProps,{setFieldDataHoliday})(FieldManagementHoliday);
