import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal } from '../..';

class CustAddModal extends Component {
  state = {
    date_of_birth: moment(),
    gender:'ชาย',
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>ชื่อเล่น*</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" value={this.state.nick_name} onChange={e => this.setState({ nick_name: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>เบอร์โทรศัพท์*</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="lastname" value={this.state.tel} onChange={e => this.setState({ tel: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p>วันเกิด</p>
            </div>
            <div className="col-sm-2">
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
          <div className="row">
            <div className="col-sm-1">
              <p>ชื่อจริง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="user-id" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p>นามสกุล</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="password" value={this.state.surname} onChange={e => this.setState({ surname: e.target.value })}/>
            </div>
            <div className="col-sm-2">
              <p>เพศ</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" defaultValue="0" value={this.state.gender} onChange={e => this.setState({ gender: e.target.value })}>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-11">
              <textarea className="form-control" id="note" rows="3" value={this.state.note} onChange={e => this.setState({ note: e.target.value })}/>
            </div>
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={()=>{
            this.props.addCustomer(this.state)
            this.setState({nick_name:'',tel:'',date_of_birth:moment(),name:'',surname:'',gender:"ชาย",note:''})
          }
          } >
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

export default CustAddModal;
