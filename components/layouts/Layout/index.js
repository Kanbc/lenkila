import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import moment from 'moment';
import TopNavbar from './TopNavbar';

moment.locale('th');

const MenuLists = [
  {
    href: '/',
    name: 'รายการวันนี้',
    iconClass: 'fa-newspaper-o',
  },
  {
    href: '/booking-table',
    name: 'การจอง',
    iconClass: 'fa-calendar-plus-o',
  },
  {
    href: '/customer',
    name: 'ข้อมูลลูกค้า',
    iconClass: 'fa-users',
  },
  {
    href: '/analysis',
    name: 'วิเคราะห์ข้อมูล',
    iconClass: 'fa-line-chart',
  },
  {
    href: '/field-management',
    name: 'จัดการสนาม',
    iconClass: 'fa-dashboard',
  },
  {
    href: '/user-management',
    name: 'การจัดการบัญชีผู้ใช้',
    iconClass: 'fa-address-book-o',
  },
  {
    href: '/connect',
    name: 'แจ้งปัญหาการใช้งาน',
    iconClass: 'fa-bug',
  },
];

const Layout = ({ children, title = 'ระบบจัดการสนาม', router }) => (
  <div className="root">
    <Head>
      <title>{`Lenkila : ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
      <link href="/static/react-datepicker.min.css" rel="stylesheet" />
    </Head>
    <TopNavbar menulists={MenuLists} />
    <div className="content d-flex flex-row">
      {/* Sidebar */}
      <ul className="nav navbar-light flex-column d-none d-lg-block">
        <li className="nav-item">
          <Link href="/">
            <a className={`nav-link ${router.pathname === '/' && 'active'}`}>
              <i className="fa fa-newspaper-o" />
              รายการวันนี้
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/booking-table">
            <a className={`nav-link ${router.pathname === '/booking-table' && 'active'}`}>
              <i className="fa fa-calendar-plus-o" />
              การจอง
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/customer">
            <a className={`nav-link ${router.pathname === '/customer' && 'active'}`}>
              <i className="fa fa-users" />
              ข้อมูลลูกค้า
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/analysis">
            <a className={`nav-link ${router.pathname === '/analysis' && 'active'}`}>
              <i className="fa fa-line-chart" />
              วิเคราะห์ข้อมูล
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/field-management">
            <a className={`nav-link ${router.pathname === '/field-management' && 'active'}`}>
              <i className="fa fa-dashboard" />
              จัดการสนาม
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/user-management">
            <a className={`nav-link ${router.pathname === '/user-management' && 'active'}`}>
              <i className="fa fa-address-book-o" />
              การจัดการบัญชีผู้ใช้
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${router.pathname === '/connect' && 'active'}`}>
            <i className="fa fa-bug" />
            แจ้งปัญหาการใช้งาน
          </a>
        </li>
      </ul>

      {/* Page */}
      <div className="page-container">
        {children}
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />
    <style jsx>{`
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
      .navbar-nav{
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
        padding: 25px 25px 100px 25px;
        overflow: hidden;
        width: calc(100% - 220px);
        height: 100vh; 
        overflow-y: scroll;
      }
      @media (max-width: 992px) { 
        .page-container {
          padding: 25px 25px 100px 25px;
          width: 100%;
        }
      }
      @media (max-width: 576px) { 
        .page-container {
          padding: 10px 10px 50px 10px;
          width: 100%;
        }
      }
    `}
    </style>
  </div>
);

export default withRouter(Layout);
