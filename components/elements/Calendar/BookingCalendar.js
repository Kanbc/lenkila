import React, { Component } from 'react';

class BookingCalendar extends Component {
  componentDidMount() {
    $('#calendar').fullCalendar({
      defaultView: 'timelineDay',
      nowIndicator: true,
      header: {
        left: 'prev',
        center: 'title',
        right: 'agendaDay,agendaTwoDay, next',
      },
      slotWidth: 30,
      editable: true,
      selectable: true,
      select(startDate, endDate, jsEvent, view, resource) {
        alert(`selected ${startDate.format()} to ${endDate.format()} on resource ${resource.id}`);
      },
      droppable: true, // this allows things to be dropped onto the calendar
      drop() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      },
      eventOverlap: false,
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
      resourceColumns: [
        {
          labelText: 'สนาม',
          field: 'field',
          width: 100,
        },
      ],

      // Data Get From API
      minTime: this.props.detail.minTime,
      maxTime: this.props.detail.maxTime,
      businessHours: {
        dow: this.props.detail.weekdayOpen,
        start: this.props.detail.open,
        end: this.props.detail.close,
      },
      resources: this.props.field,
      events: this.props.booking,
    });
  }
  render() {
    return (
      <div id="calendar" />
    );
  }
}

export default BookingCalendar;
