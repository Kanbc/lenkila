import React, { Component } from 'react';
import moment from 'moment';
import { ButtonModal, BookingAddModal, BookingEditModal } from '../..';

class BookingCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: moment(),
      startTime: moment().format('LT'),
      endTime: moment().format('LT'),
      resourceId: '',
      selected:'นักเรียน',
    };

    this.setDataBooking = this.setDataBooking.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
    this.setStateBooking = this.setStateBooking.bind(this);
    this.setStateSelected = this.setStateSelected.bind(this);
  }

  componentDidMount() {
    this.updateEvents();
  }
  componentDidUpdate() {
    this.updateEvents();
  }

  setStateBooking = (start_time,end_time,field_id,date) => {
     this.setState({start_time:start_time})
     this.setState({end_time:end_time})
     this.setState({field_id:field_id})
     this.setState({date:date})
  }

  setStateSelected = (selected) => {
    this.setState({selected:selected})
 }

  

  setDataBooking(startTime, endTime, resourceId) {
    // Call API
    // --Input--
    // - startTime
    // - endTime
    // - resourceId
    // เอา date ที่ api return มาไปพ่นใส่ modal

    // this.setStateSelected(
    //   'นักเรียน'
    // )

    this.setStateBooking(
      moment(startTime).format('HH:mm:ss'),
      moment(endTime).format('HH:mm:ss'),
      resourceId,
      moment(this.props.gotoDate).format("YYYY-MM-DD")
    )

    
    this.props.checkPrice({
      start_time:moment(startTime).format('HH:mm:ss'),
      end_time:moment(endTime).format('HH:mm:ss'),
      field_id:resourceId,
      customer_type:this.state.selected,
      date:moment(this.props.gotoDate).format("YYYY-MM-DD")
    })
    // mock data
 

  }

  setOnBusinessHourBooking(startTime, resourceId) {
    this.setState({
      day: moment(startTime),
      startTime: '',
      endTime: '',
      resourceId,
    });
  }
  updateEvents() {
    console.log('that prop',this.props)
    const that = this; // to fix react class method instead of callback of Jquery
    $('#calendar').fullCalendar('destroy');
    $('#calendar').fullCalendar({
      defaultView: 'timelineDay',
      nowIndicator: true,
      // customButtons: {
      //   datePickerButton: {
      //     click() {
      //       $('#calendar').fullCalendar('gotoDate', moment('2018-04-10'));
      //     },
      //   },
      // },
      header: false,
      height: 'auto',
      slotWidth: 30,
      editable: false,
      selectable: that.props.canbook,
      select(startDate, endDate, jsEvent, view, resource) {
        console.log('currentModal',that.props.currentModal)
        const start = startDate.format();
        const end = endDate.format();
        if(that.props.currentModal === '#add-boost'){
          that.props.setStateBoostData({
            start_time:moment(start).format('HH:mm:ss'),
            end_time:moment(end).format('HH:mm:ss'),
            field_id:resource.id,
            field_name:resource.field,
            date:moment(that.props.gotoDate).format("YYYY-MM-DD")
          })
        }
        that.setDataBooking(start, end, resource.id);
        // $('#add-drag-booking').modal('show');
        $(that.props.currentModal).modal('show');
      },
      // droppable: true, // this allows things to be dropped onto the calendar
      // drop() {
      //   if ($('#drop-remove').is(':checked')) { // is the "remove after drop" checkbox checked?
      //     $(this).remove(); // if so, remove the element from the "Draggable Events" list
      //   }
      // },

      // Click at Booking Event
      eventClick(calEvent, jsEvent, view) {
        // alert('Event: ' + calEvent.title);
        // alert('Booking ID: ' + calEvent.id);
        // alert('View: ' + view.name);
        // that.props.checkPrice({
        //       start_time:moment(calEvent.start).format('HH:mm:ss'),
        //       end_time:moment(calEvent.end).format('HH:mm:ss'),
        //       field_id:calEvent.resourceId,
        //       customer_type:that.props.reservationList.find(value=> value.id === calEvent.id).customer_type,
        //       date:moment(calEvent.start).format('YYYY-MM-DD'),
        //  }
        // )

        $(`#edit-booking-modal-${  calEvent.id}`).modal('show');
      },
      eventOverlap: true,
      resourceColumns: [
        {
          labelText: 'สนาม',
          field: 'field',
          width: 100,
        },
      ],
      // resourceAreaWidth: '20%',

      // Data Get From API
      minTime: that.props.detail.minTime,
      maxTime: that.props.detail.maxTime,
      businessHours: {
        dow: that.props.detail.weekdayOpen,
        start: that.props.detail.open,
        end: that.props.detail.close,
      },
      resources: that.props.field,
      events: that.props.booking,
    });
    $('#calendar').fullCalendar('gotoDate', that.props.gotoDate);
  }

  render() {
    const bookings = this.props.booking;
    return (
      <div>
        <div id="calendar" />
        <ButtonModal modalName="#add-drag-booking" bstrap="invisible">
          <i className="fa fa-plus" aria-hidden="true" />
          <BookingAddModal
            title="การจอง"
            type="add-drag-booking"
            customerType={this.props.customerType}
            addBooking={this.props.addBooking}
            start_time={this.state.start_time}
            end_time={this.state.end_time}
            start_time={this.state.start_time}
            field_id={this.state.field_id}
            date={this.state.date}
            setStateSelected={this.setStateSelected}
            selected={this.state.selected}
            checkPriceData={this.props.checkPriceData}
            checkPrice={this.props.checkPrice}
            user={this.props.user}
            setStateAddMore={this.props.setStateAddMore}
            setStateCurrentModal={this.props.setStateCurrentModal}
            setDataBooking={this.props.setDataBooking}
            // fields={this.props.field}

            // day={this.state.day}
            // startTime={this.state.startTime}
            // endTime={this.state.endTime}
            // resourceId={this.state.resourceId}
          />
        </ButtonModal>

        {/* Booking Modal */}
        {this.props.reservationList && this.props.reservationList.map((booking) => (
            <ButtonModal key={this.props.reservationList.id} modalName={`#edit-booking-modal-${booking.id}`} bstrap="invisible">
              <i className="fa fa-plus" aria-hidden="true" />
              <BookingEditModal
                title="ข้อมูลการจอง"
                type={`edit-booking-modal-${booking.id}`}
                booking={booking}
                date={moment(this.props.gotoDate).format("YYYY-MM-DD")}
                customerType={this.props.customerType}
                deleteBooking={this.props.deleteBooking}
                editBooking={this.props.editBooking}
                checkPriceData={this.props.checkPriceData}
                checkPrice={this.props.checkPrice}
                setStateAddMore={this.props.setStateAddMore}
                setStateCurrentModal={this.props.setStateCurrentModal}
              />
            </ButtonModal>
          ))}

      </div>
    );
  }
}

export default BookingCalendar;
