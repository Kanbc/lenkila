import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const Tab = ({
  href, name, router, number,
}) => (
  <div>
    <Link href={href}>
      <a className={`nav-link ${router.pathname === href && 'active'}`}>
        <button type="button" className={`btn btn-outline-primary ${number === 1 && 'around-box'}`}>{name}</button>
      </a>
    </Link>
    <style jsx>{`
      .nav-link{
        padding:0;
        button{
          border-color:#39669A;
          color:#39669A;
          width:126px;
          height:51px;
          border-radius: 0px;
          border-left:none;
        }
        .around-box{
          border: 1px solid #39669A;
        }
        button:hover{
          background-color:#39669A;
          color: #ffffff;
        }

      } 
      .active button{
        background-color:#39669A;
        color: #ffffff;
      }
    `}
    </style>
  </div>
);

export default withRouter(Tab);
