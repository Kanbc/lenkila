import React from 'react';
import Layout from './Layout';
import InnerTopNavbar from './Layout/InnerTopNavbar';
import PageTitle from '../elements/PageTitle';

const TabsLayout = ({ children, title, tabs }) => (
  <Layout title={title}>
    <div className="container">
      <InnerTopNavbar tabs={tabs} />
      <PageTitle title={title} />
    </div>
    {children}
  </Layout>
);

export default TabsLayout;
