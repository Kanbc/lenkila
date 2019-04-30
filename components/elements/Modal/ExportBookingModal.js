import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button } from '../..';
import { CSVLink } from "react-csv";

class ExportBookingModal extends Component {
 
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
                selected={this.props.startTimeExport}
                onChange={startTime => {
                  this.props.setStateStartExport({ startTime })
                  this.props.exportCsv({
                    start_date:moment(startTime).format('YYYY-MM-DD'),
                    end_date:moment(this.props.endTimeExport).format('YYYY-MM-DD')
                  })
                  }
                }
                
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
                selected={this.props.endTimeExport}
                onChange={endTime => {
                  this.props.setStateEndExport({ endTime })
                  this.props.exportCsv({
                    start_date:moment(this.props.startTimeExport).format('YYYY-MM-DD'),
                    end_date:moment(endTime).format('YYYY-MM-DD')
                  })
                  }
                }
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
