import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import MemberModal from './MemberModal';
import HistoryModal from './HistoryModal';
import DefaultModal from './../DefaultModal';
import Body from './../DefaultModal/Body';
import Footer from './../DefaultModal/Footer';
import { CancelModal, Button, Constant, ButtonModal } from '../../..';

class CustEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false,...this.props.userData,date_of_birth: moment(this.props.userData.date_of_birth)};

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
  }

  editForm() {
    this.setState({
      isEdit: true,
    });
  }

  cancelEditForm() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    let button1 = null;
    let button2 = null;
    let button3 = null;
    if (this.state.isEdit === true) {
      button1 = <CancelModal width={Constant.Buttons.default} bstrap="btn-success" onClick={()=>
        {
          this.props.editCustomer(this.state)
          this.cancelEditForm()
        }
       } >บันทึก</CancelModal>;
      button2 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={() => this.cancelEditForm()}>ยกเลิก</CancelModal>;
      button3 = null;
    } else {
      button1 = <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#history-${this.props.userData.id}`} > ประวัติ<HistoryModal title="ประวัติ" type={`history-${this.props.userData.id}`} history={this.props.history}/></ButtonModal>;
      button2 = <Button width={Constant.Buttons.default} color={Constant.Blue} bstrap="btn-primary" onClick={() => this.editForm()}>แก้ไข</Button>;
      button3 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={()=>
        {
          let result = confirm("คุณต้องการลบข้อมูลส่วนนี้ใช่หรือไม่");
          if (result) {
            this.props.deleteCustomer(this.props.userData.id)
          }
        }
        }>
          ลบ</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อเล่น*</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.nick_name}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="firstname" defaultValue={this.state.nick_name} onChange={e => this.setState({ nick_name: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เบอร์โทรศัพท์*</p>
            </div>
            <div className="col-sm-2">
            <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.tel}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="firstname"  maxlength="10" defaultValue={this.state.tel} onChange={e => this.setState({ tel: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">วันเกิด</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{moment(this.state.date_of_birth).format('DD/MM/YYYY')}</p>
              <div className={this.state.isEdit ? '' : 'd-none'}>
                <DatePicker
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  disabledKeyboardNavigation
                  selected={this.state.date_of_birth}
                  onChange={date_of_birth => this.setState({ date_of_birth })}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อจริง</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.name}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">นามสกุล</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.surname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={this.state.surname} onChange={e => this.setState({ surname: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เพศ</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.gender}</p>
              <select className={this.state.isEdit ? 'custom-select' : 'custom-select d-none'} defaultValue={this.state.gender} onChange={e => this.setState({ gender: e.target.value })}>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.customer_duty}</p>
              <select className={this.state.isEdit ? 'custom-select' : 'custom-select d-none'} defaultValue={this.state.customer_duty} onChange={e => this.setState({ customer_duty: e.target.value })}>
                <option value="หัวกลุ่ม">หัวกลุ่ม</option>
                <option value="ลูกกลุ่ม">ลูกกลุ่ม</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">ความสัมพันธ์:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.customer_relationship}</p>
              <select className={this.state.isEdit ? 'custom-select' : 'custom-select d-none'} defaultValue={this.state.customer_relationship} onChange={e => this.setState({ customer_relationship: e.target.value })}>
                <option value="ขาประจำ">ขาประจำ</option>
                <option value="ขาเก่า">ขาเก่า</option>
                <option value="ขาจร">ขาจร</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">Free Credits:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.customer_freecredits}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={this.state.customer_freecredits} onChange={e => this.setState({ customer_freecredits: e.target.value })}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ประเภท:</p>
            </div>
            <div className="col-sm-2">
              <p>{this.props.userData.customer_type_history.length !== 0 ? this.props.customerTypeId.name : this.props.userData.customer_type_default }</p>
            </div>
            <div className="col-sm-2">
              <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#member-${this.props.userData.id}`} >
                Member
                <MemberModal title="Member" type={`member-${this.props.userData.id}`} userData={this.props.userData} customerType={this.props.customerType} 
                addCustomerHistory={this.props.addCustomerHistory} 
                customerTypeId={this.props.customerTypeId}
                customerTypeIdNext={this.props.customerTypeIdNext}
                />
              </ButtonModal>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" defaultValue={this.state.note} onChange={e => this.setState({ note: e.target.value })}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10" />
            <div className="col-sm-2">
              <label className={this.state.isEdit ? 'form-check-label red-label' : 'form-check-label red-label d-none'} htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="0" defaultValue={this.state.is_blacklist} onChange={()=>this.setState({is_blacklist:this.state.is_blacklist==="0"?"1":"0"})} checked={this.state.is_blacklist==="1"}/>
                Blacklist
              </label>
            </div>
          </div>
        </Body>
        <Footer>
          {button1}
          {button2}
          {button3}
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:30px;
          }
          .red-label{
            color:#c82333;
          }
          .bold-text{
            font-weight:bold;
          }
          @media (max-width: 576px) { 
            .row{
              margin-top:0px;
              margin-bottom:0px;
              p{
                position: relative;
                text-align: left;
              }
            }
          }
        `}
        </style>
      </DefaultModal>
    );
  }
}

export default CustEditModal;
