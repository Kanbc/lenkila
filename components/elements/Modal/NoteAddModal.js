import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant } from '../..';

class NoteAddModal extends Component {
  state = {}

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="45">
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>รายละเอียด</p>
            </div>
            <div className="col-sm-7">
              <textarea className="form-control" rows="2" id="comment" />
            </div>
            <div className="col-sm-3">
              <Button width="100px" color={Constant.Red}>
                ลบ
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>รายละเอียด</p>
            </div>
            <div className="col-sm-7">
              <textarea className="form-control" rows="2" id="comment" />
            </div>
            <div className="col-sm-3">
              <Button width="100px" color={Constant.Red}>
                ลบ
              </Button>
            </div>
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-success" color={Constant.Blue}>
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

export default NoteAddModal;
