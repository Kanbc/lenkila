import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal, CustBookingModal, CustListBookingModal } from '../..';

class BookingEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.booking,
    };

  }

  render() {
    console.log('booking edit',this.props.booking)
    const summary = this.props.checkPriceData.reduce(function(prev, cur) {
      return prev + parseInt(cur.price);
    }, 0);
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90">
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
                      start_time:this.state.start_time,
                      end_time:this.state.end_time,
                      field_id:this.state.field_doc_id,
                      customer_type:e.target.value,
                      date:this.state.reservation_date,
                    })
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
            <div className="col-sm-9">
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
                {/* แสดงเฉพาะข้อมูลของลูกค้าที่เป็นคนจอง (หัวปาตี้) */}
                <ButtonModal color={Constant.Blue} width="120px" modalName={`#user-data-${this.props.booking.id}`} >
                  ดูข้อมูลลูกค้า
                  <CustBookingModal
                    title="ข้อมูลลูกค้า"
                    type={`user-data-${this.props.booking.id}`}
                  />
                </ButtonModal>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>จำนวนสนาม</p>
            </div>
            <div className="col-sm-2">
              <Button width="120px" color={Constant.Green}>
                จองเพิ่ม/แก้ไข
              </Button>
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
                      this.props.checkPriceData && this.props.checkPriceData.map(fieldBook => {
                        return (
                          <tr key={fieldBook.time}>
                            <th scope="row">{fieldBook.field_name}</th>
                            <td>{`${fieldBook.start_time} - ${fieldBook.end_time}`}</td>
                            { 
                              fieldBook.price ? 
                              <td>{fieldBook.price}</td> : 
                              <td>
                                <input type="text" className="form-control" value={Number.isNaN(parseInt(this.state.pay_stadium)) ? 0 : parseInt(this.state.pay_stadium)} onChange={e => this.setState({ pay_stadium:e.target.value })}/>
                              </td>
                          }
                          </tr>
                        );
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
              <p>{ Number.isNaN(parseInt(this.state.pay_stadium))? parseInt(summary) : parseInt(summary)+parseInt(this.state.pay_stadium)}</p>
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
              <p>-</p>
            </div>
            <div className="col-sm-6">
              <div className="space-r">
                <ButtonModal color={Constant.Blue} width="120px" modalName={`#discount-${this.props.booking.id}`} >
                  ส่วนลด
                  <DiscountAddModal title="ส่วนลด" type={`discount-${this.props.booking.id}`} fields={this.fields} />
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
                <Button width="120px" bstrap="btn-success" onClick={() => this.props.editBooking({...this.state})}>
                  บันทีก
                </Button>
              </div>
              <div className="space-l">
                <CancelModal width="120px" bstrap="btn-danger" onClick={()=>this.props.deleteBooking(this.props.booking.id,this.props.date)}>
                  ยกเลิกการจอง
                </CancelModal>
              </div>
              <div className="space-l">
                <Button width="120px" bstrap="btn-success">
                  ชำระเงิน
                </Button>
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
