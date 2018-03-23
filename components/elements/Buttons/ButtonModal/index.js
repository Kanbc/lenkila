import React from 'react';

const ButtonModal = ({
  children,
  color,
  width,
  modalName,
}) => (
  <div>
    <button type="button" className="btn" data-toggle="modal" data-target={modalName}>
      {children[0]}
    </button>
    {children[1]}
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
  </div>
);

export default ButtonModal;
