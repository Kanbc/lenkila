import React from 'react';

import { Layout } from '../components';


const Management = () => (
  <Layout title="การจัดการบัญชีผู้ใช้">
    <div className="container">
      <div className="row um-one-row">
        <p className="lenkila-header">การจัดการบัญชีผู้ใช้</p>
      </div>
      <div className="row um-two-row">
        <div className="col">
          <input className="form-control um-search" type="text" placeholder="ค้นหา..." />
        </div>
        <div className="col" />
        <div className="col" />
        <div className="col">
          <button type="button" className="btn btn-primary um-add">+</button>
        </div>
      </div>
      <div className="row um-three-row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ชื่อ - นามสกุล</th>
              <th scope="col">ชื่อเล่น</th>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td><button type="button" className="btn btn-secondary"><i className="fa fa-pencil" /></button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td><button type="button" className="btn btn-secondary"><i className="fa fa-pencil" /></button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td><button type="button" className="btn btn-secondary"><i className="fa fa-pencil" /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <style jsx>{`
      .lenkila-header {
        margin: 30px auto 20px auto;
        font-weight:bold;
        font-size:20px;
      }
      .um-search{
        position:absolute;
        left: 0;
      }
      .um-add{
        position:absolute;
        right: 0;
        widht:300px;
      }
      .um-two-row{
        position:relative;
        height:60px;
      }
    `}
    </style>
  </Layout>
);
export default Management;
