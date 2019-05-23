import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal, CustBookingModal, CustListBookingModal } from '../..';

class BookingEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.booking,
      rebate_other:JSON.parse(this.props.booking.rebate_other),
      price_field:JSON.parse(this.props.booking.price_field),
      checkData:{},
      inputDefault : false,
    };
    this.setStateDiscount = this.setStateDiscount.bind(this);
    this.setStatePrice = this.setStatePrice.bind(this);
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

  setStatePrice = (item) => {
    this.setState({price_field:item})
  }

  sumValues = (obj) => {
    let result = 0
    Object.keys(obj).map(key =>{
      const value = 0
      Object.values(obj[key]).map(val => {
        result += val
      })
      // const value = parseInt(Object.values(obj[key])[0])
    })
    return Number.isNaN(result) ? 0 : result
  }

  componentWillReceiveProps(nextProps){
    if(this.props.priceFieldMore !== nextProps.priceFieldMore){
      this.setStatePrice(nextProps.priceFieldMore)
    }
    if(this.props.booking !== nextProps.booking){
      this.setState({
        ...nextProps.booking,
        rebate_other:JSON.parse(nextProps.booking.rebate_other),
        price_field:JSON.parse(nextProps.booking.price_field),
      })
    }
    
  }

  


  render() {
    
    const summary = Object.keys(this.state.price_field).map(key => {
      const value = this.state.price_field[key]
      let result = value.reduce(function(prev, cur) {
        return parseInt(prev) + parseInt(cur.price);
      }, 0);
      return result
    })

    const discount = this.state.rebate_other.reduce(function(prev, cur) {
      return prev + parseInt(cur.price);
    }, 0);
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90" changeAddmore={this.props.setStateAddMore} changeCurrentModal={this.props.setStateCurrentModal} setDataBooking={this.props.setDataBooking} clearCheckData={this.clearCheckData}>
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" value={this.state.customer_name} onChange={e => this.setState({ customer_name: e.target.value })}/>
            </div>
            <div className="col-sm-1">
              <p>เบอร์โทร*</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" value={this.state.customer_tel} onChange={e => this.setState({ customer_tel: e.target.value })}/>
            </div>
            <div className="col-sm-1">
              <p>ประเภทลูกค้า</p>
            </div>
            <div className="col-sm-4">
                  <select className="form-control" id="exampleFormControlSelect1" value={this.state.customer_type} onChange={e => {
                    this.setState({customer_type:e.target.value})
                    this.props.checkPrice({
                      customer_type:e.target.value,
                      date:this.state.reservation_date,
                    },true,true,this.setStatePrice)
                    this.clearCheckData()
                    this.setState({inputDefault:true})
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
            {/* <div className="col-sm-9">
              <div className="space-r">
                <ButtonModal color={Constant.Blue} width="120px" modalName={`#user-list-${this.props.booking.id}`} >
                  แสดงผู้เล่น
                  <CustListBookingModal
                    title="ผู้เล่น"
                    type={`user-list-${this.props.booking.id}`}
                  />
                </ButtonModal>
              </div>
              <div className="space-r">
                แสดงเฉพาะข้อมูลของลูกค้าที่เป็นคนจอง (หัวปาตี้)
                <ButtonModal color={Constant.Blue} width="120px" modalName={`#user-data-${this.props.booking.id}`} >
                  ดูข้อมูลลูกค้า
                  <CustBookingModal
                    title="ข้อมูลลูกค้า"
                    type={`user-data-${this.props.booking.id}`}
                  />
                </ButtonModal>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>จำนวนสนาม</p>
            </div>
            <div className="col-sm-2">
              <CancelModal width="120px" color={Constant.Green} onClick={()=> 
                {
                  this.props.setStateAddMore(true)
                  this.props.setStateCurrentModal(`#${this.props.type}`)
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
                       this.state.price_field && Object.keys(this.state.price_field).map(key => {
                        const fieldBook = this.state.price_field[key]
                        const result = fieldBook.map((value,index) => {
                          if(parseInt(value.price) === 0){
                            if(this.state.inputDefault){
                              document.getElementById(`myForm-${this.props.booking.id}-${key}`).reset();
                            }
                          }
                          return (
                            <tr key={value.time}>
                              <th scope="row">{value.field_name}</th>
                              <td>{`${value.start_time} - ${value.end_time}`}</td>
                              { 
                                value.edit_status === 0 ? 
                                <td>{value.price}</td> : 
                                <td>
                                  <form id={`myForm-${this.props.booking.id}-${key}`}>
                                  <input type="text" id='editText' className="form-control" defaultValue={value.price}  
                                  onChange={e => 
                                  this.setState({ inputDefault:false,checkData:{...this.state.checkData,
                                  [key]:{...this.state.checkData[key],[index]:e.target.value==='' ? 0 - parseInt(value.price) : parseInt(e.target.value)-parseInt(value.price)}} })}/>
                                  </form>

                                </td>
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
              <p>{ summary.reduce((partial_sum, a) => partial_sum + a,0) + this.sumValues(this.state.checkData) }</p>
            </div>
            <div className="col-sm-1">
              <p className="bold-text">ค่ามัดจำ</p>
            </div>
            <div className="col-sm-2">
             <input type="text" className="form-control" id="firstname" value={this.state.deposit === ''? 0 : parseInt(this.state.deposit)} onChange={e => this.setState({ deposit: e.target.value })} />
            </div>
            {/* <div className="col-sm-1">
              <p>ค่าสินค้า</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div> */}
          </div>
          <div className="row">
            {/* <div className="col-sm-1">
              <p className="bold-text">ส่วนลดแอพ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div> */}
            <div className="col-sm-1">
              <p className="bold-text">ส่วนลดอื่นๆ</p>
            </div>
            <div className="col-sm-2">
              <p>{ Number.isNaN(discount)?0:discount  }</p>
            </div>
            <div className="col-sm-6">
              <div className="space-r">
                <ButtonModal color={Constant.Blue} width="120px" modalName={`#discount-${this.props.booking.id}`} >
                  ส่วนลด
                  <DiscountAddModal title="ส่วนลด" type={`discount-${this.props.booking.id}`} fields={this.fields} 
                     rebate_other={this.state.rebate_other}
                     setStateDiscount={this.setStateDiscount}
                     deleteStateDiscount={this.deleteStateDiscount}
                     editStateDiscount={this.editStateDiscount} 
                  />
                </ButtonModal>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>สร้างโดย {this.state.create_by}</p>
            </div>
            <div className="col-sm-3">
              <p>เก็บเงิน {this.state.cashier_by}</p>
            </div>
            <div className="col-sm-6 left-side">
              <div className="space-l">
                <CancelModal width="120px" bstrap="btn-success" onClick={() => {
                  this.props.editBooking({...this.state})
                  this.props.setStateAddMore && this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal && this.props.setStateCurrentModal('#add-drag-booking')
                  this.props.setDataBooking && this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.clearCheckData()
                } 
                }
                  >
                  บันทีก
                </CancelModal>
              </div>
              <div className="space-l">
                <CancelModal width="120px" bstrap="btn-danger" onClick={()=> {
                  this.props.deleteBooking(this.props.booking.reservation_main_id,this.props.date)
                  this.props.setStateAddMore && this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal && this.props.setStateCurrentModal('#add-drag-booking')
                  this.props.setDataBooking && this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.clearCheckData()
                }}>
                  ยกเลิกการจอง
                </CancelModal>
              </div>
              <div className="space-l">
                <CancelModal width="120px" bstrap="btn-success" onClick={()=>
                {
                  this.props.editBooking({...this.state},true)
                  this.props.setStateAddMore && this.props.setStateAddMore(false)
                  this.props.setStateCurrentModal && this.props.setStateCurrentModal('#add-drag-booking')
                  this.props.setDataBooking && this.props.setDataBooking({
                    checkPriceData:[],
                    paramsCheckprice:[],
                    paramsFieldDocList:[],
                    editFieldDocList:[],
                    editAddmore:false
                  })
                  this.clearCheckData()
                }}>
                  {this.props.booking.flag_status === '0'?'ชำระเงิน':'ยกเลิกการชำระเงิน'}
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

export default BookingEditModal;
