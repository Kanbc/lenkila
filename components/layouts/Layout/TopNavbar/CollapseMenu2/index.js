import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const CollapseMenu = ({
  router, href, name, onClick, dataToggle, dataBackdrop, dataTarget
}) => (
  <li className="nav-item">
    <Link href={href}>
      <a 
        className={`nav-link ${router.pathname === href && 'active'}`} 
        onClick={onClick}
        data-toggle={dataToggle}
        data-backdrop={dataBackdrop}
        data-target={dataTarget}
      >
        {name}
      </a>
    </Link>
    <style jsx>{`
      .nav-item {
        transition: all 0.2s;
        height: 50px;
        font-size: 15px;
        &:hover {
          background-color: #062c69;
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
    `}
    </style>
  </li>
);

export default withRouter(CollapseMenu);
