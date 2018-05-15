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
  setOnBusinessHourBooking(startTime, resourceId) {
    this.setState({
      day: moment(startTime),
      startTime: '',
      endTime: '',
      resourceId,
    });
  }
  updateEvents() {
    const that = this; // to fix react class method instead of callback of Jquery
    $('#calendar').fullCalendar('destroy');
    $('#calendar').fullCalendar({
      defaultView: 'timelineTwoDays',
      views: {
        timelineTwoDays: {
          type: 'timeline',
          duration: { days: 2 },
        },
      },
      nowIndicator: true,
      // customButtons: {
      //   datePickerButton: {
      //     click() {
      //       $('#calendar').fullCalendar('gotoDate', moment('2018-04-10'));
      //     },
      //   },
      // },
      header: {
        left: 'prev',
        center: 'title',
        right: 'datePickerButton, timelineDay,timelineTwoDays, next',
      },
      height: 'auto',
      slotWidth: 30,
      editable: false,
      selectable: that.props.canbook,
      select(startDate, endDate, jsEvent, view, resource) {
        const start = startDate.format();
        const end = endDate.format();
        // const openTime = that.props.detail.open;
        // const closeTime = that.props.detail.close;

        // const a = moment(moment(start).format('LT'), 'HH:mm') < moment(openTime, 'HH:mm');
        // const b = moment(moment(end).format('LT'), 'HH:mm') > (moment(closeTime, 'HH:mm') - moment('24:00', 'HH:mm'));
        // const c = moment(closeTime).subtract({ hours: 24, minutes: 0, seconds: 0 });
        
        // console.log(moment(moment(start).format('LT'), 'HH:mm'));
        // console.log(moment(openTime, 'HH:mm'));
        // console.log(a);
        // console.log(moment(moment(end).format('LT'), 'HH:mm'));
        // console.log(moment(closeTime, 'HH:mm'));
        
        // console.log(b);
        // console.log(c);
        // if (a) {
        //   that.setOnBusinessHourBooking(start, resource.id);
        // } else {
        that.setDataBooking(start, end, resource.id);
        // }
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
    $('#calendar').fullCalendar('gotoDate', that.props.gotoDate);
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