import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal } from '../..';

class BoostAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boostType: 'buffet', 
      ...this.props.item,
      price:parseInt(this.props.item.price),
      isEdit:false,
    };

    this.changeBoostType = this.changeBoostType.bind(this);
    this.setEditFalse = this.setEditFalse.bind(this);
  }

  componentDidMount(){
    this.setState({isEdit:false})
  }

  changeBoostType(el) {
    this.setState({
      boostType: el.target.value,
    });
  }

  setEditFalse() {
    this.setState({
      isEdit: false,
    });
  }

  

  render() {
    console.log('this.state',this.state)
    console.log('this.props',this.props)
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90" changeAddmore={this.props.setStateAddMore} changeCurrentModal={this.props.setStateCurrentModal} setDataBooking={this.props.setDataBooking} setEditFalse={this.setEditFalse}>
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" onChange={this.changeBoostType} defaultValue={this.state.boostType}>
                <option value="buffet">Buffet</option>
                <option value="boost">Boosts</option>
              </select>
            </div>
            <div className="col-sm-9" />
          </div>
          {!(this.state.boostType == 'buffet') && <p className="nonote">บริการนี้ยังไม่เปิดให้บริการ</p>}
          {this.state.boostType == 'buffet' &&
          <div>
          <div className={this.state.boostType === 'buffet' ? 'row d-none' : 'row'}>
            <div className="col-sm-1">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>เบอร์โทร*</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>ประเภทลูกค้า</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="row bottom-border">
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1' : 'col-sm-1 d-none'}>
              <p>ราคาคนละ</p>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-2' : 'col-sm-2 d-none'}>
              <input type="text" className="form-control" id="firstname" value={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-6' : 'col-sm-9'}>
              <div className={this.state.boostType === 'buffet' ? 'space-r d-none' : 'space-r'}>
                <Button width="120px" color={Constant.Blue}>
                  ดูข้อมูลลูกค้า
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>จำนวนสนาม</p>
            </div>
            <div className="col-sm-2">
              <CancelModal color={Constant.Green} onClick={()=> {
                  this.props.setStateAddMore(true)
                  this.props.setStateCurrentModal(`#${this.props.type}`)
                  this.setState({isEdit:true})
                  
                }} >
                เลือกสนามเพิ่ม/แก้ไข
              </CancelModal>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1 d-none' : 'col-sm-1'}>
              <p>ค่า Com.</p>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1 d-none' : 'col-sm-1'}>
              <input type="text" className="form-control red-text" id="firstname" defaultValue="20%" />
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1 d-none' : 'col-sm-1'}>
              <input type="text" className="form-control red-text" id="firstname" defaultValue="200" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="table-frame">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">สนาม</th>
                      <th scope="col">เวลา</th>
                      <th scope="col">ราคา/คน</th>
                    </tr>
                  </thead>
                  <tbody className={this.state.boostType === 'buffet' ? '' : 'red-text'}>
                    <tr>
                      <th scope="row">{this.props.boostData.field_name ? this.props.boostData.field_name : this.state.field_doc_name}</th>
                      <td>{this.props.boostData.start_time ? `${this.props.boostData.start_time} - ${this.props.boostData.end_time}` : `${this.state.start_time.split(' ')[1]} - ${this.state.end_time.split(' ')[1]}`}</td>
                      <td>{this.state.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-4" />
          </div>
          <div className="row">
            <div className="col-sm-3">
              {/* <p>สร้างโดย เอ</p> */}
            </div>
            <div className="col-sm-3" />
            <div className="col-sm-6 left-side">
              <div className="space-l">
                <CancelModal width="120px" bstrap="btn-danger" 
                  onClick={()=> {
                    this.props.setStateAddMore(false)
                    this.props.setStateCurrentModal('#add-drag-booking')
                    this.props.setDataBooking({
                      checkPriceData:[],
                      paramsCheckprice:[],
                      paramsFieldDocList:[],
                      editFieldDocList:[],
                      editAddmore:false
                  })
                  this.setState({isEdit:false})

                  this.props.deleteBoost(this.state.id,this.props.date)
                }}
                >
                  ลบ
                </CancelModal>
              </div>
              <div className={this.state.boostType === 'buffet' ? 'space-l' : 'space-l d-none'}>
                <CancelModal width="120px" bstrap="btn-danger" onClick={()=> {
                  this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal('#add-drag-booking')
                  this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.setState({isEdit:false})

                }}
                >
                  ยกเลิก
                </CancelModal>
              </div>
              <div className="space-l">
                <CancelModal width="120px" bstrap="btn-success" onClick={()=> {
                  this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal('#add-drag-booking')
                  this.props.editBoost({...this.state,start:this.props.boostData.start_time,end:this.props.boostData.end_time,isEdit:this.state.isEdit,date:this.props.date,fieldId:this.props.boostData.field_id})
                  this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.props.setStateBoostData({start_time:'',end_time:'',field_name:''})
                  this.setState({isEdit:false})

                }}>
                  บันทึก
                </CancelModal>
              </div>
            </div>
          </div>
          </div>
          }
        </Body>
        <style jsx>
          {` 
            .nonote{
              text-align: center;
              color: ${Constant.Grey};
              height:300px;
            }
            .row {
              margin-top: 10px;
              margin-bottom: 20px;
              p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                text-align: center;
              }
            }
            .lenkila_time_picker {
              font-size:100px;
              .react-datepicker__time-container {
                .react-datepicker__time {
                  .react-datepicker__time-box {
                    ul.react-datepicker__time-list {
                      padding:0;
                      background-color:black;      
                    }
                  }
                }
              }
            }
            .table-frame{
              display: block;
              height: 170px;
              overflow-y: scroll;
              width: 100%;
            }
            .red-text{
              color: ${Constant.Red}
            }
            .left-side{
              text-align:right;
            }
            .space-r{
              display: inline-block;
              margin-right:10px;
            }
            .space-l{
              display: inline-block;
              margin-left:10px;
            }
            .bottom-border {
              border-bottom: 1px solid #bdc3c7;
              padding-bottom: 35px;
            }
            @media (max-width: 576px) {
              .row {
                margin-top: 0;
                margin-bottom: 0;
                p {
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

export default BoostAddModal;
