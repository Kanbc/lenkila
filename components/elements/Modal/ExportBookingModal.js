import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button } from '../..';
import { CSVLink } from "react-csv";

class ExportBookingModal extends Component {
  state = {
    startDate: moment().subtract(1, 'months'),
    endDate: moment(),
  }

  exportToCSV(start, end) {
    // ยิง API
    // ทำไรก็ทำในนี้
    this.props.exportCsv(
      {
        start_date:moment(start).format('YYYY-MM-DD'),
        end_date:moment(end).format('YYYY-MM-DD')
      }
    )

    this.setState({
      startDate: start,
      endDate: end,
    });
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="45">
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>วันเริ่มต้น</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.startDate}
                onChange={startDate => this.exportToCSV(startDate, this.state.endDate)}
                className="form-control"
              />
            </div>
            <div className="col-sm-2">
              <p>วันสิ้นสุด</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.endDate}
                onChange={endDate => this.exportToCSV(this.state.startDate, endDate)}
                className="form-control"
              />
            </div>
          </div>
        </Body>
        <Footer>
          <CSVLink data={this.props.csv}   filename={"lenkila.csv"}>
            <Button width="100px" bstrap="btn-success">
              Export
            </Button>
          </CSVLink>
          <CancelModal width="100px" bstrap="btn-danger">
            Cancel
          </CancelModal>
        </Footer>
        <style jsx>
          {` 
            .row {
              margin-top: 10px;
              margin-bottom: 40px;
              p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                text-align: center;
              }
            }
            .lenkila_time_picker {
              font-size:100px;
              .react-datepicker__time-container {
                .react-datepicker__time {
                  .react-datepicker__time-box {
                    ul.react-datepicker__time-list {
                      padding:0;
                      background-color:black;      
                    }
                  }
                }
              }
            }
            @media (max-width: 576px) {
              .row {
                margin-top: 0;
                margin-bottom: 0;
                p {
                  position: relative;
                  text-align: left;
                }
              }
            }
          `}
        </style>
      </DefaultModal>
    );
  }
}

export default ExportBookingModal;
