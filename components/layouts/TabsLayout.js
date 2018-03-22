import React from 'react';
import Layout from './Layout';
import InnerTopNavbar from './Layout/InnerTopNavbar';

const TabsLayout = ({ children, title, tabs }) => (
  <Layout title={title}>
    <div className="container">
      <InnerTopNavbar tabs={tabs} />
      <div className="row title">
        <p>{title}</p>
      </div>
    </div>
    {children}
    <style jsx>{`
      .title{
        text-align:center;
        margin: 25px 0px 0px 0px;
        p{
          margin-bottom:20px;
          font-size:1.5rem;
          font-weight:bold;
          margin-left:auto;
          margin-right:auto;
        }
      }
    `}
    </style>
  </Layout>
);

export default TabsLayout;
