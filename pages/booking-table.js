import React, { Component } from 'react';
import { Layout, MyCalendar } from '../components';

class BookingTable extends Component {
  render() {
    return (
      <Layout title="การจอง">
        <MyCalendar />
      </Layout>
    );
  }
}

export default BookingTable;
