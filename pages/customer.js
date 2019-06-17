import React, { Component } from 'react';
import { TabsLayout, CustFilterModal, CustAddModal, CustEditModal, ButtonModal, Constant, Loader } from '../components';
import {connect} from 'react-redux'
import { getCustomer,addCustomer,editCustomer,deleteCustomer,getCustomerType,addCustomerHistory,getCustomerHistory,getCustomerTypeId,getCustomerTypeIdNext } from '../store';

class Customer extends Component {
  // [GET] - Users
  
  constructor(props) {
    super(props);
    this.state = {
      fillterOptions:{หัวกลุ่ม:true,ลูกกลุ่ม:true,ขาประจำ:true,ขาเก่า:true,ขาจร:true},
      firstFill:true,
    };
    
    this.setFillterOptions = this.setFillterOptions.bind(this);
    
  }
  
  setFillterOptions = (obj) => {
    return this.setState(obj)
  }
  
  componentDidMount() {
     this.props.getCustomer();
     this.props.getCustomerType();
  }
  
  render() {
    return (
      <TabsLayout title="ข้อมูลลูกค้า" tabs={Constant.CustomerTabs}>
        <div className="container">
          <div className="row overall-table">
          {this.props.isLoading ? <Loader /> :
            <table className="table">
              <thead>
                <tr className="tools-row">
                  {/* <th scope="col"><input className="form-control search" type="text" placeholder="ค้นหา..." /></th> */}
                  <th scope="col" className="hide1" />                  
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col">
                    <ButtonModal color={Constant.Grey} width={Constant.Buttons.default} bstrap="btn-secondary" modalName="#filter-user" 
                      onClick={()=> {
                        if(this.state.firstFill){
                          const {fillterOptions} = this.state
                          const typeOption={}
                          this.props.customerType.map((value=> typeOption[value.id]=true))
                          this.setFillterOptions({fillterOptions:{...fillterOptions,...typeOption,หัวกลุ่ม:true,ลูกกลุ่ม:true,ขาประจำ:true,ขาเก่า:true,ขาจร:true,}})
                          this.setState({firstFill:false})
                        }
                      }        
                      }>
                      Filter
                      <CustFilterModal title="Filter" type="filter-user" customerType={this.props.customerType}
                        fillterOptions={this.state.fillterOptions}
                        setFillterOptions={this.setFillterOptions}
                        
                      />
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
                {this.props.customer && this.props.customer.map(user => {
                  const relation = user.customer_relationship
                  const duty = user.customer_duty
                  const type = user.customer_type_history.length === 0 ? user.type_default.id : user.customer_type_history[0].customer_type_id
                  const isBlackList = user.is_blacklist === "1" && 'is_blacklist'
                  if (this.state.fillterOptions[relation] || this.state.fillterOptions[duty] || this.state.fillterOptions[type] || this.state.fillterOptions[isBlackList]){
                    return(
                    <tr key={user.id}>
                      <td className="hide1">{user.nick_name}</td>
                      <td>{user.tel}</td>
                      <td>{user.customer_relationship}</td>
                      <td className="hide2">{user.role}</td>
                      <td className="hide2">{user.role}</td>
                      <td>
                        <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}
                        onClick={()=>{
                          this.props.getCustomerHistory(user.id)
                          if(user.customer_type_history.length === 0){
                            this.props.getCustomerTypeId(null)
                            this.props.getCustomerTypeIdNext(null)
                          }
                          else if(user.customer_type_history.length === 1 ){
                            this.props.getCustomerTypeId(user.customer_type_history[0].customer_type_id)
                            this.props.getCustomerTypeIdNext(null)
                          }
                          else if(user.customer_type_history.length > 1){
                            this.props.getCustomerTypeId(user.customer_type_history[0].customer_type_id)
                            this.props.getCustomerTypeIdNext(user.customer_type_history[1].customer_type_id)
                          }
                          
                         
                        }
                      }
                        >
                          <i className="fa fa-pencil" />
                          <CustEditModal key={user.id} title="ข้อมูลลูกค้า" type={`edit-user-${user.id}`} 
                          userData={user} editCustomer={this.props.editCustomer}
                          deleteCustomer={this.props.deleteCustomer} 
                          customerType={this.props.customerType.filter(value=>value.type !== 'default')}
                          addCustomerHistory={this.props.addCustomerHistory}
                          history={this.props.history}
                          customerTypeId={this.props.customerTypeId}
                          customerTypeIdNext={this.props.customerTypeIdNext}
                          />
                        </ButtonModal>
                      </td>
                    </tr>
                  )
                  }
                }
              )}
              </tbody>
            </table>
          }
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
          @-moz-document url-prefix() {
            .overall-table{
              margin-bottom: 100px;
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
    customerTypeId: state.customer_typeSaga.customerTypeId,
    customerTypeIdNext: state.customer_typeSaga.customerTypeIdNext,
    history:state.customerSaga.history,
    isLoading:state.customerSaga.isLoading,
  }
}

export default connect(mapStateToProps,{getCustomer,addCustomer,editCustomer,deleteCustomer,getCustomerType,addCustomerHistory,getCustomerHistory,getCustomerTypeId,getCustomerTypeIdNext})(Customer);
