import React from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant, CancelModal } from '../..';
import {connect} from 'react-redux'
import {editFieldDataField,deleteFieldDataField} from '../../../store'
import {compose,withState,lifecycle} from 'recompose'

const FMEditModal = ({ title , type,userData,deleteFieldDataField,editFieldDataField,data,setData}) => (
  <DefaultModal title={title} type={type} percentWidth="50" >
    <Body>
      <div className="row">
        <div className="col-sm-2">
          <p>ชื่อสนาม</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="firstname" defaultValue={userData.name} onChange={e=>setData({...data,name:e.target.value})}/>
        </div>
        <div className="col-sm-2">
          <p>ประเภท</p>
        </div>
        <div className="col-sm-4">
          <select className="custom-select" defaultValue={userData.type} onChange={e => setData({...data,type:e.target.value})}>
            <option value="0">ฟุตบอล</option>
            <option value="1">แบตมินตัน</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>แบ่งครึ่งสนาม</p>
        </div>
        <div className="col-sm-4">
          <select className="custom-select" defaultValue={userData.is_dividable} onChange={e => setData({...data,is_dividable:e.target.value})}>
            <option value="1">ได้</option>
            <option value="0">ไม่ได้</option>
          </select>
        </div>
        <div className="col-sm-6" />
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>รายละเอียด</p>
        </div>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="email" defaultValue={userData.description} onChange={e => setData({...data,description:e.target.value})}/>
        </div>
      </div>
    </Body>
    <Footer>
      <CancelModal width={Constant.Buttons.default} bstrap="btn-success" onClick={()=>editFieldDataField(data)}>
        บันทึก
      </CancelModal>
      <CancelModal width={Constant.Buttons.default} color={Constant.Orange}>
        ยกเลิก
      </CancelModal>
      <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={()=>deleteFieldDataField(userData.id)}>
        ลบสนาม
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
    `}
    </style>
  </DefaultModal>
);

export default compose(
  connect(null,{editFieldDataField,deleteFieldDataField}),
  withState('data','setData',{}),
  lifecycle({
    componentDidMount(){
      this.props.setData({
        id:this.props.userData.id,
        name:this.props.userData.name,
        type:this.props.userData.type,
        is_dividable: this.props.userData.is_dividable,
        description:this.props.userData.description,
      })
    }
  })
)
(FMEditModal);
