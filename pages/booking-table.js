import React, { Component } from 'react';
import { Layout, MyCalendar } from '../components';

class BookingTable extends Component {
  render() {
    return (
      <Layout title="การจอง">
        <div className="container">
          <MyCalendar />
        </div>
      </Layout>
    );
  }
}

export default BookingTable;
