import React, { Component } from 'react';
import { Layout } from '../components';

class Connect extends Component {
  render() {
    return (
      <Layout title="Connect">
        <p>บริการนี้ยังไม่เปิดให้บริการ</p>
        <style jsx>{`
          p{
            text-align:center;
            color: #9B9B9B;
            margin-top:100px;
          }
        `}
        </style>
      </Layout>
    );
  }
}

export default Connect;
