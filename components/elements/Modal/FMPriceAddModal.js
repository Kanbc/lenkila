import React, { Component } from 'react';
import {connect} from 'react-redux'

import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, Button,CancelModal } from '../..';
import {addFieldDataPrice} from '../../../store'

class FMPriceAddModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
      endTime: 0,
      is_mon:false,
      is_tue:false,
      is_wed:false,
      is_thu:false,	
      is_fri:false,	
      is_sat:false,	
      is_sun:false,	
      is_hol:false,
      normal_class:null,
      student_class:null,
      student_class_half:null,	
      college_class:null,	
      college_class_half:null,	
      aged_class:null,	
      aged_class_half:null,	
      vip_class:null,	
      vip_class_half:null,	
      silver_class:null,	
      silver_class_half:null,	
      gold_class:null,	
      gold_class_half:null,	
      one_class:null,	
      one_class_half:null,	
      two_class:null,	
      two_class_half:null,	
      three_class:null,	
      three_class_half:null,
    };

    this.cancelAddUser = this.cancelAddUser.bind(this);
  }

  cancelAddUser() {
    this.setState({
      startTime: 0,
      endTime: 0,
      is_mon:false,
      is_tue:false,
      is_wed:false,
      is_thu:false,	
      is_fri:false,	
      is_sat:false,	
      is_sun:false,	
      is_hol:false,
      normal_class:'',
      student_class:'',
      student_class_half:'',	
      college_class:'',	
      college_class_half:'',	
      aged_class:'',	
      aged_class_half:'',	
      vip_class:'',	
      vip_class_half:'',	
      silver_class:'',	
      silver_class_half:'',	
      gold_class:'',	
      gold_class_half:'',	
      one_class:'',	
      one_class_half:'',	
      two_class:'',	
      two_class_half:'',	
      three_class:'',	
      three_class_half:'',
    });
  }


  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90" >
        <Body>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="is_mon"  checked={this.state.is_mon} onClick={e=> this.setState({is_mon:document.getElementById("is_mon").checked})}/>
                  Mon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_tue" checked={this.state.is_tue} onClick={e=> this.setState({is_tue:document.getElementById("is_tue").checked})}/>
                  Tue
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_wed"  checked={this.state.is_wed} onClick={e=> this.setState({is_wed:document.getElementById("is_wed").checked})}/>
                  Wed
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_thu"  checked={this.state.is_thu} onClick={e=> this.setState({is_thu:document.getElementById("is_thu").checked})}/>
                  Thu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_fri"  checked={this.state.is_fri} onClick={e=> this.setState({is_fri:document.getElementById("is_fri").checked})}/>
                  Fri
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_sat"  checked={this.state.is_sat} onClick={e=> this.setState({is_sat:document.getElementById("is_sat").checked})}/>
                  Sat
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_sun"  checked={this.state.is_sun} onClick={e=> this.setState({is_sun:document.getElementById("is_sun").checked})}/>
                  Sun
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_hol"  checked={this.state.is_hol} onClick={e=> this.setState({is_hol:document.getElementById("is_hol").checked})}/>
                  Hol
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>เวลาที่เริ่ม</p>
            </div>
            <div className="col-sm-2">
              <TimePicker
                format={24}
                start="00:00"
                end="24:00"
                step={15}
                value={this.state.startTime}
                onChange={startTime => this.setState({ startTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>เวลาสิ้นสุด</p>
            </div>
            <div className="col-sm-2">
              <TimePicker
                format={24}
                start="00:00"
                end="24:00"
                step={15}
                value={this.state.endTime}
                onChange={endTime => this.setState({ endTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>สี</p>
            </div>
            <div className="col-sm-1">
              <ColorButton width="100%" typeColor={"add"} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ทั่วไป</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.normal_class} onChange={e => this.setState({ normal_class: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักเรียน</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.student_class} onChange={e => this.setState({ student_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.student_class_half} onChange={e => this.setState({ student_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักศึกษา</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.college_class} onChange={e => this.setState({ college_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.college_class_half} onChange={e => this.setState({ college_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>สูงวัย</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.aged_class} onChange={e => this.setState({ aged_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.aged_class_half} onChange={e => this.setState({ aged_class_half: e.target.value })}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>VIP</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.vip_class} onChange={e => this.setState({ vip_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.vip_class_half} onChange={e => this.setState({ vip_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>Silver</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.silver_class} onChange={e => this.setState({ silver_class: e.target.value })} />
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.silver_class_half} onChange={e => this.setState({ silver_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>Gold</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.gold_class} onChange={e => this.setState({ gold_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.gold_class_half} onChange={e => this.setState({ gold_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>1</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.one_class} onChange={e => this.setState({ one_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.one_class_half} onChange={e => this.setState({ one_class_half: e.target.value })}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>2</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.two_class} onChange={e => this.setState({ two_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.two_class_half} onChange={e => this.setState({ two_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>3</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" value={this.state.three_class} onChange={e => this.setState({ three_class: e.target.value })}/>
                <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.three_class_half} onChange={e => this.setState({ three_class_half: e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-6" />
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={()=> {
            this.props.addFieldDataPrice({
            field_id:this.props.fieldId,
            is_mon:this.state.is_mon,
            is_tue:this.state.is_tue,
            is_wed:this.state.is_wed,
            is_thu:this.state.is_thu,	
            is_fri:this.state.is_fri,	
            is_sat:this.state.is_sat,	
            is_sun:this.state.is_sun,	
            is_hol:this.state.is_hol,
            start_time:this.state.startTime,
            end_time:this.state.endTime,
            color:this.props.colorPrice,
            normal_class:this.state.normal_class,
            student_class:this.state.student_class,
            student_class_half:this.state.student_class_half,	
            college_class:this.state.college_class,	
            college_class_half:this.state.college_class_half,	
            aged_class:this.state.aged_class,	
            aged_class_half:this.state.aged_class_half,	
            vip_class:this.state.vip_class,	
            vip_class_half:this.state.vip_class_half,	
            silver_class:this.state.silver_class,	
            silver_class_half:this.state.silver_class_half,	
            gold_class:this.state.gold_class,	
            gold_class_half:this.state.gold_class_half,	
            one_class:this.state.one_class,	
            one_class_half:this.state.one_class_half,	
            two_class:this.state.two_class,	
            two_class_half:this.state.two_class_half,	
            three_class:this.state.three_class,	
            three_class_half:this.state.three_class_half,
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
            .field-and-button input{
              width:48%;
              display:inline-block;
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


function mapStateToProps(state) {
  return {
    colorPrice: state.field_managementPriceSaga.colorPrice,
    fieldId: state.field_managementPriceSaga.fieldId,
  }
}

export default connect(mapStateToProps,{addFieldDataPrice})(FMPriceAddModal);
