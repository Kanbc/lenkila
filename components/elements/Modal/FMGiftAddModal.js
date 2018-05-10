import React from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button } from '../..';

const FMGiftAddModal = ({ title, type }) => (
  <DefaultModal title={title} type={type} percentWidth="50" >
    <Body>
      <div className="row">
        <div className="col-sm-2">
          <p>ชื่อ</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="col-sm-2">
          <p>วันสิ้นสุด</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>ประเภท</p>
        </div>
        <div className="col-sm-4">
          <select className="custom-select" defaultValue="0">
            <option value="0">%</option>
            <option value="1">เงิน</option>
          </select>
        </div>
        <div className="col-sm-2">
          <p>ราคา</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="monday">
              <input className="form-check-input" type="checkbox" id="monday" value="monday" />
              Mon
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="tuesday">
              <input className="form-check-input" type="checkbox" id="tuesday" value="tuesday" />
              Tue
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="wednesday">
              <input className="form-check-input" type="checkbox" id="wednesday" value="wednesday" />
              Wed
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="thrday">
              <input className="form-check-input" type="checkbox" id="thrday" value="thrday" />
              Thu
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="friday">
              <input className="form-check-input" type="checkbox" id="friday" value="friday" />
              Fri
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="satday">
              <input className="form-check-input" type="checkbox" id="satday" value="satday" />
              Sat
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="sunday">
              <input className="form-check-input" type="checkbox" id="sunday" value="sunday" />
              Sun
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="holday">
              <input className="form-check-input" type="checkbox" id="holday" value="holday" />
              Hol
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox6">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
              ทั้งวัน
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>เวลาเริ่ม</p>
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
      <div className="row">
        <div className="col-sm-2">
          <p>จำนวน</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="col-sm-2">
          <p>ครั้งต่อคน</p>
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

export default FMGiftAddModal;