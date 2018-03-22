import React from 'react';
import Tab from './Tab';

const InnerTopNavbar = ({ tabs }) => (
  <div className="row">
    <div className="btn-group" role="group">
      {
        tabs.map(tab => (
          <Tab key={tab.id} number={tab.id} href={tab.href} name={tab.name} />
        ))
      }
    </div>
    <style jsx>{`
      .row{
        margin-top:10px;
      }
    `}
    </style>
  </div>
);

export default InnerTopNavbar;
