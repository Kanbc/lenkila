import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button } from '../..';
import { addPaymentData } from '../../../store';

class PaymentAddModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      username: '',
      price: '',
      admin: 'Demo',
    };

    this.checkPayment = this.checkPayment.bind(this);
    this.addNewPayment = this.addNewPayment.bind(this);
    this.cancelAddPayment = this.cancelAddPayment.bind(this);
  }

  checkPayment(){
    const payments = this.props.payments
    const instance = this.state.username

    var matchUserName = payments.filter(function (payment) {
      if (instance === ''){
        // Not Search
        return "False"
      }else{
        return payment.username === instance;
      }
    });

    if (matchUserName.length > 0){
      // Not found
      return "False"
    }else{
      // Found
      return "True"
    }
  }

  cancelAddPayment() {
    this.setState({
      id: '',
      date: '',
      time: '',
      username: '',
      price: '',
      admin: 'Demo',
    });
  }

  addNewPayment() {
    // validation
    // add user api
    this.props.dispatch(addPaymentData({
      id: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().format('HH:mm:ss').toString(),
      username: this.state.username,
      price: parseInt(this.state.price),
      admin: 'Demo',
    }));
    this.cancelAddPayment();
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
              <input type="number" className="form-control" id="money" value={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
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
              <input type="text" className="form-control" id="code" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}/>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-success" onClick={() => this.checkPayment()} >
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

export default connect()(PaymentAddModel);
