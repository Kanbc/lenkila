import React from 'react';
import CollapseMenu from './CollapseMenu';

const TopNavbar = ({ menulists }) => (
  <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-space-between">
    <a className="navbar-brand d-none d-sm-block" href="/">LENKILA Stadium</a>
    <a className="navbar-brand d-sm-none" href="/">LENKILA</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav d-lg-none d-xl-none">
        {
          menulists.map(menu => (
            <CollapseMenu
              key={menu.id}
              href={menu.href}
              name={menu.name}
              iconClass={menu.iconClass}
            />
          ))
        }
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown2">
      <ul className="navbar-nav d-none d-sm-block">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Demo Jump
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">ลงชื่อออก</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">ข้อมูลส่วนตัว</a>
            <a className="dropdown-item" href="#">คำถามที่พบบ่อย</a>
            <a className="dropdown-item" href="#">แจ้งปัญหา</a>
          </div>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .navbar {
        background: linear-gradient(270deg,#000 0,#062a64 100%);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
        #navbarNavDropdown2 ul {
          position: absolute;
          right:15px;
          .dropdown-divider{
            border-top: 1px solid #484848;
          }
          .dropdown-item{
            color:#7a7b7b;
            text-align: right;
            padding:.5rem 1.5rem
          }
          .dropdown-item:hover{
            color: #fff;
            background-color: #000;
          }
          .dropdown-menu-right{
            background-color: #000;
            color: rgba(255,255,255,.5);
          }
        }
      }
    `}
    </style>
  </nav>
);

export default TopNavbar;
