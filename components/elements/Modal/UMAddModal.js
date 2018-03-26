import React from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button } from '../..';

const UMAddModal = ({ title, type }) => (
  <DefaultModal title={title} type={type} percentWidth="70" >
    <Body>
      <div className="row">
        <div className="col-sm-1">
          <p>ชื่อ</p>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="col-sm-2">
          <p>นามสกุล</p>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="col-sm-1">
          <p>ชื่อเล่น</p>
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="nickname" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1">
          <p>ID</p>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="user-id" />
        </div>
        <div className="col-sm-2">
          <p>Password</p>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="password" />
        </div>
        <div className="col-sm-1" />
        <div className="col-sm-2" />
      </div>
      <div className="row">
        <div className="col-sm-1">
          <p>Email</p>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="email" />
        </div>
        <div className="col-sm-2">
          <p>เบอร์โทร</p>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="tel" />
        </div>
        <div className="col-sm-1">
          <p>Role</p>
        </div>
        <div className="col-sm-2">
          <select className="form-control" id="role">
            <option>Owner</option>
            <option>Admin</option>
            <option>Staff</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1">
          <p>โน้ต</p>
        </div>
        <div className="col-sm-11">
          <textarea className="form-control" id="note" rows="3" />
        </div>
      </div>
    </Body>
    <Footer>
      <Button width="100px" bstrap="btn-success" >
        สร้าง
      </Button>
      <CancelModal width="100px" bstrap="btn-danger" >
        ยกเลิก
      </CancelModal>
    </Footer>
    <style jsx>{`
      .row{
        margin-top:10px;
        margin-bottom:40px;
        p{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          text-align: center;
        }
      }
      @media (max-width: 576px) { 
        .row{
          margin-top:0px;
          margin-bottom:0px;
          p{
            position: relative;
            text-align: left;
          }
        }
      }
    `}
    </style>
  </DefaultModal>
);

export default UMAddModal;
