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
      vip_type:{},
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
    });
  }


  render() {
    const isDivide = this.props.fields.length !== 0 && this.props.fields.find(val => val.id === this.props.fieldId)
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
              <input type="number" className="form-control" placeholder="เต็ม" value={this.state.normal_class} onChange={e => this.setState({ normal_class:e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักเรียน</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={this.state.student_class} onChange={e => this.setState({ student_class:e.target.value })}/>
              <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.student_class_half} onChange={e => this.setState({ student_class_half:e.target.value })} disabled={isDivide && isDivide.is_dividable === '0'}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักศึกษา</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={this.state.college_class } onChange={e => this.setState({ college_class:e.target.value })}/>
              <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.college_class_half} onChange={e => this.setState({ college_class_half:e.target.value })} disabled={isDivide && isDivide.is_dividable === '0'}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>สูงวัย</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={this.state.aged_class} onChange={e => this.setState({ aged_class:e.target.value })}/>
              <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.aged_class_half} onChange={e => this.setState({ aged_class_half:e.target.value })} disabled={isDivide && isDivide.is_dividable === '0'}/>
              </div>
            </div>
          </div>
          <div className="viptype">
            {this.props.customerType && this.props.customerType.map((value,index) => 
              {
                let keyName = value.name
                let keyNameHalf = `${value.name}_half`
                return(
                  <React.Fragment>
                    <div className="col-sm-1">
                      <p>{value.name}</p>
                    </div>
                    <div className="col-sm-2 field-and-button">
                      <div className="input-group">
                        <input type="number" className="form-control" placeholder="เต็ม" value={this.state.vip_type[keyName]} onChange={e => this.setState({ vip_type:{...this.state.vip_type,[keyName]:e.target.value} })}/>
                        <input type="number" className="form-control" placeholder="ครึ่ง" value={this.state.vip_type[keyNameHalf]} onChange={e => this.setState({ vip_type:{...this.state.vip_type,[keyNameHalf]:e.target.value} })} disabled={isDivide && isDivide.is_dividable === '0'}/>
                      </div>
                    </div>
                  </React.Fragment>
                )
              }
              )}
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={()=> {
            this.props.addFieldDataPrice({
            field_id:this.props.fieldId,
            color:this.props.colorPrice,
            ...this.state,
          })
          this.cancelAddUser()
          }
            } >
            สร้าง
          </CancelModal>
        </Footer>
        <style jsx>{`
          .row{
            margin-top:35px;
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
          .viptype{
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          
            p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              right: 0;
              text-align: center;
              font-weight: normal;
              margin-top: 15px;
            }
            .field-and-button input{
              width:48%;
              display:inline-block;
              margin-top:35px;
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
