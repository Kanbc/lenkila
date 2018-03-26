import React from 'react';

const Body = ({ children }) => (
  <div className="modal-body">
    {children}
    <style jsx>{`
      .modal-body{
        padding-left:60px;
        padding-right:60px;
      }
      @media (max-width: 576px) { 
        .modal-body{
          padding-bottom:30px;
          padding-top:0px;
        }
      }
    `}
    </style>
  </div>
);

export default Body;