import React, { Component } from 'react';
import { TabsLayout, FMImportPriceModal, FMPriceAddModal, FMPriceEditModal, ButtonModal, Constant,Loader } from '../components';
import {connect} from 'react-redux'
import {setDataPrice} from '../sagas/field_managementPriceSaga'

import { setFieldDataPrice,setFieldDataField,importPrice,getCustomerType } from '../store';

class FieldManagementPrice extends Component {
  
  // [GET] - Users
  constructor(props) {
    super(props);
    this.state = {
      setImport : true,
    };
    
    this.setStateImport = this.setStateImport.bind(this);
    
  }

  setStateImport = (obj) => {
    return this.setState(obj)
  }

  async componentDidMount(){
    await this.props.setDataPrice({firstTime:true})
    await this.props.setFieldDataField()
    await this.props.setFieldDataPrice()
    this.props.getCustomerType()
  }
  
  render() {
    console.log('this.props.fieldsPrice',this.props.fieldId)
    const vipType = this.props.customerType.filter(value=> value.type !== 'default')
    return (
      <TabsLayout title="ราคา" tabs={Constant.FieldTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col">
                    <select className="custom-select" id="fieldID" onChange={e=>{
                      this.props.setDataPrice({fieldId:e.target.value,fieldIdImport:0})
                      this.props.setFieldDataPrice()
                      
                      }
                    }>
                      {this.props.fields.map(item=>
                      <option value={item.id}>{item.name}</option>)
                      }
                    </select>
                  </th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col">
                    <ButtonModal onClick={()=> this.setStateImport({setImport:true})}color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#import-field">
                      Import
                      <FMImportPriceModal title="Import" type="import-field" fieldId={this.props.fieldId} setDataPrice={this.props.setDataPrice} importPrice={this.props.importPrice} fieldOptions={this.props.fields.filter(val => val.id !== this.props.fieldId)}
                        setStateImport={this.setStateImport}
                        setImport={this.state.setImport}
                        fieldIdImport={this.props.fieldIdImport}
                      />
                    </ButtonModal>
                  </th>
                  <th scope="col">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <FMPriceAddModal title="สร้างราคา" type="add-user" customerType={vipType} fields={this.props.fields}/>
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
              {this.props.isLoading ? <Loader price/> :          
              <tbody>
                {this.props.fieldsPrice.map(user => (
                  <tr key={user.id}>
                    <td className="hide1" style={{ color: `${user.color}` }}>
                    {user.is_mon === "1" && "Mon "}	
                    {user.is_tue === "1" && "Tue "}
                    {user.is_wed === "1" && "Wed "}
                    {user.is_thu === "1" && "Thu "}
                    {user.is_fri === "1" && "Fri "}
                    {user.is_sat === "1" && "Sat "}
                    {user.is_sun === "1" && "Sun "}
                    {user.is_hol === "1" && "Hol "}
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
                        <FMPriceEditModal key={user.id} title="แก้ไขราคา" type={`edit-user-${user.id}`} userData={user} customerType={vipType} fields={this.props.fields}/>
                      </ButtonModal>
                    </td>
                  </tr>))}
              </tbody>
              }
            </table>          
          </div>
        </div>
        
        <style jsx>{`
          
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
    fields: state.field_managementFieldSaga.fields,
    fieldId: state.field_managementPriceSaga.fieldId,
    fieldIdImport: state.field_managementPriceSaga.fieldIdImport,
    customerType: state.customer_typeSaga.customerType,
    isLoading:state.field_managementPriceSaga.isLoading,
  }
}

export default connect(mapStateToProps,{setFieldDataPrice,setDataPrice,setFieldDataField,importPrice,getCustomerType})(FieldManagementPrice);
