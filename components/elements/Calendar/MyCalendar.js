import React, { Component } from 'react';

class MyCalendar extends Component {
  componentDidMount() {
    $('#calendar').fullCalendar({
      defaultView: 'timelineDay',
      nowIndicator: true,
      header: {
        left: 'prev',
        center: 'title',
        right: 'agendaDay,agendaTwoDay, next',
      },
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5], // Monday - Friday
        start: '07:00', // a start time (10am in this example)
        end: '26:00', // an end time (6pm in this example)
      },
      slotWidth: 30,
      editable: true,
      selectable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      },

      // Data Get From API
      minTime: '05:00:00',
      maxTime: '29:00:00',
      resourceColumns: [
        {
          labelText: 'สนาม',
          field: 'field',
          width: 100,
        },
      ],
      resources: [
        {
          id: 'a',
          field: 'A',
        },
        {
          id: 'b',
          field: 'B',
        },
        {
          id: 'c',
          field: 'C',
        },
        {
          id: 'd',
          field: 'D',
        },
      ],
    });
  }
  render() {
    return (
      <div id="calendar">
        <style jsx>{`
          .fc-resource-area .fc-cell-content, .fc-timeline .fc-cell-text {
            text-align:center;
          }
        `}
        </style>
      </div>
    );
  }
}

export default MyCalendar;
