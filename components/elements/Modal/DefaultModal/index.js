import React from "react";
import Header from "./Header";

const DefaultModal = ({
  children,
  title,
  type,
  percentWidth,
  changeAddmore = () => {},
  changeCurrentModal = () => {},
  setDataBooking = () => {},
  clearCheckData = () => {},
  setDataPrice = () => {},
  setEditFalse = () => {}
}) => (
  <div
    className="modal fade"
    id={type}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="lenkilaModalCenterTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <Header
          title={title}
          changeAddmore={changeAddmore}
          changeCurrentModal={changeCurrentModal}
          setDataBooking={setDataBooking}
          clearCheckData={clearCheckData}
          type={type}
          setDataPrice={setDataPrice}
          setEditFalse={setEditFalse}
        />
        {children}
      </div>
    </div>
    <style jsx>
      {`
        .modal-dialog {
          max-width: ${percentWidth}%;
        }
        @media (max-width: 992px) {
          .modal-dialog {
            max-width: ${parseInt(percentWidth, 10) + 20}%;
          }
        }
        @media (max-width: 768px) {
          .modal-dialog {
            max-width: ${parseInt(percentWidth, 10) + 25}%;
          }
        }
        @media (max-width: 576px) {
          .modal-dialog {
            max-width: ${parseInt(percentWidth, 10) + 26}%;
          }
        }
      `}
    </style>
  </div>
);

export default DefaultModal;
