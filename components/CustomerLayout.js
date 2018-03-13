import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '../components';


const CustomerLayout = ({ children, title = 'ข้อมูลลูกค้า', router }) => (
  <Layout title="ข้อมูลลูกค้า">
    <div className="container">
      <div className="row fm-row-one">
        <div className="btn-group" role="group">
          <Link href="/customer">
            <a className={`nav-link ${router.pathname === '/customer' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary around-box">ข้อมูลลูกค้า</button>
            </a>
          </Link>
          <Link href="/customer-type">
            <a className={`nav-link ${router.pathname === '/customer-type' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary">ประเภทลูกค้า</button>
            </a>
          </Link>
        </div>
      </div>
      <div className="row fm-row-two">
        <p>{title}</p>
      </div>
      {children}
    </div>
    <style jsx>{`
      .fm-row-one{
        margin-top:10px;
      }
      .fm-row-one button{
        border-color:#39669A;
        color:#39669A;
        width:126px;
        height:51px;
        border-radius: 0px;
        border-left:none;
      }
      .fm-row-one .around-box{
        border: 1px solid #39669A;
      }
      .fm-row-one button:hover{
        background-color:#39669A;
        color: #ffffff;
      }
      .fm-row-one .active button{
        background-color:#39669A;
        color: #ffffff;
      }
      .btn-group a{
        padding:0;
      }
      .fm-row-two{
        text-align:center;
        margin: 25px 0px 0px 0px;
      }
      .fm-row-two p{
        margin-bottom:20px;
        font-size:1.5rem;
        font-weight:bold;
        margin-left:auto;
        margin-right:auto;
      }
    `}
    </style>
  </Layout>
);

export default withRouter(CustomerLayout);
