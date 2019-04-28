import React from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal } from '../..';

const FMImportPriceModal = ({ title, type,fieldOptions,importPrice,setDataPrice,fieldId}) => (
  <DefaultModal title={title} type={type} percentWidth="36" >
    <Body>
      <div className="row">
        <div className="col-sm-3">
          <p>เลือกสนาม</p>
        </div>
        <div className="col-sm-9">
          <select className="form-control" id="role" onChange={e=>setDataPrice({fieldIdImport:e.target.value})}>
          {fieldOptions.map(item=>
          <option value={item.id}>{item.name}</option>)
          }
          </select>
        </div>
      </div>
      <div className="row">
        <p className="warning">*คำเตือน ไม่สามารถ Import สนามที่แบ่งสนามคนละประเภท ไม่ได้</p>
      </div>
    </Body>
    <Footer>
      <CancelModal width="100px" bstrap="btn-success" onClick={()=>importPrice({fieldId:fieldId})}>
        ยืนยัน
      </CancelModal>
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
      .warning{
        margin-top:20px;
        text-align:center;
        color: #47494E;
        font-size:0.8rem;
      } 
    `}
    </style>
  </DefaultModal>
);

export default FMImportPriceModal;
