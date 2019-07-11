import React from "react";

const CancelModal = ({
  children,
  color,
  width,
  bstrap,
  onClick,
  dismiss = "modal",
  disabled = false
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`btn ${bstrap}`}
    data-dismiss={dismiss}
    onClick={onClick}
  >
    {children}
    <style jsx>
      {`
        button {
          background-color: ${color};
          cursor: pointer;
          width: ${width};
          color: #ffffff;
        }
        @media (max-width: 576px) {
          button {
            width: 50px;
          }
        }
      `}
    </style>
  </button>
);

export default CancelModal;
