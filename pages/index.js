// รายการวันนี้
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Layout, DatePickerButton, StadiumBookingColumn, Loader, Constant } from '../components';
import { getListBooking,checkPrice,getCustomerType,deleteBooking,editBooking,getEditMainByid } from '../store';
import Router from 'next/router';
import Login from './login';

class Index extends Component {
  state = {
    currentDate: moment(),
  }


  componentDidMount(){
    let checkLogin = window.sessionStorage.getItem('LenkilaLogin')
    checkLogin && this.props.getListBooking(this.state.currentDate.format('YYYY-MM-DD'))
    checkLogin && this.props.getCustomerType()

  }
  // [GET] - Fields & Booking

  render() {

    const { todayBookingList } = this.props
    return (
      <Layout title="รายการวันนี้">
        <div className="d-flex align-items-center header">
          <h5 style={{ margin: '0 10px' }}>รายการของ : </h5>
          <DatePicker
            customInput={<DatePickerButton />}
            selected={this.state.currentDate}
            onChange={currentDate => {
              this.setState({ currentDate })
              this.props.getListBooking(currentDate.format('YYYY-MM-DD'))
              }
            }
          />
          <button
            onClick={() => {
              this.setState({ currentDate: moment() })
              this.props.getListBooking(moment().format('YYYY-MM-DD'))
             }
            }
            className="btn btn-outline-info pick-td-btn"
          >
            เลือกวันนี้
          </button>
        </div>
        <div className="stadiums-wrapper">
          <div className="row">
          {this.props.isLoading ? <Loader /> :
            todayBookingList && todayBookingList.map(field => (
              <div key={field.id} className="col-12 col-sm-6 col-md-4">
                <StadiumBookingColumn 
                  title={field.field} 
                  bookings={field.bookings} 
                  date={moment(this.props.currentDate).format("YYYY-MM-DD")}
                  customerType={this.props.customerType}
                  deleteBooking={this.props.deleteBooking}
                  editBooking={this.props.editBooking}
                  checkPriceData={this.props.checkPriceData}
                  checkPrice={this.props.checkPrice}
                  reservationList={this.props.reservationList}
                  getEditMainByid={this.props.getEditMainByid}
                />
              </div>
            ))
          }
          </div>
        </div>
        <style jsx>
          {`
            .header {
              height: 60px;
            }
            .pick-td-btn {
              margin-left: 10px;
            }
            .stadiums-wrapper {
              height: calc(100vh - 150px);
              padding: 20px 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              white-space: nowrap;
              padding-right: 5%;
              .item {
                margin-right: 15px;
                height: 100%;
              }
            }
          `}
        </style>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    todayBookingList:state.bookingSaga.todayBookingList,
    checkPriceData:state.bookingSaga.checkPriceData,
    customerType: state.customer_typeSaga.customerType,
    reservationList:state.bookingSaga.reservationList,
    isLoading:state.bookingSaga.isLoading,
  };
}

export default connect(mapStateToProps,{getListBooking,getEditMainByid,checkPrice,getCustomerType,deleteBooking,editBooking})(Index);
