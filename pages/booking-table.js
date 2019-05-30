import React, { Component } from 'react';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { setDataBooking } from '../sagas/bookingSaga'
import { setNote, setNoteDate, getListBooking, addBooking, checkPrice, getCustomerType, deleteBooking, editBooking, exportCsv,getListBoost,addBoost,getEditMainByid  } from '../store';
import { Layout, BookingCalendar, PageTitle, Button, ButtonModal, Constant, NoteAddModal, BoostAddModal, ExportBookingModal,Loader } from '../components';

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canDragBooking: false,
      gotoDate: moment(),
      customerTypeKey: 'นักเรียน',
      startTimeExport: moment().subtract(1, 'months'),
      endTimeExport: moment(),
      addMore: false,
      boostData:{start_time:'',end_time:'',field_name:'-'},
      currentModal: '#add-drag-booking', // #add-drag-booking (add booking), #edit-booking-modal-${id} (edit booking ลอง booking พี่ id=75), #add-boost (add boost)
    };

    this.canBooking = this.canBooking.bind(this);
    this.today = this.today.bind(this);
    this.nextDay = this.nextDay.bind(this);
    this.previousDay = this.previousDay.bind(this);
    this.setStateAddMore = this.setStateAddMore.bind(this);
    this.setStateCurrentModal = this.setStateCurrentModal.bind(this);
    this.setStateBoostData = this.setStateBoostData.bind(this);
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
    this.props.getListBoost(today.format('YYYY-MM-DD'));

  }

  nextDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).add(1, 'days'),
    });
    this.props.setNoteDate(this.state.gotoDate.add(1, 'days').format('YYYY-MM-DD'));
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'));
    this.props.getListBoost(this.state.gotoDate.format('YYYY-MM-DD'));

  }

  previousDay() {
    this.setState({
      gotoDate: moment(this.state.gotoDate).subtract(1, 'days'),
    });
    this.props.setNoteDate(this.state.gotoDate.subtract(1, 'days').format('YYYY-MM-DD'));
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'));
    this.props.getListBoost(this.state.gotoDate.format('YYYY-MM-DD'));

  }

  setStateAddMore(boolean){
    this.setState({
      addMore:boolean,
    })
  }

  setStateCurrentModal(item){
    this.setState({
      currentModal:item,
    })
  }

  setStateBoostData(item){
    this.setState({
      boostData:item
    })
  }

  // [GET] - Bookings


  // [GET] - Open/Closed, Business Hours
  // ข้อมูลสนามภาพรวม

  componentDidMount() {
    // this.props.setNote();
    this.props.getListBooking(this.state.gotoDate.format('YYYY-MM-DD'));
    this.props.setNoteDate(this.state.gotoDate.format('YYYY-MM-DD'));
    this.props.getListBoost(this.state.gotoDate.format('YYYY-MM-DD'));
    this.props.getCustomerType();
    
    this.setStateAddMore(false);
    this.setStateCurrentModal('#add-drag-booking')
    this.props.setDataBooking({
      checkPriceData:[],
      paramsCheckprice:[],
      paramsFieldDocList:[],
      editFieldDocList:[],
      editAddmore:false
    })
  }
  render() {
    return (
      <Layout title="การจอง">
        <div className="container">
          <PageTitle title="การจอง" />
          <div className="row">
            <div className="col-sm-12 above-everything">
              <div className="lk-box space-r align-middle">
                <Button color={Constant.Blue} width="50px" onClick={this.previousDay} isDisable={this.state.addMore}>
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
                  onChange={(gotoDate) => {
                    this.setState({ gotoDate });
                    this.props.getListBooking(gotoDate.format('YYYY-MM-DD'));
                    this.props.setNoteDate(gotoDate.format('YYYY-MM-DD'));
                    }
                  }
                  disabled={this.state.addMore}
                />
              </div>
              <div className="lk-box space-r align-middle">
                <Button color={Constant.Blue} width="70px" onClick={this.today} isDisable={this.state.addMore}>
                  วันนี้
                </Button>
              </div>
              <div className="lk-box space-r align-middle">
                <Button color={Constant.Blue} width="50px" onClick={this.nextDay} isDisable={this.state.addMore}>
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="lk-box space-r">
                <ButtonModal color={Constant.Orange} width="100px" isDisable={this.state.addMore} modalName="#add-note">
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
                    disabled={this.state.addMore}
                  />
                </div>
              </div>
              <div className="lk-box">
                <div className="lk-box space-r">
                  <ButtonModal color={Constant.Red} width="100px" isDisable={this.state.addMore} modalName="#add-boost">
                    Boost
                    <BoostAddModal title="Boost" type="add-boost" fields={this.fields}
                      setStateAddMore={this.setStateAddMore}
                      setStateCurrentModal={this.setStateCurrentModal}
                      setDataBooking={this.props.setDataBooking}
                      addBoost={this.props.addBoost}
                      detail={this.props.fieldDetail}
                      gotoDate={this.state.gotoDate}
                      boostData={this.state.boostData}
                    />
                  </ButtonModal>
                </div>
              </div>
              <div className="lk-box float-right">
                <ButtonModal
                  color={Constant.Blue}
                  width="100px"
                  isDisable={this.state.addMore}
                  modalName="#export-booking"
                  onClick={() => this.props.exportCsv({
                    start_date: moment(this.state.startTimeExport).format('YYYY-MM-DD'),
                    end_date: moment(this.state.endTimeExport).format('YYYY-MM-DD'),
                  })}
                >
                  Export
                  <ExportBookingModal
                    title="Export Booking"
                    type="export-booking"

                    exportCsv={this.props.exportCsv}

                    csv={this.props.csv}
                  />
                </ButtonModal>
              </div>
            </div>
          </div>
          {this.props.isLoading ? <Loader /> :
          <BookingCalendar
            field={this.props.fieldsBooking}
            booking={[...this.props.reservationAddData, ...this.props.fieldsPrice,...this.props.boostList]}
            detail={this.props.fieldDetail}
            canbook={this.state.canDragBooking || this.state.addMore}
            gotoDate={this.state.gotoDate}
            addBooking={this.props.addBooking}
            customerType={this.props.customerType}
            checkPriceData={this.props.checkPriceData}
            checkPrice={this.props.checkPrice}
            deleteBooking={this.props.deleteBooking}
            reservationList={this.props.reservationList}
            editBooking={this.props.editBooking}
            user={this.props.user}
            addMore={this.state.addMore}
            currentModal={this.state.currentModal}
            setStateAddMore={this.setStateAddMore}
            setStateCurrentModal={this.setStateCurrentModal}
            setDataBooking={this.props.setDataBooking}
            setStateBoostData={this.setStateBoostData}
            getEditMainByid={this.props.getEditMainByid}
          />
        }
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
    fieldPriceList: state.bookingSaga.fieldPriceList,
    reservationList: state.bookingSaga.reservationList,
    stadiumDoc: state.bookingSaga.stadiumDoc,
    fieldsBooking: state.bookingSaga.fieldsBooking,
    fieldDetail: state.bookingSaga.fieldDetail,
    fieldsPrice: state.bookingSaga.fieldsPrice,
    customerType: state.customer_typeSaga.customerType,
    checkPriceData: state.bookingSaga.checkPriceData,
    reservationAddData: state.bookingSaga.reservationAddData,
    reservationList: state.bookingSaga.reservationList,
    boostList: state.bookingSaga.boostList,
    csv: state.bookingSaga.csv,
    user: state.auth.user,
    isLoading:state.bookingSaga.isLoading,
  }
);

export default connect(mapStateToProps, {
  setNote, setNoteDate, getListBooking, addBooking, checkPrice, getCustomerType, deleteBooking, editBooking, exportCsv,getListBoost,addBoost,setDataBooking,getEditMainByid
})(BookingTable);
