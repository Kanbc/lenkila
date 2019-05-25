import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, CancelModal, Button, Constant } from '../..';

class CustTypeEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisableTime: true,
      numberOfDays: 0,
      name:this.props.userData.name,
      type:this.props.userData.type,
      date_amount:this.props.userData.date_amount,
      hour_amount:this.props.userData.hour_amount,
      price:this.props.userData.price,
      color:this.props.userData.color,
      note:this.props.userData.note,
      id:this.props.userData.id,
    };

    this.cancelDisableTime = this.cancelDisableTime.bind(this);
    this.setColorCustomerType = this.setColorCustomerType.bind(this);
  }

  setColorCustomerType = (color) => {
    return this.setState({color:color})
  }


  cancelDisableTime(event) {
    if (event.target.value === 'ถาวร') {
      this.setState({
        numberOfDays: 0,
        hourDisabled:true,
      });
    } else if (event.target.value === 'รายเดือน') {
      this.setState({
        numberOfDays: 30,
        hourDisabled:true,
      });
    } else if (event.target.value === 'รายปี') {
      this.setState({
        numberOfDays: 365,
        hourDisabled:true,
      });
    } else {
      this.setState({
        numberOfDays: 0,
        hourDisabled:false,

      });
    }
  }

  render() {
    const userDetail = this.props.userData;
    let button1 = null;
    let button2 = null;
    let button3 = null;

      button1 = <CancelModal width={Constant.Buttons.default} bstrap="btn-success" onClick={()=>this.props.editCustomerType(this.state)} >บันทึก</CancelModal>;
      button2 = <CancelModal width={Constant.Buttons.default} color={Constant.Orange} >ยกเลิก</CancelModal>;
      button3 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={()=>
        {
          let result = confirm("คุณต้องการลบข้อมูลส่วนนี้ใช่หรือไม่");
          if (result) {
            this.props.deleteCustomerType(userDetail.id)
          }
        }
      } 
        >ลบ</CancelModal>;
  
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" defaultValue={this.state.name} onChange={(e)=>this.setState({ name: e.target.value })} disabled={this.state.type==="default"} />
            </div>
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" defaultValue={this.state.type} disabled={this.state.type==="default"} value={this.state.type} onChange={(e) =>{
                { this.cancelDisableTime(e); }
                this.setState({ type: e.target.value })
                this.setState({ date_amount: e.target.value==="ถาวร" ? 0 : e.target.value==="ชั่วโมง"? 0 : e.target.value==="รายเดือน" ? 30 : 365  })
              } }>
                <option value="ถาวร">ถาวร</option>
                <option value="ชั่วโมง">ชั่วโมง</option>
                <option value="รายเดือน">รายเดือน</option>
                <option value="รายปี">รายปี</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p>วันหมดอายุ (วัน)</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="nickname" defaultValue={this.state.date_amount}  value={this.state.date_amount} disabled />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวนชั่วโมง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" defaultValue={this.state.hour_amount} onChange={e => this.setState({ hour_amount: e.target.value })} disabled={this.state.type!=="ชั่วโมง" || this.state.type==="default"} />
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" defaultValue={parseInt(this.state.price)} onChange={e => this.setState({ price: e.target.value })} disabled={this.state.type==="default"} />
            </div>
            <div className="col-sm-2">
              <p>สี</p>
            </div>
            <div className="col-sm-2">
              <ColorButton width="100%" userDatacolor={this.state.color} setStateCustomerType={this.setColorCustomerType} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" defaultValue={this.state.note} onChange={e => this.setState({ note: e.target.value })} disabled={this.state.type==="default"} />
            </div>
          </div>
        </Body>
        <Footer>
          {button1}
          {button2}
          {this.state.type !=="default" && button3 }
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:40px;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
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

export default CustTypeEditModal;
