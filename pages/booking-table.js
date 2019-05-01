import React, { Component } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { setNote, setNoteDate, getListBooking, addBooking,checkPrice,getCustomerType,deleteBooking,editBooking,exportCsv } from '../store';
import { Layout, BookingCalendar, PageTitle, Button, ButtonModal, Constant, NoteAddModal, BoostAddModal, ExportBookingModal } from '../components';

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canDragBooking: false,
      gotoDate: moment(),
      customerTypeKey:'นักเรียน',
      startTimeExport: moment("1","DD"),
      endTimeExport: moment(),
    };

    this.canBooking = this.canBooking.bind(this);
    this.today = this.today.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.previousDay = this.previousDay.bind(this);
    this.setStateStartExport = this.setStateStartExport.bind(this);
    this.setStateEndExport = this.setStateEndExport.bind(this);
 
  }
  setStateStartExport(startTime){
    this.setState({ startTimeExport : startTime })
  }

  setStateEndExport(endTime){
    this.setState({ endTimeExport : endTime })
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
    this.props.getListBooking(today.format('YYYY-MM-DD'));
  }

  nextDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).add(1, 'days'),
    });
    this.props.setNoteDate(this.state.gotoDate.add(1, 'days').format('YYYY-MM-DD'));
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'));
  }

  previousDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).subtract(1, 'days'),
    });
    this.props.setNoteDate(this.state.gotoDate.subtract(1, 'days').format('YYYY-MM-DD'));
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'))
  }

  // [GET] - Bookings




  // [GET] - Open/Closed, Business Hours
  // ข้อมูลสนามภาพรวม

  componentDidMount() {
    // this.props.setNote();
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'))
    this.props.setNoteDate(this.state.gotoDate.format('YYYY-MM-DD'));
    this.props.getCustomerType()
  }
  render() {
    console.log('csv',this.props.csv)
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
                  onChange={gotoDate => {
                    this.setState({ gotoDate })
                    }
                  }
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
                <ButtonModal color={Constant.Blue} width="100px" modalName="#export-booking" onClick={()=>this.props.exportCsv(
                  {
                    start_date:moment(this.state.startTimeExport).format('YYYY-MM-DD'),
                    end_date:moment(this.state.endTimeExport).format('YYYY-MM-DD')
                  }
                )}>
                  Export
                  <ExportBookingModal
                    title="Export Booking"
                    type="export-booking"
                    startTimeExport={this.state.startTimeExport}
                    endTimeExport={this.state.endTimeExport}
                    exportCsv={this.props.exportCsv}
                    setStateStartExport={this.setStateStartExport}
                    setStateEndExport={this.setStateEndExport}
                    csv={this.props.csv}
                  />
                </ButtonModal>
              </div>
            </div>
          </div>
          <BookingCalendar
            field={this.props.fieldsBooking}
            booking={[...this.props.reservationAddData,...this.props.fieldsPrice]}
            detail={this.props.fieldDetail}
            canbook={this.state.canDragBooking}
            gotoDate={this.state.gotoDate}
            addBooking={this.props.addBooking}
            customerType={this.props.customerType}
            checkPriceData={this.props.checkPriceData}
            checkPrice={this.props.checkPrice}
            deleteBooking={this.props.deleteBooking}
            reservationList={this.props.reservationList}
            editBooking={this.props.editBooking}
            user={this.props.user}
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



const mapStateToProps = state => (
  {
    notes: state.booking_noteSaga.notes,
    fieldPriceList : state.bookingSaga.fieldPriceList,
    reservationList : state.bookingSaga.reservationList,
    stadiumDoc : state.bookingSaga.stadiumDoc,
    fieldsBooking: state.bookingSaga.fieldsBooking,
    fieldDetail:state.bookingSaga.fieldDetail,
    fieldsPrice:state.bookingSaga.fieldsPrice,
    customerType: state.customer_typeSaga.customerType,
    checkPriceData:state.bookingSaga.checkPriceData,
    reservationAddData:state.bookingSaga.reservationAddData,
    reservationList:state.bookingSaga.reservationList,
    csv:state.bookingSaga.csv,
    user:state.auth.user,
  }
);

export default connect(mapStateToProps, { setNote, setNoteDate, getListBooking, addBooking, checkPrice, getCustomerType,deleteBooking,editBooking,exportCsv })(BookingTable);
