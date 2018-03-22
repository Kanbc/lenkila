import React from 'react';
import CollapseMenu from './CollapseMenu';

const TopNavbar = ({ menulists }) => (
  <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-space-between">
    <a className="navbar-brand d-none d-sm-block" href="#">LENKILA Stadium</a>
    <a className="navbar-brand d-sm-none" href="#">LENKILA</a>
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
    <style jsx>{`
      .navbar {
        background: linear-gradient(270deg,#000 0,#062a64 100%);
        box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
      }
    `}
    </style>
  </nav>
);

export default TopNavbar;
