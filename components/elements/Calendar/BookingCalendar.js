import React, { Component } from 'react';
import moment from 'moment';
import { Constant, ButtonModal, BookingDragAddModal } from '../..';

class BookingCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: moment(),
      startTime: moment().format('LT'),
      endTime: moment().format('LT'),
      resourceId: '',
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
    this.setState({
      day: moment(startTime),
      startTime: moment(startTime).format('LT'),
      endTime: moment(endTime).format('LT'),
      resourceId,
    });
  }
  updateEvents() {
    const that = this; // to fix react class method instead of callback of Jquery
    $('#calendar').fullCalendar('destroy');
    $('#calendar').fullCalendar({
      defaultView: 'timelineDay',
      nowIndicator: true,
      header: {
        left: 'prev',
        center: 'title',
        right: 'agendaDay,agendaTwoDay, next',
      },
      height: 'auto',
      slotWidth: 30,
      editable: false,
      selectable: that.props.canbook,
      select(startDate, endDate, jsEvent, view, resource) {
        that.setDataBooking(startDate.format(), endDate.format(), resource.id);
        $('#add-drag-booking').modal('show');
      },
      // droppable: true, // this allows things to be dropped onto the calendar
      // drop() {
      //   if ($('#drop-remove').is(':checked')) { // is the "remove after drop" checkbox checked?
      //     $(this).remove(); // if so, remove the element from the "Draggable Events" list
      //   }
      // },
      eventOverlap: false,
      resourceColumns: [
        {
          labelText: 'สนาม',
          field: 'field',
          width: 100,
        },
      ],
      // resourceColumns: [
      // {
      //   group: true,
      //   labelText: 'สนาม',
      //   field: 'field',
      // },
      //   {
      //     labelText: 'ฝั่ง',
      //     field: 'side',
      //   },
      // ],
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
  }

  render() {
    return (
      <div>
        <div id="calendar" />
        <ButtonModal color={Constant.Blue} width="48px" modalName="#add-drag-booking" bstrap="invisible">
          <i className="fa fa-plus" aria-hidden="true" />
          <BookingDragAddModal
            title="จองสนาม"
            type="add-drag-booking"
            fields={this.props.field}
            day={this.state.day}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            resourceId={this.state.resourceId}
          />
        </ButtonModal>
      </div>
    );
  }
}

export default BookingCalendar;
