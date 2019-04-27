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
      bookingData: [],
    };

    this.setDataBooking = this.setDataBooking.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
  }

  componentDidMount() {
    this.updateEvents();
  }
  componentDidUpdate() {
    this.updateEvents();
  }

  setDataBooking(startTime, endTime, resourceId) {
    // Call API
    // --Input--
    // - startTime
    // - endTime
    // - resourceId
    // เอา date ที่ api return มาไปพ่นใส่ modal

    // mock data
    const bookingData = [
      {
        id: 1,
        resourceId: 'a',
        day: moment(startTime),
        startTime: moment(startTime).format('LT'),
        endTime: moment(startTime).add(2, 'hours').format('LT'),
        price: 1000,
        name: 'A',
      },
      {
        id: 2,
        resourceId: 'a',
        day: moment(startTime),
        startTime: moment(startTime).add(2, 'hours').format('LT'),
        endTime: moment(endTime).add(2, 'hours').format('LT'),
        price: 800,
        name: 'A',
      },
      {
        id: 3,
        resourceId: 'a',
        day: moment(startTime),
        startTime: moment(endTime).add(2, 'hours').format('LT'),
        endTime: moment(endTime).add(4, 'hours').format('LT'),
        price: null,
        name: 'A',
      },
    ];

    this.setState({
      bookingData
    });
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
        const start = startDate.format();
        const end = endDate.format();
        that.setDataBooking(start, end, resource.id);
        $('#add-drag-booking').modal('show');
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
    // console.log('render!', bookings);
    return (
      <div>
        <div id="calendar" />
        <ButtonModal modalName="#add-drag-booking" bstrap="invisible">
          <i className="fa fa-plus" aria-hidden="true" />
          <BookingAddModal
            title="การจอง"
            type="add-drag-booking"
            booking={this.state.bookingData}
            // fields={this.props.field}

            // day={this.state.day}
            // startTime={this.state.startTime}
            // endTime={this.state.endTime}
            // resourceId={this.state.resourceId}
          />
        </ButtonModal>

        {/* Booking Modal */}
        {bookings && bookings.map((booking) => (
            <ButtonModal key={booking.id} modalName={`#edit-booking-modal-${booking.id}`} bstrap="invisible">
              <i className="fa fa-plus" aria-hidden="true" />
              <BookingEditModal
                title="ข้อมูลการจอง"
                type={`edit-booking-modal-${booking.id}`}
                startTime={booking.start}
                endTime={booking.end}
                resourceId={booking.resourceId}
              />
            </ButtonModal>
          ))}

      </div>
    );
  }
}

export default BookingCalendar;
