import React, { Component } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Layout, BookingCalendar, PageTitle, Button, ButtonModal, Constant, NoteAddModal, BoostAddModal, BookingAddModal, ExportBookingModal /* GotoDate */ } from '../components';

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

  // [GET] - Field
  users = userData();

  // [GET] - Open/Closed, Business Hours
  // ข้อมูลสนามภาพรวม
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
                <ButtonModal color={Constant.Orange} width="100px" modalName="#add-note">
                  Note
                  <NoteAddModal title="Note" type="add-note" fields={this.fields} />
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
                {/* <div className="lk-box space-r">
                  <ButtonModal color={Constant.Blue} width="100px" modalName="#add-booking">
                    <i className="fa fa-plus" aria-hidden="true" />
                    <BookingAddModal 
                      title="การจอง" 
                      type="add-booking" 
                      fields={this.fields} 
                    />
                  </ButtonModal>
                </div> */}
                <div className="lk-box space-r">
                  <ButtonModal color={Constant.Red} width="100px" modalName="#add-boost">
                    Boost
                    <BoostAddModal title="Boost" type="add-boost" fields={this.fields} />
                  </ButtonModal>
                </div>
              </div>
              <div className="lk-box float-right">
                <ButtonModal color={Constant.Blue} width="100px" modalName="#export-booking">
                  Export
                  <ExportBookingModal title="Export Booking" type="export-booking" fields={this.fields} />
                </ButtonModal>
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
      start: moment().add(4, 'hour'),
      end: moment().add(6, 'hour'),
      color: Constant.Red,
      textColor: 'white',
    },
    {
      id: '2',
      resourceId: 'a',
      title: 'W: 2 กลุ่ม',
      start: moment().add(7, 'hour'),
      end: moment().subtract(10, 'hour'),
      color: Constant.Grey,
      textColor: 'white',
    },
    {
      id: '3',
      resourceId: 'a',
      title: 'B: Success',
      start: moment().subtract(4, 'hour'),
      end: moment().subtract(2, 'hour'),
      color: Constant.Red,
      textColor: 'white',
    },
    {
      id: '4',
      resourceId: 'b',
      title: 'BF: 4 คน',
      start: moment(),
      end: moment().subtract(4, 'hour'),
      color: Constant.Red,
      textColor: 'white',
    },
    {
      id: '5',
      resourceId: 'g',
      title: 'คุณหลิ่ว',
      start: moment().add(12, 'hour'),
      end: moment().add(16, 'hour'),
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '6',
      resourceId: 'g1',
      title: 'คุณหลิ่ว',
      start: moment().add(10, 'hour'),
      end: moment().add(14, 'hour'),
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '7',
      resourceId: 'g',
      title: 'คุณนิด, คุณโหน่ง',
      start: moment().add(2, 'hour'),
      end: moment().add(6, 'hour'),
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '8',
      resourceId: 'g1',
      title: 'คุณนิด',
      start: moment().add(16, 'hour'),
      end: moment().add(19, 'hour'),
      color: '#ecf0f1',
      textColor: 'black',
    },
    {
      id: '9',
      resourceId: 'g2',
      title: 'คุณโหน่ง',
      start: moment().add(20, 'hour'),
      end: moment().add(24, 'hour'),
      color: '#ecf0f1',
      textColor: 'black',
    },
  ];
  return users;
}

function fieldData() {
  // name:
  // type: (football,badminton)
  // can_split: yes,no
  // detail
  const fields = [
    {
      id: 'a',
      field: 'A',
      side: 'Left',
      price: 300,
    },
    // { id: 'b', field: 'A', side: 'Right' },
    {
      id: 'b',
      field: 'B',
      side: 'Left',
      price: 150,
    },
    // { id: 'd', field: 'B', side: 'Right' },
    {
      id: 'c',
      field: 'C',
      side: '-',
      price: 200,
    },
    {
      id: 'd',
      field: 'D',
      side: '-',
      price: 200,
    },
    {
      id: 'g',
      field: 'G',
      price: 300,
      children: [
        {
          id: 'g1',
          field: 'Left G',
          price: 200,
        }, {
          id: 'g2',
          field: 'Right G',
          price: 200,
        },
      ],
    },
  ];
  return fields;
}

function fieldPriceData() {
  const prices = [
    // {
      // weekday: [mon-fri,sat-sun],
      // start:, 
      // end:,
      // color: ,
      // full_price:,
      // half_price: ,
    // }
  ];
  return prices;
}

function userData() {
  const users = [
    {
      id: 1,
      firstname: 'Archer',
      lastname: 'Traher',
      email: 'atraher0@google.it',
      nickname: 'Yellow',
      username: 'atraher0',
      password: '0K7d35r',
      tel: '941-715-4509',
      role: 'Owner',
    },
    {
      id: 2,
      firstname: 'Sherilyn',
      lastname: 'Wooding',
      email: 'swooding1@live.com',
      nickname: 'Khaki',
      username: 'swooding1',
      password: 'W6wSVjGDVV',
      tel: '589-802-3451',
      role: 'Owner',
    },
    {
      id: 3,
      firstname: 'Erminie',
      lastname: 'Georgiades',
      email: 'egeorgiades2@diigo.com',
      nickname: 'Blue',
      username: 'egeorgiades2',
      password: 'GdKAPoubYOIV',
      tel: '177-268-9690',
      role: 'Owner',
    },
    {
      id: 4,
      firstname: 'Dominik',
      lastname: 'Switsur',
      email: 'dswitsur3@wired.com',
      nickname: 'Pink',
      username: 'dswitsur3',
      password: 'If6DgzXJPxg',
      tel: '625-877-1952',
      role: 'Admin',
    },
    {
      id: 5,
      firstname: 'Sharleen',
      lastname: 'Bostick',
      email: 'sbostick4@github.io',
      nickname: 'Fuscia',
      username: 'sbostick4',
      password: 'UaXVPi',
      tel: '892-646-7110',
      role: 'Admin',
    },
  ];
  return users;
}

export default BookingTable;
