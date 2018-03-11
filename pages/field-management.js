import React, { Component } from 'react';
import { FieldManagementLayout } from '../components';

class FieldManagement extends Component {
  // [GET] - Field
  field = 'GET API Field';
  render() {
    return (
      <FieldManagementLayout title="ข้อมูลสนาม">
        <div className="row first-row">
          <div className="col-sm-1">
            <p>เวลาเปิด</p>
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" id="open-time" />
          </div>
          <div className="col-sm-1">
            <p>เวลาปิด</p>
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" id="closed-time" />
          </div>
          <div className="col-sm-1">
            <p>เบอร์โทร</p>
          </div>
          <div className="col-sm-5">
            <input type="text" className="form-control" id="tel" />
          </div>
        </div>
        <div className="row second-row">
          <div className="col-sm-12">
            <p>แนะนำตัว (50 Word)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input type="text" className="form-control" id="about" />
          </div>
        </div>
        <div className="row third-row">
          <div className="col-sm-12">
            <p>การเดินทาง</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input type="text" className="form-control" id="about" />
          </div>
        </div>
        <div className="row fourt-row">
          <div className="col-sm-12">
            <p>อำนวยความสะดวก</p>
          </div>
        </div>
        <div className="row five-row">
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                อุปกรณ์ให้เช่า
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" />
                อุปกรณ์ขาย
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" />
                เสื้อเอี๊ยม
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox4">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" />
                อุปกรณ์สนาม
              </label>
            </div>
          </div>
        </div>
        <div className="row six-row">
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" />
                กรรมการ
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox6">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                ห้องอาบน้ำ
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox7">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                ผ้าเช็ดตัว
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox8">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                สบู่
              </label>
            </div>
          </div>
        </div>
        <div className="row seven-row">
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox9">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="option1" />
                ตู้ล็อคเกอร์
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox10">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="option1" />
                ห้องแอร์
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox11">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="option1" />
                Free-Wifi
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox12">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox12" value="option1" />
                แอลกอฮอล์
              </label>
            </div>
          </div>
        </div>
        <div className="row eight-row">
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox13">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox13" value="option1" />
                ของกิน
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox14">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox14" value="option1" />
                ที่จอดรถ
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox15">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox15" value="option1" />
                Arcade
              </label>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
        <div className="row nine-row">
          <SaveButton />
        </div>
        <style jsx>
          {`
            .first-row p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              font-weight: bold;
            }
            .first-row p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              font-weight: bold;
            }
            .second-row{
              margin-top:1.2rem;
              font-weight: bold;
            }
            .third-row{
              margin-top:1.2rem;
              font-weight: bold;
            }
            .fourt-row{
              margin-top:1.2rem;
              font-weight: bold;
            }
            .nine-row{
              margin-top:40px;
            }
          `}
        </style>
      </FieldManagementLayout>
    );
  }
}

function SaveButton() {
  return (
    <button type="button" className="btn btn-primary" >บันทึก
      <style jsx>{`
        button{
          width:100px;
          margin-left:auto;
          margin-right:auto;
          background-color: #4A90E2;
        }
      `}
      </style>
    </button>
  );
}

export default FieldManagement;
