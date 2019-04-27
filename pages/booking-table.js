import React, { Component } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { setNote, setNoteDate, getListBooking } from '../store';
import { Layout, BookingCalendar, PageTitle, Button, ButtonModal, Constant, NoteAddModal, BoostAddModal, ExportBookingModal } from '../components';

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

  // eslint-disable-next-line react/sort-comp
  canBooking() {
    this.setState({
      canDragBooking: !this.state.canDragBooking,
    });
  }

  today() {
    const today = moment(new Date());
    this.setState({
      gotoDate: today,
    });
    this.props.setNoteDate(today.format('YYYY-MM-DD'));
  }

  nextDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).add(1, 'days'),
    });
    this.props.setNoteDate(this.state.gotoDate.add(1, 'days').format('YYYY-MM-DD'));
  }

  previousDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).subtract(1, 'days'),
    });
    this.props.setNoteDate(this.state.gotoDate.subtract(1, 'days').format('YYYY-MM-DD'));
  }

  // [GET] - Bookings
  booking = bookingData();


  // [GET] - Open/Closed, Business Hours
  // ข้อมูลสนามภาพรวม

  componentDidMount() {
    // this.props.setNote();
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'))
    this.props.setNoteDate(this.state.gotoDate.format('YYYY-MM-DD'));
  }
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
              <div className="lk-box space-r align-middle lenkila-react-datepicker">
                <DatePicker
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  disabledKeyboardNavigation
                  className="form-control align-middle"
                  selected={this.state.gotoDate}
                  onChange={gotoDate => this.setState({ gotoDate })}
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
                  <NoteAddModal title="Note" type="add-note" fields={this.fields} gotoDate={this.state.gotoDate} />
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
            field={this.props.fieldsBooking}
            booking={this.props.fieldsPrice}
            detail={this.props.fieldDetail}
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

// [GET]
// Input - datetime etc. 2019-04-11
function bookingData() {
  const todayTime = moment().format('YYYY-MM-DD');
  const users = [
    {
      id: '1',
      resourceId: 'pech',
      title: 'B: Waiting',
      start: moment().add(4, 'hour'),
      end: moment().add(6, 'hour'),
      color: Constant.Red,
      textColor: 'red',
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
    // Field Price Data
    // - รวมทั้งส่วนราคาสนามและราคาจากสร้าง buffet มากับ API booking เลย
    {
      id: '10',
      resourceId: 'pech',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#ca0813',
      rendering: 'background',
    },
    {
      id: '17',
      resourceId: 'a',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '24',
      resourceId: 'a',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
    {
      id: '11',
      resourceId: 'b',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#ca0813',
      rendering: 'background',
    },
    {
      id: '18',
      resourceId: 'b',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '25',
      resourceId: 'b',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
    {
      id: '12',
      resourceId: 'c',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#ca0813',
      rendering: 'background',
    },
    {
      id: '19',
      resourceId: 'c',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '26',
      resourceId: 'c',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
    {
      id: '13',
      resourceId: 'd',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#ca0813',
      rendering: 'background',
    },
    {
      id: '20',
      resourceId: 'd',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '27',
      resourceId: 'd',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
    {
      id: '14',
      resourceId: 'g',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#0693e3',
      rendering: 'background',
    },
    {
      id: '28',
      resourceId: 'g',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
    {
      id: '21',
      resourceId: 'g',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '29',
      resourceId: 'g1',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
    {
      id: '15',
      resourceId: 'g1',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#0693e3',
      rendering: 'background',
    },
    {
      id: '22',
      resourceId: 'g1',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '16',
      resourceId: 'g2',
      start: moment(`${todayTime} 07:00`),
      end: moment(`${todayTime} 12:00`),
      color: '#0693e3',
      rendering: 'background',
    },
    {
      id: '23',
      resourceId: 'g2',
      start: moment(`${todayTime} 12:00`),
      end: moment(`${todayTime} 18:00`),
      color: '#f9b900',
      rendering: 'background',
    },
    {
      id: '30',
      resourceId: 'g2',
      start: moment(`${todayTime} 18:00`),
      end: moment(`${todayTime} 18:00`).add(8, 'hour'),
      color: '#f56904',
      rendering: 'background',
    },
  ];
  return users;
}


const mapStateToProps = state => (
  {
    notes: state.booking_noteSaga.notes,
    fieldPriceList : state.bookingSaga.fieldPriceList,
    reservationList : state.bookingSaga.reservationList,
    stadiumDoc : state.bookingSaga.stadiumDoc,
    fieldsBooking: state.bookingSaga.fieldsBooking,
    fieldDetail:state.bookingSaga.fieldDetail,
    fieldsPrice:state.bookingSaga.fieldsPrice,

  }
);

export default connect(mapStateToProps, { setNote, setNoteDate, getListBooking })(BookingTable);
