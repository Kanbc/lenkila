import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import moment from 'moment';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal } from '../..';

class BookingAddModal extends Component {
  // เอาไว้เก็บค่า array booking เพื่อที่จะ post booking ตอนหลังสุด
  constructor(props) {
    super(props);
    this.state = {
      customer_name:'',
      customer_tel:'',
      player_value:0,
      deposit:'',
      rebate_other:[],
      checkData:{},
    };
    this.setStateDiscount = this.setStateDiscount.bind(this);
    this.deleteStateDiscount = this.deleteStateDiscount.bind(this);
    this.editStateDiscount = this.editStateDiscount.bind(this);
    this.cancelStateDiscount = this.cancelStateDiscount.bind(this);
    this.sumValues = this.sumValues.bind(this);
    this.clearCheckData = this.clearCheckData.bind(this);

  }

  setStateDiscount = (item) => {
    this.setState({rebate_other:[...this.state.rebate_other,item]})
  }

  deleteStateDiscount = (item) => {
    this.setState({rebate_other:item})
  }

  editStateDiscount = (item) => {
    const newItem = this.state.rebate_other.map(obj => [item].find(o => o.id === obj.id) || obj);
    this.setState({rebate_other:newItem})
  }

  cancelStateDiscount = () =>{
    this.setState({rebate_other:[]})
  }

  clearCheckData = () => {
    this.setState({checkData:{},inputDefault:0})
  }

  sumValues = (obj) => {
    let result = 0
    Object.keys(obj).map(key =>{
      const value = parseInt(Object.values(obj[key])[0])
      result += value
    })
    return Number.isNaN(result) ? 0 : result
  }


  render() {
    console.log('check customer',this.props.customer)
    let player_value = this.state.player_value
    const summary = Object.keys(this.props.checkPriceData).map(key => {
      const value = this.props.checkPriceData[key]
      let result = value.reduce(function(prev, cur) {
        if(cur.type === "boost"){
          prev = parseInt(prev) + (player_value === ''? 0 : parseInt(player_value) * parseInt(cur.price))
        }else{
          prev = parseInt(prev) + parseInt(cur.price)
        }
        return parseInt(prev)
      }, 0);
      return result
    })


    const discount = this.state.rebate_other.reduce(function(prev, cur) {
      return prev + parseInt(cur.price);
    }, 0);


    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90" changeAddmore={this.props.setStateAddMore} changeCurrentModal={this.props.setStateCurrentModal} clearCheckData={this.clearCheckData} setDataBooking={this.props.setDataBooking}>
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>เบอร์โทร*</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" maxLength='10' value={this.state.customer_tel} 
              onChange={e => {
                  this.setState({ customer_tel: e.target.value })
                  if(e.target.value.length === 10){
                    let checkCustomer = this.props.customer.find(val=>val.tel === e.target.value)
                    if(checkCustomer){
                      this.setState({ customer_name: checkCustomer.name })
                      if(checkCustomer.customer_type_history.length === 0){
                        this.props.setStateSelected(customer_type_default)
                      }else{
                        // this.props.setStateSelected(checkCustomer.customer_type_history[0].name)
                      }
                    }
                    else{
                      this.setState({ customer_name: '' })
                      this.props.setStateSelected('นักเรียน')
                    }
                  }
                }
              }/>
            </div>
            <div className="col-sm-1">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" value={this.state.customer_name} onChange={e => this.setState({ customer_name: e.target.value })}/>
            </div>
            <div className="col-sm-1">
              <p>ประเภทลูกค้า</p>
            </div>
            <div className="col-sm-4">
                  <select className="form-control" id="exampleFormControlSelect1" value={this.props.selected} onChange={e => {
                    this.props.setStateSelected(e.target.value)
                    this.props.checkPrice({
                      start_time:this.props.start_time,
                      end_time:this.props.end_time,
                      field_id:this.props.field_id,
                      customer_type:e.target.value,
                    },true)
                  }
                  }>
                    {
                      this.props.customerType && this.props.customerType.map(type =>(
                        <option key={type.id} value={type.name} >{type.name}</option>
                      ))
                    }
                  </select>
            </div>
          </div>
          <div className="row bottom-border">
            <div className="col-sm-1">
              <p>จำนวนผู้เล่น</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" value={this.state.player_value} onChange={e => this.setState({ player_value: e.target.value })}/>
            </div>
            <div className="col-sm-9" />
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>จำนวนสนาม</p>
            </div>
            <div className="col-sm-2">
              <CancelModal width="120px" color={Constant.Green} onClick={()=> {
                this.props.setStateAddMore(true)
                this.props.setStateCurrentModal('#add-drag-booking')
                }} >
                จองเพิ่ม/แก้ไข
              </CancelModal>
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
                      <th scope="col">ราคารวม</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.checkPriceData && Object.keys(this.props.checkPriceData).map(key => {
                        const fieldBook = this.props.checkPriceData[key]
                        const result = fieldBook.map((value,index) => {
                          return (
                            <tr key={value.time}>
                              <th scope="row">{value.field_name}</th>
                              <td>{`${value.start_time} - ${value.end_time}`}</td>
                              { 
                                value.edit_status === 0 ?
                                value.type === 'boost'?
                                <td>{this.state.player_value === '' ? 0 : parseInt(this.state.player_value) * parseInt(value.price)}</td> : 
                                <td>{value.price}</td> :
                                <td>
                                  <input type="text" className="form-control"  onChange={e => this.setState({ checkData:{...this.state.checkData,[key]:{...this.state.checkData[key],[index]:e.target.value}} })}/>
                                </td>
                                // value={this.state.checkData[key][index]}
                            }
                            </tr>
                          );
                        })
                        return result
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-4">
              สินค้า To be done.
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">ค่าสนามรวม</p>
            </div>
            <div className="col-sm-2">
              <p>{ summary.reduce((partial_sum, a) => partial_sum + a,0)  + this.sumValues(this.state.checkData) }</p>
            </div>
            <div className="col-sm-1">
              <p className="bold-text">ส่วนลดอื่นๆ</p>
            </div>
            <div className="col-sm-2">
              <p>{Number.isNaN(discount) ? 0 : discount}</p>
            </div>
            <div className="col-sm-2">
              <div className="space-r">
                <ButtonModal color={Constant.Blue} width="120px" modalName="#discount">
                  ส่วนลด
                  <DiscountAddModal title="ส่วนลด" type="discount" fields={this.fields}
                    rebate_other={this.state.rebate_other}
                    setStateDiscount={this.setStateDiscount}
                    deleteStateDiscount={this.deleteStateDiscount}
                    editStateDiscount={this.editStateDiscount}

                  />
                </ButtonModal>
              </div>
            </div>
            {/* <div className="col-sm-2">
              <Button width="120px" bstrap="btn-success" >
                บันทีก
              </Button>
            </div> */}
            {/* <div className="col-sm-1">
              <p>ค่าสินค้า</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div> */}
            <div className="col-sm-2">
              <p className="bold-text">ต้องชำระเพิ่มอีก</p>
            </div>
            <div className="col-sm-2">
              <p>{Number.isNaN(discount) ? summary.reduce((partial_sum, a) => partial_sum + a, 0) + this.sumValues(this.state.checkData) : summary.reduce((partial_sum, a) => partial_sum + a, 0) + this.sumValues(this.state.checkData) - discount}</p>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-sm-1">
              <p className="bold-text">ส่วนลดแอพ</p>
            </div>
            <div className="col-sm-2">
              <p>-</p>
            </div> */}
            <div className="col-sm-1">
              <p className="bold-text">ค่ามัดจำ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" value={this.state.deposit} onChange={e => this.setState({ deposit: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>สร้างโดย {this.props.user && this.props.user[0] && this.props.user[0].username}</p>
            </div>
            <div className="col-sm-3">
              <p>เก็บเงิน {this.state.deposit !== '' && this.props.user && this.props.user[0] && this.props.user[0].username}</p>
            </div>
            <div className="col-sm-6 left-side">
              <div className="space-l">
                <CancelModal width="100px" bstrap="btn-success" onClick={()=> {

                  this.props.addBooking({
                    start_time:this.props.start_time,
                    end_time:this.props.end_time,
                    field_doc_id:this.props.field_id,
                    customer_type:this.props.selected,
                    reservation_date:this.props.date,
                    create_by:this.props.user[0].username,
                    cashier_by:this.props.user[0].username,
                    ...this.state,
                    rebate_other:JSON.stringify(this.state.rebate_other),
                    pay_stadium:summary.reduce((partial_sum, a) => partial_sum + a,0)  + this.sumValues(this.state.checkData),
                  })
                  this.cancelStateDiscount()
                  this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.props.setStateSelected('นักเรียน')
                  this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal('#add-drag-booking')
                  this.clearCheckData()

                }
               }>
                  บันทีก
                </CancelModal>
              </div>
              <div className="space-l">
                <CancelModal width="100px" bstrap="btn-danger" onClick={()=> {
                  this.props.setStateSelected('นักเรียน')
                  this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal('#add-drag-booking')
                  this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.clearCheckData()
                }}>
                  ยกเลิก
                </CancelModal>
              </div>
            </div>
          </div>
        </Body>
        <style jsx>
          {` 
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
            .bold-text{
              font-weight:bold;
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



export default BookingAddModal;
