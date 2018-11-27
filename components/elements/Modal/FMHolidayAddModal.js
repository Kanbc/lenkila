import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal,Button } from '../..';
import {addFieldDataHoliday} from '../../../store'
import {connect} from 'react-redux'

class FMHolidayAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      currentDate2: moment(),
      startTime: moment(),
      endTime: moment(),
      name:'',
      flag:'0',
    };
    this.cancelAddUser = this.cancelAddUser.bind(this);
    this.addNewField = this.addNewField.bind(this);
  }

  cancelAddUser() {
    this.setState({
      name: '',
      flag: '0',
    });
  }
  

  addNewField() {
    this.props.addFieldDataHoliday({
      name:this.state.name,
      end_date:this.state.currentDate2,
      end_time:this.state.endTime,
      start_date:this.state.currentDate,
      start_time:this.state.startTime,
      flag:this.state.flag,
    });
    this.cancelAddUser();
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="50" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อวันหยุด</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>เปิดทำการ</p>
            </div>
            <div className="col-sm-4">
              <select className="custom-select" defaultValue={this.state.flag} id="open-close" onChange={e => this.setState({ flag: e.target.value })}>
                <option value="0">เปิด</option>
                <option value="1">ปิด</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>วันที่เริ่ม</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.currentDate}
                onChange={currentDate => this.setState({currentDate})}
                className="form-control"
              />
            </div>
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
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>วันสิ้นสุด</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.currentDate2}
                onChange={currentDate2 => this.setState({ currentDate2 })}
                className="form-control"
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
              />
            </div>
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={() => this.addNewField()}>
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
const mapStateToProps=(state)=> (
  {users: state.users,}
)

export default connect(mapStateToProps,{addFieldDataHoliday})(FMHolidayAddModal);
