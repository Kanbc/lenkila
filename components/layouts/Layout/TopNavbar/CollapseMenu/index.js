import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const CollapseMenu = ({
  router, href, name, iconClass,
}) => (
  <li className="nav-item">
    <Link href={href}>
      <a className={`nav-link ${router.pathname === href && 'active'}`}>
        <i className={`fa ${iconClass}`} />
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
        .fa {
          margin-right: 10px;
          width: 25px;
          text-align: center;
          font-size: 20px;
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
