import React, { Component } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Layout, BookingCalendar, PageTitle, ButtonModal, Constant, BookingAddModal /* GotoDate */ } from '../components';

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canDragBooking: false,
      gotoDate: moment(),
    };

    this.canBooking = this.canBooking.bind(this);
  }

  canBooking() {
    this.setState({
      canDragBooking: !this.state.canDragBooking,
    });
  }

  // [GET] - Bookings
  booking = bookingData();

  // [GET] - Field
  fields = fieldData();

  // [GET] - Open/Closed, Business Hours
  fieldDetail = {
    open: '07:00',
    close: '26:00',
    weekdayOpen: [0, 1, 2, 3, 4, 5, 6], // Monday - Friday (0=Sunday)
    minTime: '05:00:00',
    maxTime: '29:00:00',
  };

  render() {
    return (
      <Layout title="การจอง">
        <div className="container">
          <PageTitle title="การจอง" />
          <div className="row">
            <div className="col-sm-1 left">
              Booking
            </div>
            <div className="col-sm-5 left">
              <Switch
                onChange={this.canBooking}
                checked={this.state.canDragBooking}
                onColor="#86d3ff"
                onHandleColor={Constant.Blue}
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch form-check-input"
                id="normal-switch"
              />
            </div>
            <div className="col-sm-5 none-padding">
              <DatePicker
                // customInput={<GotoDate width="65px" color={Constant.Blue} />}
                // selected={this.state.gotoDate}
                // popperPlacement="top-end"
                // onChange={gotoDate => this.setState({ gotoDate })}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.gotoDate}
                onChange={gotoDate => this.setState({ gotoDate })}
                className="form-control"
              />
            </div>
            <div className="col-sm-1 right">
              <ButtonModal color={Constant.Blue} width="65px" modalName="#add-booking">
                <i className="fa fa-plus" aria-hidden="true" />
                <BookingAddModal title="จองสนาม" type="add-booking" fields={this.fields} />
              </ButtonModal>
            </div>
          </div>
          <BookingCalendar
            field={this.fields}
            booking={this.booking}
            detail={this.fieldDetail}
            canbook={this.state.canDragBooking}
            gotoDate={this.state.gotoDate}
          />
        </div>
        <style jsx>{`
          .row{
            margin-top:0px;
            margin-bottom:20px;
            .left{
              text-align:left;
              height: 38px;
              line-height: 38px;
            }
            .right{
              text-align:right;
              padding-left:0;
            }
            .none-padding{
              text-align:right;
              z-index:999;
            }
          }
        `}
        </style>
      </Layout>
    );
  }
}

function bookingData() {
  const users = [
    {
      id: '1',
      resourceId: 'a',
      title: 'คุณกานต์',
      start: '2018-05-15T09:00:00',
      end: '2018-05-15T11:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '21',
      resourceId: 'b',
      title: 'คุณต้น',
      start: '2018-05-15T09:00:00',
      end: '2018-05-15T11:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '2',
      resourceId: 'c',
      title: 'คุณเอิท',
      start: '2018-05-15T12:00:00',
      end: '2018-05-15T15:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '3',
      resourceId: 'd',
      title: 'คุณจั๊ม',
      start: '2018-05-15T13:00:00',
      end: '2018-05-15T15:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '4',
      resourceId: 'g',
      title: 'คุณหลิ่ว',
      start: '2018-05-15T08:00:00',
      end: '2018-05-15T12:00:00',
      color: 'red',
      textColor: 'black',
      overlap: false,
    },
    // more events here
  ];
  return users;
}

function fieldData() {
  const fields = [
    {
      id: 'a',
      field: 'A',
      side: 'Left',
    },
    // { id: 'b', field: 'A', side: 'Right' },
    {
      id: 'b',
      field: 'B',
      side: 'Left',
    },
    // { id: 'd', field: 'B', side: 'Right' },
    {
      id: 'c',
      field: 'C',
      side: '-',
    },
    {
      id: 'd',
      field: 'D',
      side: '-',
    },
    {
      id: 'g',
      field: 'G',
      children: [
        {
          id: 'g1',
          field: 'Left G',
        }, {
          id: 'g2',
          field: 'Right G',
        },
      ],
    },
  ];
  return fields;
}

export default BookingTable;
