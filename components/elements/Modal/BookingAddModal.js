import React, { Component } from 'react';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal } from '../..';

class BookingAddModal extends Component {
  state = {}

  getFieldData(fields,fieldId){
    // get fields data from object list
    var field_data = new Object();
    for (var key in fields) {
      if (fields[key].id == fieldId) {
        field_data = fields[key];
      }
    }
    return field_data;
  }

  render() {
    const resourceData = this.getFieldData(this.props.fields, this.props.resourceId);
    const date = this.props.day;

    const fieldOpen = moment(this.props.fieldOpen, 'HH:mm');
    // const fieldClose = this.props.fieldClose;
    var startTime = moment(this.props.startTime, 'HH:mm');
    var endTime = moment(this.props.endTime, 'HH:mm');

    if (fieldOpen < startTime){
      var string_start = date.format('YYYY-MM-DD') + startTime.format('HH:mm');
    }else{
      var string_start = date.add(1, 'days').format('YYYY-MM-DD') + startTime.format('HH:mm');
    }
    console.log(string_start);
    // if ()
    // Sent API for Booking

    console.log(resourceData);
    console.log(date);

    console.log(fieldOpen);
    // console.log(fieldClose);

    console.log(startTime);
    console.log(endTime);

    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90">
        <Body>
          <div className="row">
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
            <div className="col-sm-1">
              <p>จำนวนผู้เล่น</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-9"/>
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
                    <tr>
                      <th scope="row">{resourceData.field}</th>
                      {/* <td>{startTime}-{endTime}</td> */}
                      <td>1,000</td>
                    </tr>
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
              <p>-</p>
            </div>
            <div className="col-sm-1">
              <p className="bold-text">ค่ามัดจำ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <Button width="120px" bstrap="btn-success">
                บันทีก
              </Button>
            </div>
            {/* <div className="col-sm-1">
              <p>ค่าสินค้า</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div> */}
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">ส่วนลดแอพ</p>
            </div>
            <div className="col-sm-2">
              <p>-</p>
            </div>
            <div className="col-sm-1">
              <p className="bold-text">ส่วนลดอื่นๆ</p>
            </div>
            <div className="col-sm-2">
              <p>-</p>
            </div>
            <div className="col-sm-6">
              <div className="space-r">
                <ButtonModal color={Constant.Blue} width="120px" modalName="#discount">
                  ส่วนลด
                  <DiscountAddModal title="ส่วนลด" type="discount" fields={this.fields} />
                </ButtonModal>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>สร้างโดย เอ</p>
            </div>
            <div className="col-sm-3">
              <p>เก็บเงิน เอ</p>
            </div>
            <div className="col-sm-6 left-side">
              <div className="space-l">
                <Button width="100px" bstrap="btn-success">
                  บันทีก
                </Button>
              </div>
              <div className="space-l">
                <CancelModal width="100px" bstrap="btn-danger">
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
