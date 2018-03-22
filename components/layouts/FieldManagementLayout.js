import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '../';


const FieldManagementLayout = ({ children, title = 'ข้อมูลสนาม', router }) => (
  <Layout title="จัดการสนาม">
    <div className="container">
      <div className="row fm-row-one">
        <div className="btn-group" role="group">
          <Link href="/field-management">
            <a className={`nav-link ${router.pathname === '/field-management' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary around-box">ข้อมูลสนาม</button>
            </a>
          </Link>
          <Link href="/field-management-field">
            <a className={`nav-link ${router.pathname === '/field-management-field' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary">สนาม</button>
            </a>
          </Link>
          <Link href="/field-management-price">
            <a className={`nav-link ${router.pathname === '/field-management-price' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary">ราคา</button>
            </a>
          </Link>
          <Link href="/field-management-holiday">
            <a className={`nav-link ${router.pathname === '/field-management-holiday' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary">วันหยุด</button>
            </a>
          </Link>
          <Link href="/field-management-gift">
            <a className={`nav-link ${router.pathname === '/field-management-gift' && 'active'}`}>
              <button type="button" className="btn btn-outline-primary">Gift Code</button>
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

export default withRouter(FieldManagementLayout);
