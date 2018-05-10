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

      // Data Get From API
      minTime: '05:00:00',
      maxTime: '29:00:00',
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5], // Monday - Friday
        start: '07:00', // a start time (10am in this example)
        end: '26:00', // an end time (6pm in this example)
      },
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
      events: [
        {
          id: '1',
          resourceId: 'a',
          title: 'คุณกานต์',
          start: '2018-05-10T09:00:00',
          end: '2018-05-10T10:00:00',
          color: 'yellow',
          textColor: 'black',
        },
        {
          id: '2',
          resourceId: 'a',
          title: 'คุณเอิท',
          start: '2018-05-10T09:00:00',
          end: '2018-05-10T13:00:00',
          color: 'yellow',
          textColor: 'black',
        },
        // more events here
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
