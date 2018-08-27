import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button } from '../..';

class PaymentAddModel extends Component {
  state = {
    currentDate: moment(),
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="40" >
        <Body>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <p>จำนวนเงิน</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="money" />
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <p>รหัส</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="code" />
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-success" >
            Check
          </Button>
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:40px;
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

export default PaymentAddModel;
