import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import TopNavbar from './TopNavbar';
import LeftNavbar from './LeftNavbar';

moment.locale('th');

const MenuLists = [
  {
    id: 1,
    href: '/',
    name: 'รายการวันนี้',
    iconClass: 'fa-newspaper-o',
  },
  {
    id: 2,
    href: '/payment',
    name: 'เติมเงิน/จ่ายเงิน',
    iconClass: 'fa-money',
  },
  {
    id: 3,
    href: '/booking-table',
    name: 'การจอง',
    iconClass: 'fa-calendar-plus-o',
  },
  {
    id: 4,
    href: '/customer',
    name: 'ข้อมูลลูกค้า',
    iconClass: 'fa-users',
  },
  {
    id: 5,
    href: '/analysis',
    name: 'วิเคราะห์ข้อมูล',
    iconClass: 'fa-line-chart',
  },
  {
    id: 6,
    href: '/field-management',
    name: 'จัดการสนาม',
    iconClass: 'fa-dashboard',
  },
  {
    id: 7,
    href: '/connect',
    name: 'Lenkila Connect',
    iconClass: 'fa-plug',
  },
  {
    id: 8,
    href: '/user-management',
    name: 'การจัดการบัญชีผู้ใช้',
    iconClass: 'fa-address-book-o',
  },
];

const Layout = ({ children, title = 'ระบบจัดการสนาม' }) => (
  <div className="root">
    <Head>
      <title>{`Lenkila : ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/img/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#d58d5b" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
      <link href="/static/react-datepicker.min.css" rel="stylesheet" />
      <link href="/static/fullcalendar/fullcalendar.min.css" rel="stylesheet" />
      <link href="/static/fullcalendar-scheduler/scheduler.min.css" rel="stylesheet" />
      <link href="/static/fullcalendar/fullcalendar.print.min.css" rel="stylesheet" media="print" />
      <script type="text/javascript" src="/static/fullcalendar/lib/moment.min.js" />
    </Head>
    <TopNavbar menulists={MenuLists} />
    <div className="content d-flex flex-row">
      <LeftNavbar menulists={MenuLists} />
      <div className="page-container">
        {children}
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />
    <script type="text/javascript" src="/static/fullcalendar/fullcalendar.min.js" />
    <script type="text/javascript" src="/static/fullcalendar-scheduler/scheduler.min.js" />
    <style jsx>{`
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

export default Layout;
