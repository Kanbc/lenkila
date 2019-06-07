import React from 'react';

const CancelModal = ({
  children,
  color,
  width,
  bstrap,
  onClick,
  disabled=false
}) => (
  <button type="button" disabled={disabled} className={`btn ${bstrap}`} data-dismiss="modal" onClick={onClick} >
    {children}
    <style jsx>{`
      button{
        background-color: ${color};
        cursor:pointer;
        width: ${width};
        color: #ffffff;
      }
      @media (max-width: 576px) { 
        button{
          width: 50px;
        }
      }
    `}
    </style>
  </button>
);

export default CancelModal;
