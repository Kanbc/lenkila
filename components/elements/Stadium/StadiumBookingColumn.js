import React from 'react';
import { StadiumBookingColumnItem, Loader } from '../../../components';

const StadiumBookingColumn = ({ title, bookings }) => {
  return (
    <div className="stadium-booking-column card text-center">
      <div className="card-header">
        สนาม {title}
      </div>
      <ul className="list-group list-group-flush">
        {bookings.length > 0 && bookings.map(booking => {
          return (
            <li key={booking.id} className="list-group-item">
              <StadiumBookingColumnItem booking={booking} />
            </li>
          );
        })}
        {bookings.length === 0 && <p style={{margin: '30px'}}>ไม่มีการจองในเวลานี้</p>}
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
