import React from 'react';

const Button = ({ children, color, width }) => (
  <button type="button" className="btn" >
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

export default Button;
