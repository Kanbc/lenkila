import React, { Component } from 'react';
import { TabsLayout, Constant, FMAddModal, FMEditModal, ButtonModal } from '../components';
import {connect} from 'react-redux'
import { setFieldDataField } from '../store';


class FieldManagementField extends Component {
  // [GET] - Users
  componentDidMount() {
    console.log('thisprops',this.props)
    this.props.setFieldDataField();
    
  }


  render() {

    const { users } = this.props;

    return (
      <TabsLayout title="สนาม" tabs={Constant.FieldTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col"><input className="form-control search" type="text" placeholder="ค้นหา..." /></th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" />
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <FMAddModal title="เพิ่มสนาม" type="add-user" />
                    </ButtonModal>
                  </th>
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
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.name}</td>
                    <td>{user.type === "0" ? "ฟุตบอล":"แบตมินตัน"}</td>
                    <td>{user.is_dividable === "0" ? "ได้":"ไม่ได้"}</td>
                    <td className="hide2">{user.description}</td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" />
                        <FMEditModal key={user.id} title="แก้ไขสนาม" type={`edit-user-${user.id}`} userData={user} />
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
    users: state.field_managementFieldSaga.fields,
  }
}



export default connect(mapStateToProps,{setFieldDataField})(FieldManagementField);
