import React, { Component } from 'react';
// import fullCalendar from 'fullcalendar';
// import $ from 'jquery';
// import moment from 'moment';
// import 'fullcalendar/dist/fullcalendar.css';

class MyCalendar extends Component {
  // componentDidMount() {
  //   $('#calendar').fullCalendar({
  //     header: {
  //       left: 'prev,next today',
  //       center: 'title',
  //       right: 'month,agendaWeek,agendaDay'
  //     },
  //     editable: true,
  //     droppable: true, // this allows things to be dropped onto the calendar
  //     drop: function () {
  //       // is the "remove after drop" checkbox checked?
  //       if ($('#drop-remove').is(':checked')) {
  //         // if so, remove the element from the "Draggable Events" list
  //         $(this).remove();
  //       }
  //     }
  //   })
  // }

  // render() {
  //   return <div id="calendar"></div>;
  // }
  // componentDidMount() {
  //   this.$el = $(this.el);
  //   this.$el.fullCalendar();
  // }

  // componentWillUnmount() {
  //   this.$el.fullCalendar('destroy');
  // }

  render() {
    return <div ref={el => this.el = el} id="calendar" />;
  }
}

export default MyCalendar;
