import React from 'react';
import Menu from './Menu';

const LeftNavbar = ({ menulists }) => (
  <ul className="nav navbar-light flex-column d-none d-lg-block">
    {
      menulists.map(menu => (
        <Menu key={menu.id} href={menu.href} name={menu.name} iconClass={menu.iconClass} />
      ))
    }
    <style jsx>{`
      .nav {
        width: 220px;
        height: 100vh;
        background: linear-gradient(135deg,#000 0,#062a64 100%);
      }
    `}
    </style>
  </ul>
);

export default LeftNavbar;
