import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import store from '../store/store';
import { Layout } from '../components';

class Analysis extends Component {
  render() {
    return (
      <Layout title="วิเคราะห์ข้อมูล" >
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

export default Analysis;
