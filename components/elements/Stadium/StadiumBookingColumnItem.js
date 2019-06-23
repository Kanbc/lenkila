import React, { Component } from 'react';
import moment from 'moment'

class StadiumBookingColumnItem extends Component {
  render() {
    let endTimeMix = secondsToHHMMSS(moment.duration(this.props.booking.end_time).asSeconds() - moment.duration('24:00:00').asSeconds())
    let startTimeMix = secondsToHHMMSS(moment.duration(this.props.booking.start_time).asSeconds() - moment.duration('24:00:00').asSeconds())
    return (
      <div className="item">
        <div className="d-flex align-items-center">
          <div className="time">{`${this.props.booking.start_time > '24:00:00' ? startTimeMix.length === 8 ? startTimeMix.slice(0, -3) : "0"+startTimeMix.slice(0, -3) : this.props.booking.start_time.slice(0, -3)} - ${this.props.booking.end_time > '24:00:00' ? endTimeMix.length === 8 ? endTimeMix.slice(0, -3) : "0"+endTimeMix.slice(0, -3) : this.props.booking.end_time.slice(0, -3)}`}</div>
          <div className="name">
            <p>{this.props.booking.title}</p>
          </div>
        </div>
        <style jsx>{`
          .item {
            width: 100%;
          }
          .time {
            flex: 1.5;
            border-right: 1px solid #ddd;
          }
          .name {
            flex: 1;
            white-space: pre;
          }
          p {
            margin: 0;
            padding-left: 5px;
            word-break: break-all;
            word-wrap: break-word;
            white-space: pre-wrap;
          }
        `}
        </style>
      </div>
    );
  }
}

function secondsToHHMMSS (seconds) {
  return (Math.floor(seconds / 3600)) + ":" + ("0" + Math.floor(seconds / 60) % 60).slice(-2) + ":" + ("0" + seconds % 60).slice(-2)
}

export default StadiumBookingColumnItem;
