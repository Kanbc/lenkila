import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant } from '../..';

class DiscountAddModal extends Component {
  state = {}

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="60">
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>รายละเอียด</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>ลดราคา</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <Button width="100px" color={Constant.Red}>
                ลบ
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>รายละเอียด</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>ลดราคา</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <Button width="100px" color={Constant.Red}>
                ลบ
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>รายละเอียด</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>ลดราคา</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <Button width="100px" color={Constant.Red}>
                ลบ
              </Button>
            </div>
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-primary" color={Constant.Blue}>
            เพิ่ม
          </Button>
        </Footer>
        <style jsx>
          {` 
            .row {
              margin-top: 10px;
              margin-bottom: 40px;
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

export default DiscountAddModal;
