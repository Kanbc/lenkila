import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import { TabsLayout, Constant,Loader } from '../components';
import {connect} from 'react-redux'
import { setFieldDataSTD,editFieldDataSTD} from '../store';


class FieldManagement extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      closeTime: 0,
      openTime: 0,  
      phone:'',
      location:'',
      description:'',
      facilities:{},
    };

 
  }
  componentDidMount() {
    this.props.setFieldDataSTD();
  }
  componentWillReceiveProps(nextProps){
    console.log('nextProps',nextProps.users.facilities)
    this.setState({
      phone:nextProps.users.phone,
      description:nextProps.users.description,
      location:nextProps.users.location,
      facilities: nextProps.users.facilities && JSON.parse(nextProps.users.facilities),
      id:nextProps.users.id,
      stadium_doc_id:nextProps.users.stadium_doc_id,
      openTime: moment.duration(nextProps.users.open_time).asSeconds(),
      closeTime:moment.duration(nextProps.users.close_time).asSeconds(),

    })
  }
  
  render() {
    return (
      <TabsLayout title="ข้อมูลสนาม" tabs={Constant.FieldTabs}>
        {this.props.isLoading ? <Loader /> :
        <div className="container">
          <div className="row first-row">
            <div className="col-sm-1">
              <p>เวลาเปิด</p>
            </div>
            <div className="col-sm-2">
              <TimePicker
                format={24}
                start="00:00"
                end="23:45"
                step={15}
                value={this.state.openTime}
                onChange={openTime => this.setState({ openTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>เวลาปิด</p>
            </div>
            <div className="col-sm-2">
              <TimePicker
                format={24}
                start="00:00"
                end="23:45"
                step={15}
                value={this.state.closeTime}
                onChange={closeTime => this.setState({ closeTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="tel" defaultValue={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-sm-12">
              <p>แนะนำตัว (50 Word)</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea className="form-control" rows="2" id="about" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
            </div>
          </div>
          <div className="row third-row">
            <div className="col-sm-12">
              <p>การเดินทาง</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea className="form-control" rows="2" id="transportation" value={this.state.location} onChange={e => this.setState({ location: e.target.value })} />
            </div>
          </div>
          <div className="row fourt-row">
            <div className="col-sm-12">
              <p>อำนวยความสะดวก</p>
            </div>
          </div>
          <div className="row five-row">
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={this.state.facilities.option1} onClick={e=> this.setState({facilities:{...this.state.facilities,option1:document.getElementById("inlineCheckbox1").checked}})} />
                  อุปกรณ์ให้เช่า
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked={this.state.facilities.option2} onClick={e=> this.setState({facilities:{...this.state.facilities,option2:document.getElementById("inlineCheckbox2").checked}})}/>
                  อุปกรณ์ขาย
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox3">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"  checked={this.state.facilities.option3} onClick={e=> this.setState({facilities:{...this.state.facilities,option3:document.getElementById("inlineCheckbox3").checked}})}/>
                  เสื้อเอี๊ยม
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox4">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"  checked={this.state.facilities.option4} onClick={e=> this.setState({facilities:{...this.state.facilities,option4:document.getElementById("inlineCheckbox4").checked}})}/>
                  อุปกรณ์สนาม
                </label>
              </div>
            </div>
          </div>
          <div className="row six-row">
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox5">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5"  checked={this.state.facilities.option5} onClick={e=> this.setState({facilities:{...this.state.facilities,option5:document.getElementById("inlineCheckbox5").checked}})}/>
                  กรรมการ
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6"  checked={this.state.facilities.option6} onClick={e=> this.setState({facilities:{...this.state.facilities,option6:document.getElementById("inlineCheckbox6").checked}})}/>
                  ห้องอาบน้ำ
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox7">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7"  checked={this.state.facilities.option7} onClick={e=> this.setState({facilities:{...this.state.facilities,option7:document.getElementById("inlineCheckbox7").checked}})}/>
                  ผ้าเช็ดตัว
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox8">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8" checked={this.state.facilities.option8} onClick={e=> this.setState({facilities:{...this.state.facilities,option8:document.getElementById("inlineCheckbox8").checked}})}/>
                  สบู่
                </label>
              </div>
            </div>
          </div>
          <div className="row seven-row">
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox9">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="option9" checked={this.state.facilities.option9} onClick={e=> this.setState({facilities:{...this.state.facilities,option9:document.getElementById("inlineCheckbox9").checked}})}/>
                  ตู้ล็อคเกอร์
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox10">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="option10" checked={this.state.facilities.option10} onClick={e=> this.setState({facilities:{...this.state.facilities,option10:document.getElementById("inlineCheckbox10").checked}})}/>
                  ห้องแอร์
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox11">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="option11" checked={this.state.facilities.option11} onClick={e=> this.setState({facilities:{...this.state.facilities,option11:document.getElementById("inlineCheckbox11").checked}})}/>
                  Free-Wifi
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox12">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox12" value="option12" checked={this.state.facilities.option12} onClick={e=> this.setState({facilities:{...this.state.facilities,option12:document.getElementById("inlineCheckbox12").checked}})}/>
                  แอลกอฮอล์
                </label>
              </div>
            </div>
          </div>
          <div className="row eight-row">
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox13">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox13" value="option13" checked={this.state.facilities.option13} onClick={e=> this.setState({facilities:{...this.state.facilities,option13:document.getElementById("inlineCheckbox13").checked}})}/>
                  ของกิน
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox14">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox14" value="option14" checked={this.state.facilities.option14} onClick={e=> this.setState({facilities:{...this.state.facilities,option14:document.getElementById("inlineCheckbox14").checked}})}/>
                  ที่จอดรถ
                </label>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox15">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox15" value="option15" checked={this.state.facilities.option15} onClick={e=> this.setState({facilities:{...this.state.facilities,option15:document.getElementById("inlineCheckbox15").checked}})}/>
                  Arcade
                </label>
              </div>
            </div>
            <div className="col-sm-3" />
          </div>
          <div className="row nine-row">
            <SaveButton editFieldDataSTD={this.props.editFieldDataSTD} 
            id={this.state.id}
            stadium_doc_id={this.state.stadium_doc_id}
            phone={this.state.phone}
            description={this.state.description}
            location={this.state.location}
            facilities={this.state.facilities}
            openTime={this.state.openTime}
            closeTime={this.state.closeTime}
            list={this.state.list}
             />
          </div>
        </div>
        }
        <style jsx>
          {`
            .first-row{
              margin-top:20px;
              p{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                font-weight: bold;
              }
              .phone-tags{
                height:38px;
                span{
                  margin-right:15px;
                }
              }
            }
            .second-row{
              margin-top:1.2rem;
              font-weight: bold;
            }
            .third-row{
              margin-top:1.2rem;
              font-weight: bold;
            }
            .fourt-row{
              margin-top:1.2rem;
              font-weight: bold;
            }
            .nine-row{
              margin-top:40px;
            }
          `}
        </style>
      </TabsLayout>
    );
  }
}

const SaveButton=({id,stadium_doc_id,phone,description,location,facilities,editFieldDataSTD,openTime,closeTime})=> {
  return (
    <button type="button" className="btn btn-primary" onClick={()=>editFieldDataSTD({
      id:id,
      stadium_doc_id:stadium_doc_id,
      phone:phone,
      description:description,
      location:location,
      facilities:facilities,
      open_time:openTime,
      close_time:closeTime,
    })} >บันทึก
      <style jsx>{`
        button{
          width:100px;
          margin-left:auto;
          margin-right:auto;
          background-color: #4A90E2;
        }
      `}
      </style>
    </button>
  );
}

function mapStateToProps(state) {
  return {
    users: state.field_managementStadiumSaga.fieldsSTD,
    isLoading:state.field_managementStadiumSaga.isLoading,
  }
}

export default connect(mapStateToProps,{setFieldDataSTD,editFieldDataSTD})(FieldManagement);
