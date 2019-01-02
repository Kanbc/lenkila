// รายการวันนี้
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Layout, DatePickerButton, StadiumBookingColumn, Loader, Constant } from '../components';
import { setFieldData } from '../store';
import Router from 'next/router';
import Login from './login'

class Index extends Component {
  state = {
    currentDate: moment(),
  }

  // [GET] - Fields & Booking
  fields = fieldData();

  componentDidMount(){
    if(!this.props.isLogin) Router.push({ pathname: '/login' })
  }

  render() {
    const { fields,isLogin} = this.props;
    console.log('render!', fields);

    return (
      <Layout title="รายการวันนี้">
        <div className="d-flex align-items-center header">
          <h5 style={{ margin: '0 10px' }}>รายการของ : </h5>
          <DatePicker
            customInput={<DatePickerButton />}
            selected={this.state.currentDate}
            onChange={currentDate => this.setState({ currentDate })}
          />
          <button
            onClick={() => this.setState({ currentDate: moment() })}
            className="btn btn-outline-info pick-td-btn"
          >
            เลือกวันนี้
          </button>
        </div>
        <div className="stadiums-wrapper">
          <div className="row">
            {fields && fields.map(field => {
              return (
                <div key={field.id} className="col-12 col-sm-6 col-md-4">
                  <StadiumBookingColumn title={field.field} bookings={field.bookings} />
                </div>
              );
            })}
            {!fields && <Loader></Loader>}
          </div>
        </div>
        <style jsx>
          {`
            .header {
              height: 60px;
            }
            .pick-td-btn {
              margin-left: 10px;
            }
            .stadiums-wrapper {
              height: calc(100vh - 150px);
              padding: 20px 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              white-space: nowrap;
              padding-right: 5%;
              .item {
                margin-right: 15px;
                height: 100%;
              }
            }
          `}
        </style>
      </Layout>
    );
  }
}

function fieldData() {
  // name:
  // type: (football,badminton)
  // can_split: yes,no
  // detail
  const fields = [
    {
      id: 'a',
      field: 'A',
      side: 'Left',
      bookings: [
        {
          id: '1',
          resourceId: 'a',
          title: 'B: Waiting',
          start: moment().add(4, 'hour').format('HH:mm').toString(),
          end: moment().add(6, 'hour').format('HH:mm').toString(),
          color: 'red',
          textColor: 'white',
        },
        {
          id: '2',
          resourceId: 'a',
          title: 'W: 2 กลุ่ม',
          start: moment().add(7, 'hour').format('HH:mm').toString(),
          end: moment().subtract(10, 'hour').format('HH:mm').toString(),
          color: 'grey',
          textColor: 'white',
        },
        {
          id: '3',
          resourceId: 'a',
          title: 'B: Success',
          start: moment().subtract(4, 'hour').format('HH:mm').toString(),
          end: moment().subtract(2, 'hour').format('HH:mm').toString(),
          color: 'red',
          textColor: 'white',
        },
      ],
    },
    {
      id: 'b',
      field: 'B',
      side: 'Left',
      bookings: [
        {
          id: '4',
          resourceId: 'b',
          title: 'BF: 4 คน',
          start: moment().format('HH:mm').toString(),
          end: moment().subtract(4, 'hour').format('HH:mm').toString(),
          color: 'red',
          textColor: 'white',
        },
      ],
    },
    {
      id: 'c',
      field: 'C',
      side: '-',
      bookings: [],
    },
    {
      id: 'd',
      field: 'D',
      side: '-',
      bookings: [],
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
      bookings: [
        {
          id: '5',
          resourceId: 'g',
          title: 'คุณหลิ่ว',
          start: moment().add(12, 'hour').format('HH:mm').toString(),
          end: moment().add(16, 'hour').format('HH:mm').toString(),
          color: 'green',
          textColor: 'black',
        },
        {
          id: '6',
          resourceId: 'g1',
          title: 'คุณหลิ่ว',
          start: moment().add(10, 'hour').format('HH:mm').toString(),
          end: moment().add(14, 'hour').format('HH:mm').toString(),
          color: 'green',
          textColor: 'black',
        },
        {
          id: '7',
          resourceId: 'g',
          title: 'คุณนิด, คุณโหน่ง',
          start: moment().add(2, 'hour').format('HH:mm').toString(),
          end: moment().add(6, 'hour').format('HH:mm').toString(),
          color: 'green',
          textColor: 'black',
        },
        {
          id: '8',
          resourceId: 'g1',
          title: 'คุณนิด',
          start: moment().add(16, 'hour').format('HH:mm').toString(),
          end: moment().add(19, 'hour').format('HH:mm').toString(),
          color: 'red',
          textColor: 'black',
        },
        {
          id: '9',
          resourceId: 'g2',
          title: 'คุณโหน่ง',
          start: moment().add(20, 'hour').format('HH:mm').toString(),
          end: moment().add(24, 'hour').format('HH:mm').toString(),
          color: 'green',
          textColor: 'black',
        },
      ],
    },
  ];
  return fields;
}

function mapStateToProps(state) {
  return {
    fields: state.fields,
    isLogin:state.auth.isLogin,
  }
}

export default connect(mapStateToProps)(Index);
