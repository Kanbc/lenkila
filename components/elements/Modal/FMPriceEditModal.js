import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux'
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, Button, Constant, CancelModal } from '../..';
import {editFieldDataPrice,deleteFieldDataPrice} from '../../../store'
import {setDataPrice} from '../../../sagas/field_managementPriceSaga'
class FMPriceEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,

      ...this.props.userData,
      color:this.props.userData.color,
      startTime: moment.duration(props.userData.start_time).asSeconds(),
      endTime: moment.duration(props.userData.end_time).asSeconds(),
      is_mon:this.props.userData.is_mon==="1"?true:false,
      is_tue:this.props.userData.is_tue==="1"?true:false,
      is_wed:this.props.userData.is_wed==="1"?true:false,
      is_thu:this.props.userData.is_thu==="1"?true:false,	
      is_fri:this.props.userData.is_fri==="1"?true:false,	
      is_sat:this.props.userData.is_sat==="1"?true:false,	
      is_sun:this.props.userData.is_sun==="1"?true:false,	
      is_hol:this.props.userData.is_hol==="1"?true:false,
      vip_type:this.props.userData.vip_type?JSON.parse(this.props.userData.vip_type):{},
    };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
    this.setColorState = this.setColorState.bind(this);
  }

  componentDidMount(){
    this.props.setDataPrice({colorPriceEdit:this.props.userData.color})
  }

  editForm() {
    this.setState({
      isEdit: true,
    });
  }

  setColorState(color){
    this.setState({color:color})
  }

  cancelEditForm() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    const isDivide = this.props.fields.length !== 0 && this.props.fields.find(val => val.id === this.props.fieldId)

    let button1 = null;
    let button2 = null;
    let button3 = null;
    if (this.state.isEdit === true) {
      button1 = <Button width={Constant.Buttons.default} bstrap="btn-success" >บันทึก</Button>;
      button2 = <CancelModal width={Constant.Buttons.default} color={Constant.Orange}>ยกเลิก</CancelModal>;
    } else {
      button1 = <CancelModal width={Constant.Buttons.default} bstrap="btn-success" 
      onClick={() => this.props.editFieldDataPrice({
            id:this.props.userData.id,
            field_id:this.props.userData.field_id,
            ...this.state,
            color:this.state.color,
      })
    } >บันทึก</CancelModal>;
      button2 = <CancelModal width={Constant.Buttons.default} color={Constant.Orange}>ยกเลิก</CancelModal>;
      button3 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={() => this.props.deleteFieldDataPrice(this.props.userData.id)}>ลบ</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90" >
        <Body>
        <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="is_mon"  checked={this.state.is_mon} onClick={e=> this.setState({is_mon:!this.state.is_mon})}/>
                  Mon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_tue" checked={this.state.is_tue} onClick={e=> this.setState({is_tue:!this.state.is_tue})}/>
                  Tue
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_wed"  checked={this.state.is_wed} onClick={e=> this.setState({is_wed:!this.state.is_wed})}/>
                  Wed
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_thu"  checked={this.state.is_thu} onClick={e=> this.setState({is_thu:!this.state.is_thu})}/>
                  Thu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_fri"  checked={this.state.is_fri} onClick={e=> this.setState({is_fri:!this.state.is_fri})}/>
                  Fri
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_sat"  checked={this.state.is_sat} onClick={e=> this.setState({is_sat:!this.state.is_sat})}/>
                  Sat
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_sun"  checked={this.state.is_sun} onClick={e=> this.setState({is_sun:!this.state.is_sun})}/>
                  Sun
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="is_hol"  checked={this.state.is_hol} onClick={e=> this.setState({is_hol:!this.state.is_hol})}/>
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
                end="23:45"
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
                end="23:45"
                step={15}
                value={this.state.endTime}
                onChange={endTime => this.setState({ endTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>สี</p>
            </div>
            <div className="col-sm-1">
              <ColorButton width="100%" userDatacolor={this.props.userData.color} setColorState={this.setColorState}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ทั่วไป</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={parseInt(this.state.normal_class)} onChange={e => this.setState({ normal_class:e.target.value })}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักเรียน</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={parseInt(this.state.student_class)} onChange={e => this.setState({ student_class:e.target.value })}/>
              <input type="number" className="form-control" placeholder="ครึ่ง" value={parseInt(this.state.student_class_half)} onChange={e => this.setState({ student_class_half:e.target.value })} disabled={isDivide && isDivide.is_dividable === '0'}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักศึกษา</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={parseInt(this.state.college_class)} onChange={e => this.setState({ college_class:e.target.value })}/>
              <input type="number" className="form-control" placeholder="ครึ่ง" value={parseInt(this.state.college_class_half)} onChange={e => this.setState({ college_class_half:e.target.value })} disabled={isDivide && isDivide.is_dividable === '0'}/>
              </div>
            </div>
            <div className="col-sm-1">
              <p>สูงวัย</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
              <input type="number" className="form-control" placeholder="เต็ม" value={parseInt(this.state.aged_class)} onChange={e => this.setState({ aged_class:e.target.value })}/>
              <input type="number" className="form-control" placeholder="ครึ่ง" value={parseInt(this.state.aged_class_half)} onChange={e => this.setState({ aged_class_half:e.target.value })} disabled={isDivide && isDivide.is_dividable === '0'}/>
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
          {button1}
          {button2}
          {button3}
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
    colorPriceEdit: state.field_managementPriceSaga.colorPriceEdit,
    fieldId: state.field_managementPriceSaga.fieldId,
  }
}


export default connect(mapStateToProps,{deleteFieldDataPrice,editFieldDataPrice,setDataPrice})(FMPriceEditModal);
