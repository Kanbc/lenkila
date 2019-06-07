import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, CancelModal, Button } from '../..';

class CustTypeAddModal extends Component {
  constructor(props) {
    console.log('props',props)
    super(props);
    this.state = { hourDisabled:true,numberOfDays: 0 ,type:"ถาวร",color:'#CA0813' };
    
    this.cancelDisableTime = this.cancelDisableTime.bind(this);
    this.setColorCustomerType = this.setColorCustomerType.bind(this);
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

  setColorCustomerType = (color) => {
    return this.setState({color:color})
  }


  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" defaultValue={this.state.type} value={this.state.type} onChange={(e) => {
                this.setState({ type: e.target.value })
                { this.cancelDisableTime(e); }
              }
              }>
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
              <input type="text" className="form-control" id="nickname" value={this.state.numberOfDays > 0 ? this.state.numberOfDays : ''} disabled />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวนชั่วโมง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="hour_amount" value={this.state.hour_amount} onChange={e => this.setState({ hour_amount: e.target.value })} disabled={this.state.hourDisabled}/>
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="price" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>สี</p>
            </div>
            <div className="col-sm-2">
              <ColorButton width="100%" setStateCustomerType={this.setColorCustomerType} typeColor="add" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" value={this.state.note} onChange={e => this.setState({ note: e.target.value })} />
            </div>
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={()=>{   
            this.props.addCustomerType({
              name:this.state.name,
              price:this.state.price,
              hour_amount:this.state.hour_amount,
              date_amount:this.state.numberOfDays,
              note:this.state.note,
              type:this.state.type,
              color:this.state.color,
            })
            this.setState({name:'',price:'',hour_amount:'',date_amount:'',note:'',type:'ถาวร',color:''})
          }
          }
          >
            สร้าง
          </CancelModal>
          <CancelModal width="100px" bstrap="btn-danger" >
            ยกเลิก
          </CancelModal>
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

export default CustTypeAddModal;
