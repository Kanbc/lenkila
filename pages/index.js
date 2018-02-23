// รายการวันนี้
import React, { Component } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { Layout, DatePickerButton, StadiumBookingColumn } from '../components';

class Index extends Component {
  state = {
    currentDate: moment(),
  }

  render() {
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
            <div className="col-12 col-sm-6 col-md-4">
              <StadiumBookingColumn />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <StadiumBookingColumn />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <StadiumBookingColumn />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <StadiumBookingColumn />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <StadiumBookingColumn />
            </div>
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

export default Index;
