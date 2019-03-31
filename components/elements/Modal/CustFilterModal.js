import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Constant, Button } from '../..';

class CustFilterModal extends Component {
  


  render() {
    const {customerType,fillterOptions,setFillterOptions} = this.props
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่ :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox1">
                <input className="form-check-input" type="checkbox" id="checkbox1" checked={fillterOptions.หัวกลุ่ม} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,หัวกลุ่ม:!fillterOptions.หัวกลุ่ม}})}/>
                หัวกลุ่ม
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox2">
                <input className="form-check-input" type="checkbox" id="checkbox2" checked={fillterOptions.ลูกกลุ่ม} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,ลูกกลุ่ม:!fillterOptions.ลูกกลุ่ม}})}/>
                ลูกกลุ่ม
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ความสัมพันธ์ :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox3">
                <input className="form-check-input" type="checkbox" id="checkbox3"   checked={fillterOptions.ขาประจำ} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,ขาประจำ:!fillterOptions.ขาประจำ}})}/>
                ขาประจำ
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox4">
                <input className="form-check-input" type="checkbox" id="checkbox4"  checked={fillterOptions.ขาเก่า} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,ขาเก่า:!fillterOptions.ขาเก่า}})}/>
                ขาเก่า
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox5">
                <input className="form-check-input" type="checkbox" id="checkbox5" checked={fillterOptions.ขาจร} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,ขาจร:!fillterOptions.ขาจร}})}/>
                ขาจร
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
   

          <div className="row">
            
            {customerType && customerType.map((value,index)=>{
              let keyName = value.name
              return(
                <React.Fragment key={value.id}>
                  {index === 0 &&
                  <div className="col-sm-2">
                    <p className="bold-text">ประเภท :</p>
                  </div>
                  }
                  {index===0 ?
                  <div className="col-sm-2">
                    <label className="form-check-label" htmlFor={`checkbox-fillter${value.id}`}>
                      <input className="form-check-input" type="checkbox" id={`checkbox${value.id}`} checked={fillterOptions[value.name]} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,[keyName]:!fillterOptions[value.name]}})}  />
                      {value.name}
                    </label>
                  </div>
                  :
                  index%4===0 ?
                  <React.Fragment >
                  <div className="col-sm-2" />
                  <div className="col-sm-2" />
                    <div className="col-sm-2">
                    <label className="form-check-label" htmlFor={`checkbox-fillter${value.id}`}>
                      <input className="form-check-input" type="checkbox" id={`checkbox${value.id}`} checked={fillterOptions[value.name]} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,[keyName]:!fillterOptions[value.name]}})}  />
                      {value.name}
                    </label>
                  </div>
                  </React.Fragment>
                  :
                  <div className="col-sm-2">
                  <label className="form-check-label" htmlFor={`checkbox-fillter${value.id}`}>
                    <input className="form-check-input" type="checkbox" id={`checkbox${value.id}`} checked={fillterOptions[value.name]} onChange={()=>setFillterOptions({fillterOptions:{...fillterOptions,[keyName]:!fillterOptions[value.name]}})}  />
                    {value.name}
                  </label>
                  </div>
                  }
                </React.Fragment >
            )}
              )
            }
            
          </div>

          
          
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label red-label" htmlFor="checkbox20">
                <input className="form-check-input" type="checkbox" id="checkbox20" value="option20"  />
                Blacklist
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-3">
              <Button width="150px" bstrap="btn-success" color={Constant.Green} onClick={()=>
              {
                const typeOption={}
                customerType.map((value=> typeOption[value.name]=true))
                setFillterOptions({fillterOptions:{...fillterOptions,...typeOption,หัวกลุ่ม:true,ลูกกลุ่ม:true,ขาประจำ:true,ขาเก่า:true,ขาจร:true,}})
              }
              }
              >
                เลือกทั้งหมด</Button>
            </div>
            <div className="col-sm-3">
              <Button width="150px" bstrap="btn-primary" color={Constant.Blue} onClick={()=>setFillterOptions({fillterOptions:{หัวกลุ่ม:false,ลูกกลุ่ม:false,ขาประจำ:false,ขาเก่า:false,ขาจร:false,นักเรียน:false,นักศึกษา:false,ทั่วไป:false,สูงวัย:false}})}>ไม่เลือกทั้งหมด</Button>
            </div>
            <div className="col-sm-3" />
            <div className="col-sm-3" />
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-danger">ปิด</CancelModal>
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
            }
            .bold-text{
              font-weight:bold;
            }
            .red-label{
              color:#c82333;
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
  }
}

export default CustFilterModal;
