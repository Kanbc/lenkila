import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux'

import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant, CancelModal } from '../..';
import {editFieldDataGift,deleteFieldDataGift} from '../../../store'


class FMGiftEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expiredAt: moment(this.props.userData.expired_at),
      name:this.props.userData.name,
      startTime: moment.duration(props.userData.start_time).asSeconds(),
      endTime: moment.duration(props.userData.end_time).asSeconds(),

      allDay:this.props.userData.is_allday === "0"?true:false,
      type:this.props.userData.type,
  
      discount_amount:this.props.userData.discount_amount,
      used_amount:this.props.userData.used_amount,
      per_person_limit_amount:this.props.userData.per_person_limit_amount,
    };
    this.allDay = this.allDay.bind(this);
  }
  componentDidMount(){
    console.log('this.props',this.props.userData.expired_at)
  }

  allDay() {
    this.setState({
      allDay: !this.state.allDay,
    });
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="50" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" defaultValue={this.props.userData.name} onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>วันสิ้นสุด</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.expiredAt}
                onChange={expiredAt => this.setState({ expiredAt })}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-4">
              <select className="custom-select" defaultValue={this.props.userData.type} onChange={e => this.setState({ type: e.target.value })}>
                <option value="0">%</option>
                <option value="1">เงิน</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" defaultValue={this.props.userData.discount_amount} onChange={e => this.setState({ discount_amount: e.target.value })}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="allday" checked={this.state.allDay} onClick={this.allDay} />
                  ทั้งวัน
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>เวลาเริ่ม</p>
            </div>
            <div className="col-sm-4">
              <TimePicker
                format={24}
                start="00:00"
                end="23:45"
                step={15}
                value={this.state.startTime}
                onChange={startTime => this.setState({ startTime })}
                disabled={this.state.allDay}
              />
            </div>
            <div className="col-sm-2">
              <p>เวลาสิ้นสุด</p>
            </div>
            <div className="col-sm-4">
              <TimePicker
                format={24}
                start="00:00"
                end="23:45"
                step={15}
                value={this.state.endTime}
                onChange={endTime => this.setState({ endTime })}
                disabled={this.state.allDay}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวน</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" defaultValue={this.props.userData.used_amount}  onChange={e => this.setState({ used_amount: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p>ครั้งต่อคน</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" defaultValue={this.props.userData.per_person_limit_amount} onChange={e => this.setState({ per_person_limit_amount: e.target.value })}/>
            </div>
          </div>
        </Body>
        <Footer>
          <CancelModal width={Constant.Buttons.default} bstrap="btn-success" 
          onClick={()=>this.props.editFieldDataGift(
            {
              id:this.props.userData.id,
              name:this.state.name,
              expired_at:this.state.expiredAt,
              type:this.state.type,
              discount_amount:this.state.discount_amount,
              start_time:this.state.startTime,
              end_time:this.state.endTime,
              used_amount:this.state.used_amount,
              per_person_limit_amount:this.state.per_person_limit_amount,
              is_allday:this.state.allDay,
            }
          )} >
            สร้าง
          </CancelModal>
          <CancelModal width={Constant.Buttons.default} color={Constant.Orange}>
            ยกเลิก
          </CancelModal>
          <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={()=>
            {
              let result = confirm("คุณต้องการลบข้อมูลส่วนนี้ใช่หรือไม่");
              if (result) {
                this.props.deleteFieldDataGift(this.props.userData.id)
              }
            }
          } >
            ลบ
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

export default  connect(null,{deleteFieldDataGift,editFieldDataGift})(FMGiftEditModal);
