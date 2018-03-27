import React from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button } from '../..';

const FMHolidayAddModal = ({ title, type }) => (
  <DefaultModal title={title} type={type} percentWidth="50" >
    <Body>
      <div className="row">
        <div className="col-sm-2">
          <p>ชื่อวันหยุด</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="col-sm-2">
          <p>เปิดทำการ</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>วันที่เริ่ม</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="col-sm-2">
          <p>เวลาเริ่ม</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>วันสิ้นสุด</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="col-sm-2">
          <p>เวลาสิ้นสุด</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
      </div>
    </Body>
    <Footer>
      <Button width="100px" bstrap="btn-success" >
        สร้าง
      </Button>
    </Footer>
    <style jsx>{`
      .row{
        margin-top:10px;
        margin-bottom:40px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
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

export default FMHolidayAddModal;
