import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import moment from 'moment';

moment.locale('th');

const Layout = ({ children, title = 'ระบบจัดการสนาม', router }) => (
  <div className="root">
    <Head>
      <title>{`Lenkila : ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
      <link href="/static/react-datepicker.min.css" rel="stylesheet" />
    </Head>
    <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-space-between">
      <a className="navbar-brand" href="#">LENKILA Stadium</a>
      <div className="d-flex flex-row">
        <Link href="/money">
          <button type="button" className="top-btn btn btn-primary">
            เติมเงิน / จ่ายเงิน
          </button>
        </Link>
        <Link href="/booking-table">
          <button type="button" className="top-btn btn btn-success">
            จองสนาม
          </button>
        </Link>
      </div>
    </nav>
    <div className="content d-flex flex-row">
      {/* Sidebar */}
      <ul className="nav navbar-light flex-column">
        <li className="nav-item">
          <Link href="/">
            <a className={`nav-link ${router.pathname === '/' && 'active'}`}>
              <i className="fa fa-newspaper-o"></i>
              รายการวันนี้
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/money">
            <a className={`nav-link ${router.pathname === '/money' && 'active'}`}>
              <i className="fa fa-money"></i>
              เติมเงิน / จ่ายเงิน
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/booking-table">
            <a className={`nav-link ${router.pathname === '/booking-table' && 'active'}`}>
              <i className="fa fa-calendar-plus-o"></i>
              ตารางจองสนาม
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/field-management">
            <a className={`nav-link ${router.pathname === '/field-management' && 'active'}`}>
              <i className="fa fa-dashboard"></i>
              หน้าจัดการสนาม
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/customer">
            <a className={`nav-link ${router.pathname === '/customer' && 'active'}`}>
              <i className="fa fa-users"></i>
              ข้อมูลลูกค้า
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/customer">
            <a className={`nav-link ${router.pathname === '/user-management' && 'active'}`}>
              <i className="fa fa-address-book-o"></i>
              การจัดการบัญชีผู้ใช้งาน
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${router.pathname === '/connect' && 'active'}`}>
            <i className="fa fa-quote-left"></i>
            LENKILA Connect
          </a>
        </li>
      </ul>

      {/* Page */}
      <div className="page-container">
        {children}
      </div>
    </div>
    <style jsx>{`
      .top-btn {
        margin-right: 20px;
      }
      .navbar {
        background: linear-gradient(270deg,#000 0,#062a64 100%);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
      }
      .nav {
        width: 220px;
        height: 100vh;
        background: linear-gradient(135deg,#000 0,#062a64 100%);
        .nav-item {
          transition: all 0.2s;
          height: 50px;
          font-size: 15px;
          &:hover {
            background-color: #062c69;
          }
          .fa {
            margin-right: 10px;
            width: 25px;
            text-align: center;
            font-size: 20px;
          }
        }
        .nav-link {
          color: #fff;
          height: 100%;
          display: flex;
          align-items: center;
          &.active {
            background-color: #062c69;
          }
        }
      }
      .root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
      .page-container {
        padding: 25px;
        overflow: hidden;
        width: calc(100% - 220px);
      }
    `}
    </style>
  </div>
);

export default withRouter(Layout);
