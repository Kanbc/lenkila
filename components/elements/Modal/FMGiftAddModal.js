import React, { Component } from 'react';
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal } from '../..';
import {addFieldDataGift} from '../../../store'

class FMGiftAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      allDay:false,
      type:"0",
      currentDate: moment(),
      startTime: 0,
      endTime: 0,
      discount_amount:'',
      used_amount:'',
      per_person_limit_amount:'',
      day:{monday:false,tuesday:false,wednesday:false,thrday:false,friday:false,satday:false,sunday:false,holday:false},
    };
    this.allDay = this.allDay.bind(this);
    this.cancelAddUser = this.cancelAddUser.bind(this);

  }

  cancelAddUser() {
    this.setState({
      name:'',
      allDay:false,
      type:"0",
      currentDate: moment(),
      startTime: 0,
      endTime: 0,
      discount_amount:'',
      used_amount:'',
      per_person_limit_amount:'',
      day:{monday:false,tuesday:false,wednesday:false,thrday:false,friday:false,satday:false,sunday:false,holday:false},
    });
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
              <input type="text" className="form-control" id="firstname" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
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
                selected={this.state.currentDate}
                onChange={currentDate => this.setState({ currentDate })}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-4">
              <select className="custom-select" defaultValue={this.state.type} onChange={e => this.setState({ type: e.target.value })}>
                <option value="0">%</option>
                <option value="1">เงิน</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" value={this.state.discount_amount} onChange={e => this.setState({ discount_amount: e.target.value })}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="monday">
                  <input className="form-check-input" type="checkbox" id="monday" value="monday" checked={this.state.day.monday} onClick={e=> this.setState({day:{...this.state.day,monday:document.getElementById("monday").checked}})}/>
                  Mon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="tuesday">
                  <input className="form-check-input" type="checkbox" id="tuesday" value="tuesday" checked={this.state.day.tuesday}  onClick={e=> this.setState({day:{...this.state.day,tuesday:document.getElementById("tuesday").checked}})} />
                  Tue
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="wednesday">
                  <input className="form-check-input" type="checkbox" id="wednesday" value="wednesday" checked={this.state.day.wednesday} onClick={e=> this.setState({day:{...this.state.day,wednesday:document.getElementById("wednesday").checked}})}/>
                  Wed
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="thrday">
                  <input className="form-check-input" type="checkbox" id="thrday" value="thrday" checked={this.state.day.thrday} onClick={e=> this.setState({day:{...this.state.day,thrday:document.getElementById("thrday").checked}})}/>
                  Thu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="friday">
                  <input className="form-check-input" type="checkbox" id="friday" value="friday" checked={this.state.day.friday} onClick={e=> this.setState({day:{...this.state.day,friday:document.getElementById("friday").checked}})} />
                  Fri
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="satday">
                  <input className="form-check-input" type="checkbox" id="satday" value="satday" checked={this.state.day.satday} onClick={e=> this.setState({day:{...this.state.day,satday:document.getElementById("satday").checked}})}/>
                  Sat
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="sunday">
                  <input className="form-check-input" type="checkbox" id="sunday" value="sunday" checked={this.state.day.sunday} onClick={e=> this.setState({day:{...this.state.day,sunday:document.getElementById("sunday").checked}})}/>
                  Sun
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="holday">
                  <input className="form-check-input" type="checkbox" id="holday" value="holday" checked={this.state.day.holday} onClick={e=> this.setState({day:{...this.state.day,holday:document.getElementById("holday").checked}})}/>
                  Hol
                </label>
              </div>
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
                end="24:00"
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
                end="24:00"
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
              <input type="text" className="form-control" id="firstname" value={this.state.used_amount} onChange={e => this.setState({ used_amount: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p>ครั้งต่อคน</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" value={this.state.per_person_limit_amount} onChange={e => this.setState({ per_person_limit_amount: e.target.value })}/>
            </div>
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={() => {
            this.props.addFieldDataGift({
            name:this.state.name,
            expired_at:this.state.currentDate,
            type:this.state.type,
            discount_amount:this.state.discount_amount,
            start_time:this.state.startTime,
            end_time:this.state.endTime,
            used_amount:this.state.used_amount,
            per_person_limit_amount:this.state.per_person_limit_amount,
            day:this.state.day,
            is_allday:this.state.allDay,
            })
            this.cancelAddUser()
          }
           } >
            สร้าง
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


export default connect(null,{addFieldDataGift})(FMGiftAddModal);
