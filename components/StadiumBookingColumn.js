import React from 'react';
import { StadiumBookingColumnItem } from '../components';

const StadiumBookingColumn = ({ stadium, booking }) => {
  return (
    <div className="stadium-booking-column card text-center">
      <div className="card-header">
        สนามที่ 1
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
        <li className="list-group-item">
          <StadiumBookingColumnItem />
        </li>
      </ul>
      <div className="card-footer text-muted" />
      <style jsx>{`
        .stadium-booking-column {
          width: 100%;
          max-height: 500px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .list-group {
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
        }
      `}
      </style>
    </div>
  );
};

export default StadiumBookingColumn;
