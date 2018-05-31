import React, { Component } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Layout, BookingCalendar, PageTitle, Button, ButtonModal, Constant, BookingAddModal /* GotoDate */ } from '../components';

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canDragBooking: false,
      gotoDate: moment(),
    };

    this.canBooking = this.canBooking.bind(this);
    this.today = this.today.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.previousDay = this.previousDay.bind(this);
  }

  canBooking() {
    this.setState({
      canDragBooking: !this.state.canDragBooking,
    });
  }

  today() {
    this.setState({
      gotoDate: moment(),
    });
  }

  nextDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).add(1, 'days'),
    });
  }

  previousDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).subtract(1, 'days'),
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
            <div className="col-sm-12 above-everything">
              <div className="lk-box space-r align-middle">
                <Button color={Constant.Blue} width="50px" onClick={this.previousDay}>
                  <i className="fa fa-chevron-left" aria-hidden="true" />
                </Button>
              </div>
              <div className="lk-box space-r align-middle">
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
                  className="form-control align-middle"
                />
              </div>
              <div className="lk-box space-r align-middle">
                <Button color={Constant.Blue} width="70px" onClick={this.today}>
                  วันนี้
                </Button>
              </div>
              <div className="lk-box space-r align-middle">
                <Button color={Constant.Blue} width="50px" onClick={this.nextDay}>
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="lk-box space-r">
                <ButtonModal color={Constant.Orange} width="100px" modalName="#add-booking">
                  Note
                  <BookingAddModal title="จองสนาม" type="add-booking" fields={this.fields} />
                </ButtonModal>
              </div>
              <div className="lk-box space-r">
                <div className="lk-box space-r space-l">Booking</div>
                <div className="lk-box align-middle space-r space-l">
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
              </div>
              <div className="lk-box">
                <div className="lk-box space-r">
                  <ButtonModal color={Constant.Blue} width="100px" modalName="#add-booking">
                    <i className="fa fa-plus" aria-hidden="true" />
                    <BookingAddModal title="จองสนาม" type="add-booking" fields={this.fields} />
                  </ButtonModal>
                </div>
                <div className="lk-box space-r">
                  <ButtonModal color={Constant.Red} width="100px" modalName="#add-booking">
                    Boost
                    <BookingAddModal title="จองสนาม" type="add-booking" fields={this.fields} />
                  </ButtonModal>
                </div>
              </div>
              <div className="lk-box float-right">
                <Button color={Constant.Blue} width="100px">
                  Export
                </Button>
              </div>
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
              div{
                display:inline-block;
              }
            }
            .right{
              text-align:right;
              padding-left:0;
            }
            .above-everything{
              z-index:999;
            }
            .lk-box{
              display:inline-block;
            }
            .space-r{
              margin-right:15px;
            }
            .space-l{
              margin-left:15px;
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
      title: 'B: Waiting',
      start: '2018-06-01T09:00:00',
      end: '2018-06-01T13:00:00',
      color: Constant.Red,
      textColor: 'white',
    },
    {
      id: '2',
      resourceId: 'a',
      title: 'W: 2 กลุ่ม',
      start: '2018-06-01T09:00:00',
      end: '2018-06-01T11:00:00',
      color: Constant.Grey,
      textColor: 'white',
    },
    {
      id: '3',
      resourceId: 'a',
      title: 'B: Success',
      start: '2018-06-01T15:00:00',
      end: '2018-06-01T18:00:00',
      color: Constant.Red,
      textColor: 'white',
    },
    {
      id: '4',
      resourceId: 'b',
      title: 'BF: 4 คน',
      start: '2018-06-01T07:00:00',
      end: '2018-06-01T11:00:00',
      color: Constant.Red,
      textColor: 'white',
    },
    {
      id: '5',
      resourceId: 'g',
      title: 'คุณหลิ่ว',
      start: '2018-06-01T08:00:00',
      end: '2018-06-01T12:00:00',
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '6',
      resourceId: 'g1',
      title: 'คุณหลิ่ว',
      start: '2018-06-01T08:00:00',
      end: '2018-06-01T12:00:00',
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '7',
      resourceId: 'g',
      title: 'คุณนิด, คุณโหน่ง',
      start: '2018-06-01T13:00:00',
      end: '2018-06-01T19:00:00',
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '8',
      resourceId: 'g1',
      title: 'คุณนิด',
      start: '2018-06-01T13:00:00',
      end: '2018-06-01T16:00:00',
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '9',
      resourceId: 'g2',
      title: 'คุณโหน่ง',
      start: '2018-06-01T15:00:00',
      end: '2018-06-01T19:00:00',
      color: '#ecf0f1',
      textColor: 'black',
    },
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
