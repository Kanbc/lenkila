import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { TabsLayout, PaymentAddModal, ButtonModal, Constant, Loader } from '../components';
import { setPaymentData } from '../store';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
    };

  }

  // [GET] - Users
  payments = paymentData();

  componentDidMount() {
    this.props.dispatch(setPaymentData(this.payments));
  }

  render() {
    const { payments } = this.props;

    console.log('render!', payments);
    return (
      <TabsLayout title="เติมเงิน" tabs={Constant.PaymentTabs}>
        <div className="container">
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row2">
                  <th scope="col" className="text-left">
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} bstrap="btn-primary" modalName="#add-payment">
                      เติมเงิน
                      <PaymentAddModal title="เติมเงิน" type="add-payment" payments={payments} />
                    </ButtonModal>
                  </th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                  <th scope="col" className="hide2" />
                </tr>
                <tr className="tools-row">
                  <th scope="col">
                    <div className="text-left">
                      <p>ยอดรวม :</p>
                    </div>
                    <div className="text-left">
                      {!payments && <p className="bignum">0</p>}
                      {payments && 
                        <p className="bignum">
                          {payments.reduce(function (cnt, o) { return cnt + o.price; }, 0)}
                        </p>
                      }
                    </div>
                  </th>
                  <th scope="col" />
                  <th scope="col" className="hide2" />
                  <th scope="col">
                    <div className="text-right">
                      <p>แสดง</p>
                    </div>
                    <div className="text-right">
                      <DatePicker
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        disabledKeyboardNavigation
                        selected={this.state.startDate}
                        onChange={startDate => this.setState({ startDate })}
                        className="form-control align-middle"
                      />
                    </div>
                  </th>
                  <th scope="col" >
                    <div className="text-right">
                      <p>ถึง</p>
                    </div>
                    <div className="text-right">
                      <DatePicker
                        popperPlacement="bottom-end"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        disabledKeyboardNavigation
                        selected={this.state.endDate}
                        onChange={endDate => this.setState({ endDate })}
                        className="form-control align-middle"
                      />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">วัน</th>
                  <th scope="col">เวลา</th>
                  <th scope="col">รหัสลูกค้า</th>
                  <th scope="col" className="hide2">จำนวนเงิน</th>
                  <th scope="col" className="hide2">เจ้าหน้าที่</th>
                </tr>
              </thead>
              <tbody>
                {payments && payments.map(payment => {
                  return (
                    <tr key={payment.id}>
                      <td className="hide1">{payment.date}</td>
                      <td>{payment.time}</td>
                      <td>{payment.username}</td>
                      <td className="hide2">{payment.price}</td>
                      <td className="hide2">{payment.admin}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {!payments && <Loader></Loader>}
          </div>
        </div>
        <style jsx>{`
          .bignum{
            font-size:2rem;
          }
          .text-left{
            text-align:left;
            position: relative;
          }
          .text-right{
            text-align:right;
            position: relative;
          }
          .tools-row th{
            border-top: none;
            padding-bottom: 20px;
          }
          .tools-row2 th{
            border: none;
            padding-bottom: 20px;
          }
          .overall-table{
            margin-top:0px;
            th{
              height:70px;
              text-align:center;
              vertical-align: middle;
            }
            td{
              text-align:center;
              vertical-align: middle;
            }
          }
          .um-edit-button{
            background-color: #FD9226;
            border-color:#f77e06;
            cursor:pointer;
          }
          @media (max-width: 992px) { 
            .hide1{
              display:none;
            }
          }
          @media (max-width: 768px) { 
            .hide2{
              display:none;
            }
          }
        `}
        </style>
      </TabsLayout>
    );
  }
}

function paymentData() {
  const payments = [
    {
      id: 1,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().add(4, 'hour').format('HH:mm:ss').toString(),
      username: 'kanbc',
      price: 700,
      admin: 'Owner',
    },
    {
      id: 2,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().add(6, 'hour').format('HH:mm:ss').toString(),
      username: 'demo',
      price: 50,
      admin: 'Owner',
    },
    {
      id: 3,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().add(7, 'hour').format('HH:mm:ss').toString(),
      username: 'atraher0',
      price: 1000,
      admin: 'Owner',
    },
    {
      id: 4,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().subtract(4, 'hour').format('HH:mm:ss').toString(),
      username: 'atraher0',
      price: 400,
      admin: 'Owner',
    },
    {
      id: 5,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().add(12, 'hour').format('HH:mm:ss').toString(),
      username: 'atraher0',
      price: 300,
      admin: 'Owner',
    },
    {
      id: 6,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().add(10, 'hour').format('HH:mm:ss').toString(),
      username: 'atraher0',
      price: 200,
      admin: 'Owner',
    },
    {
      id: 7,
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().add(2, 'hour').format('HH:mm:ss').toString(),
      username: 'atraher0',
      price: 100,
      admin: 'Owner',
    },
  ];
  return payments;
}

function mapStateToProps(state) {
  return {
    payments: state.payments,
  }
}

export default connect(mapStateToProps)(Payment);
