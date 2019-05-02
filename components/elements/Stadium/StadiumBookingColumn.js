import React from 'react';
import { StadiumBookingColumnItem, BookingEditModal, Constant } from '../../../components';

const StadiumBookingColumn = ({ title, bookings,reservationList,date,customerType,deleteBooking,editBooking,checkPriceData,checkPrice }) => {
  console.log('bookings',bookings,'reservationList',reservationList)
  return (
    <div className="stadium-booking-column card text-center">
      <div className="card-header">
        สนาม {title}
      </div>
      <ul className="list-group list-group-flush">
        {bookings.length > 0 && bookings.map(booking => {
          return (
            <li className={`list-group-item ${booking.color==="#ffffff"?'grey':booking.color==="#c82333"?"red":booking.color==='#28a745'&&'green'}`} 
            key={booking.id} data-toggle="modal" 
            data-target={`#edit-booking-modal-${booking.id}`}
            onClick={()=>checkPrice({
              start_time:moment(booking.start).format('HH:mm:ss'),
              end_time:moment(booking.end).format('HH:mm:ss'),
              field_id:booking.resourceId,
              customer_type:reservationList.find(value=> value.id === booking.id).customer_type,
              date:moment(date).format('YYYY-MM-DD'),
            })}
            >
              <StadiumBookingColumnItem booking={booking} />
            </li>
          );
        })}
        {bookings.length === 0 && <p style={{margin: '30px'}}>ไม่มีการจองในเวลานี้</p>}
      </ul>
      <div className="card-footer text-muted">
        {bookings && bookings.map(booking => {
          return (
            <BookingEditModal
              key={booking.id}
              title="ข้อมูลการจอง"
              type={`edit-booking-modal-${booking.id}`}
              booking={
                reservationList.reduce((newData,value)=>{
                  if(value.id === booking.id){
                    newData=value
                  }
                  return newData
                },{})

              }
              startTime={booking.start}
              endTime={booking.end}
              resourceId={booking.resourceId}
              date={date}
              customerType={customerType}
              deleteBooking={deleteBooking}
              editBooking={editBooking}
              checkPriceData={checkPriceData}
              checkPrice={checkPrice}

            />
          );
        })}
      </div>
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
          min-height: 250px;
          max-height: 250px;
          -webkit-overflow-scrolling: touch;
          .list-group-item.green{
            background-color: rgba(40, 167, 69, 0.8);
          }
          .list-group-item.red{
            background-color: rgba(200, 35, 51, 0.8);
          }
          .list-group-item.grey{
            background-color: ${Constant.Grey};
          }
        }
        .list-group-item {
          color: white;
        }
      `}
      </style>
    </div>
  );
};

export default StadiumBookingColumn;
