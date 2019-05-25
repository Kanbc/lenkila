import React, { Component } from 'react';
import { Layout, PageTitle, ButtonModal, Constant, UMAddModal, UMEditModal, Loader } from '../components';
import { connect } from 'react-redux';
import { setUsersData,addUsersData } from '../store';

class UserManagement extends Component {
  // [GET] - Users

  componentDidMount() {
    this.props.setUsersData();
  }

  render() {
    console.log('this props',this.props)
    const { users,roleUser } = this.props;
    console.log('render!', users);
    if(roleUser === "Employee"){
      return <div> 404 </div>
    }
    else{

      return (
        <Layout title="การจัดการบัญชีผู้ใช้">
          <div className="container">
            <PageTitle title="การจัดการบัญชีผู้ใช้" />
            {this.props.isLoading ? <Loader /> :
            <div className="row overall-table">
              <table className="table">
                <thead>
                  <tr className="tools-row">
                    <th scope="col"><input className="form-control search" type="text" placeholder="ค้นหา..." /></th>
                    <th scope="col" className="hide1" />
                    <th scope="col" className="hide2" />
                    <th scope="col" />
                    <th scope="col" />
                    <th scope="col" >
                      <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} modalName="#add-user">
                        <i className="fa fa-plus" aria-hidden="true" />
                        <UMAddModal title="สร้างผู้ใช้ใหม่" type="add-user" />
                      </ButtonModal>
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" className="hide1">ชื่อ - นามสกุล</th>
                    <th scope="col">ชื่อเล่น</th>
                    <th scope="col">ID</th>
                    <th scope="col" className="hide2">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {users && users.map(user => {
                    console.log('new=>>>>>',user)
                    return (
                      <tr key={user.user_id}>
                        <td className="hide1">{user.name} {user.surname}</td>
                        <td>{user.nickname}</td>
                        <td>{user.username}</td>
                        <td className="hide2">{user.email}</td>
                        <td>{user.role === "Mod"?"Owner":user.role}</td>
                        <td>
                          <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.user_id}`}>
                            <i className="fa fa-pencil" aria-hidden="true" />
                            <UMEditModal key={user.user_id} title="ข้อมูลผู้ใช้งาน" type={`edit-user-${user.user_id}`} userData={user} />
                          </ButtonModal>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            }
          </div>
          <style jsx>{`
            .search{
              background-color: #e9ecef;
            }
            .tools-row{
              height:80px;
              th{
                border-top: none;
              }
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
        </Layout>
      );
    }
  }
}




function mapStateToProps(state) {
  console.log('state',state.user_managementSaga.users)
  return {
    users: state.user_managementSaga.users,
    roleUser: state.auth.roleUser,
    isLoading:state.user_managementSaga.isLoading,
  }
}

export default connect(mapStateToProps,{setUsersData,addUsersData})(UserManagement);
