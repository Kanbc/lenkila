import React, { Component } from 'react';
import DefaultModal from './../../DefaultModal';
import Body from './../../DefaultModal/Body';
import Footer from './../../DefaultModal/Footer';
import { CancelModal, Constant, Button } from '../../../..';

class MemberModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      ...this.props.customerType[0],
    };

    this.addMember = this.addMember.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.exitThisModal = this.exitThisModal.bind(this);
  }

  addMember() {
    this.setState({ isAdding: true });
  }

  selectValue(value){
    const newValue = this.props.customerType.find(val=>val.id===value)
    this.setState(
      {
        ...newValue
      }
    );
  }

  exitThisModal() {
    // Jquery hide specific modal
    $("#" + this.props.type).modal('hide');
  }

 

  render() {
    const { customerType,customerTypeId,userData,customerTypeIdNext } = this.props;
    console.log('customerTypeId',customerTypeId)
  
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">Default:</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.customer_type_default}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">ปัจจุบัน:</p>
            </div>
            <div className="col-sm-4">
              <p>{customerTypeId.name || "-"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">จำนวนชั่วโมง:</p>
            </div>
            <div className="col-sm-4">
              <p>{customerTypeId.hour_amount || "-"}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">หมดอายุ:</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.customer_type_history.length!==0 && moment(userData.customer_type_history[0].expried_date).format("DD/MM/YY")} </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">Next :</p>
            </div>
            <div className="col-sm-4">
              <p>{customerTypeIdNext.name || "-"}</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-4" />
          </div>
          {
            (this.state.isAdding && customerType.length !== 0) &&
            <div>
              <div className="row" />
              <div className="row">
                <div className="col-sm-3">
                  <p className="bold-text">ซื้อ Member เพิ่ม:</p>
                </div>
                <div className="col-sm-4">
                  <select className="form-control" id="exampleFormControlSelect1" onChange={e => 
                    this.selectValue(e.target.value)
                  }>
                    {
                      customerType && customerType.map(type =>(
                        <option key={type.id} value={type.id} >{type.name}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="col-sm-5" />
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="bold-text">ประเภท:</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.type}</p>
                </div>
                <div className="col-sm-2">
                  <p className="bold-text">จำนวนชั่วโมง:</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.hour_amount}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="bold-text">ระยะเวลา:</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.date_amount}</p>
                </div>
                <div className="col-sm-2">
                  <p className="bold-text">ราคา</p>
                </div>
                <div className="col-sm-4">
                  <p>{parseInt(this.state.price)}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">

                  <CancelModal
                    width="80px"
                    bstrap="btn-success"
                    onClick={() => {
                      // มี 2 เงื่อนไข
                      // 1 ถ้าใน next ไม่มี เพิ่มเลย
                        // add member by
                        // - user_id
                        // - member_type_id
                      // 2 ถ้ามี ซื้อไม่ได้ ต้องรอของเก่าหมดอายุก่อน
                     this.props.addCustomerHistory({
                      customer_id:userData.id,
                      customer_type_id:this.state.id,
                     }) 
                    }}
                  >
                    ซื้อ
                  </CancelModal>
                </div>
              </div>
            </div>
          }
        </Body>
        <Footer>
          <Button width="100px" color={Constant.Blue} onClick={this.addMember}>
            ซื้อเพิ่ม
          </Button>
          <Button width="100px" bstrap="btn-danger" onClick={this.exitThisModal}>
            ปิด
          </Button>
        </Footer>
        <style jsx>{`
          .bold-text{
            font-weight:bold;
          }
          .row{
            margin-top:10px;
            margin-bottom:40px;
            p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              right: 0;
              text-align: center;
            }
          }
          @media (max-width: 576px) { 
            .row{
              margin-top:0px;
              margin-bottom:0px;
              padding-bottom:30px;
              padding-top:0px;
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


export default MemberModal;
