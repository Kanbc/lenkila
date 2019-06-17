import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant, DiscountForm } from '../..';
import { setThisBookingDiscount, addThisBookingDiscount } from '../../../store';

class DiscountAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      detail: null,
      price: null,
    };

    this.addDiscount = this.addDiscount.bind(this);
    this.cancelAddDiscount = this.cancelAddDiscount.bind(this);
    this.exitDiscountModal = this.exitDiscountModal.bind(this);
  }

  addDiscount() {
    this.setState({ isAdding: true });
  }

  cancelAddDiscount() {
    this.setState({
      isAdding: false,
      detail: null,
      price: null,
    });
  }

  exitDiscountModal(){
    this.setState({
      isAdding: false,
      detail: null,
      price: null,
    });
    // Jquery hide specific modal
    $("#" + this.props.type).modal('hide');
  }

 
  // [GET] discounts of this day

  render() {
    const { rebate_other } = this.props;

    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="60">
        <Body>
          {(!rebate_other || rebate_other.length == 0 && !this.state.isAdding) && <p className="nonote">กดปุ่ม เพิ่ม เพื่อเพิ่มส่วนลด</p>}
          {rebate_other && rebate_other.map(value => {
            return (
              <DiscountForm 
              key={value.id} item={value} id={value.id} 
              setStateDiscount={this.props.setStateDiscount}
              rebate_other={rebate_other}
              deleteStateDiscount={this.props.deleteStateDiscount}
              editStateDiscount={this.props.editStateDiscount}
              />
            );
          })}
          {this.state.isAdding &&
            <div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="bold-text">รายละเอียด</p>
                </div>
                <div className="col-sm-3">
                <input type="text" className="form-control" id="detail" defaultValue={this.state.detail} onChange={e => this.setState({ detail: e.target.value })} />
                </div>
                <div className="col-sm-2">
                  <p className="bold-text">ลดราคา</p>
                </div>
                <div className="col-sm-3">
                <input type="text" className="form-control" id="price" defaultValue={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
                </div>
                <div className="col-sm-2">
                  <Button width="80px" bstrap="btn-success" onClick={() => {
                    // validation
                    // add note api
                    this.props.setStateDiscount({
                      id: Math.floor(Math.random() * Math.floor(1000)),
                      detail: this.state.detail,
                      price: this.state.price,
                    })
                    this.cancelAddDiscount()

                  }}>บันทึก</Button>
                </div>
              </div>
            </div>
          }
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-primary" color={Constant.Blue} onClick={this.addDiscount}>
            เพิ่ม
          </Button>
          <Button width="100px" color={Constant.Red} onClick={this.exitDiscountModal}>
            ยกเลิก
          </Button>
        </Footer>
        <style jsx>
          {` 
            .bodyNote{
              max-height:400px;
              width:100%;
              overflow-y: scroll;
              overflow-x: visible;
            }
            .bold-text{
              font-weight:bold;
            }
            .nonote{
              text-align: center;
              color: ${Constant.Grey};
            }
            .row {
              margin-top: 10px;
              margin-bottom: 40px;
              p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                text-align: left;
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



export default (DiscountAddModal);
