import React, { Component } from 'react';
import { Layout, BookingCalendar, PageTitle, ButtonModal, Constant, BookingAddModal } from '../components';

class BookingTable extends Component {
  // [GET] - Bookings
  booking = bookingData();

  // [GET] - Field
  fields = fieldData();

  // [GET] - Open/Closed, Business Hours
  fieldDetail = {
    open: '07:00',
    close: '26:00',
    weekdayOpen: [1, 2, 3, 4, 5], // Monday - Friday (0=Sunday)
    minTime: '05:00:00',
    maxTime: '29:00:00',
  };

  render() {
    return (
      <Layout title="การจอง">
        <div className="container">
          <PageTitle title="การจอง" />
          <div className="overall-table">
            <ButtonModal color={Constant.Blue} width="48px" modalName="#add-booking">
              <i className="fa fa-plus" aria-hidden="true" />
              <BookingAddModal title="จองสนาม" type="add-booking" fields={this.fields} />
            </ButtonModal>
          </div>
          <BookingCalendar field={this.fields} booking={this.booking} detail={this.fieldDetail} />
        </div>
        <style jsx>{`
          .overall-table{
            margin-top:0px;
            margin-bottom:20px;
            text-align: right;
          }
        `}
        </style>
      </Layout>
    );
  }
}

function bookingData() {
  const users = [
    {
      id: '1',
      resourceId: 'a',
      title: 'คุณกานต์',
      start: '2018-05-11T09:00:00',
      end: '2018-05-11T11:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '21',
      resourceId: 'g',
      title: 'คุณต้น',
      start: '2018-05-11T09:00:00',
      end: '2018-05-11T11:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '2',
      resourceId: 'c',
      title: 'คุณเอิท',
      start: '2018-05-11T12:00:00',
      end: '2018-05-11T15:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '3',
      resourceId: 'e',
      title: 'คุณจั๊ม',
      start: '2018-05-11T13:00:00',
      end: '2018-05-11T15:00:00',
      color: 'yellow',
      textColor: 'black',
    },
    {
      id: '4',
      resourceId: 'f',
      title: 'คุณหลิ่ว',
      start: '2018-05-11T08:00:00',
      end: '2018-05-11T12:00:00',
      color: 'red',
      textColor: 'black',
      overlap: false,
    },
    // more events here
  ];
  return users;
}

function fieldData() {
  const fields = [
    {
      id: 'a',
      field: 'A',
      side: 'Left',
    },
    // { id: 'b', field: 'A', side: 'Right' },
    {
      id: 'c',
      field: 'B',
      side: 'Left',
    },
    // { id: 'd', field: 'B', side: 'Right' },
    {
      id: 'e',
      field: 'C',
      side: '-',
    },
    {
      id: 'f',
      field: 'D',
      side: '-',
    },
    {
      id: 'g',
      field: 'G',
      children: [
        {
          id: 'g1',
          field: 'Left G',
        }, {
          id: 'g2',
          field: 'Right G',
        },
      ],
    },
  ];
  return fields;
}

export default BookingTable;
