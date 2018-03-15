import React, { Component } from 'react';
import { ColorButton } from '../components';

class CustomerTypeModalAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisableTime: true };

    this.cancelDisableTime = this.cancelDisableTime.bind(this);
  }

  cancelDisableTime(event) {
    if (event.target.value === '0') {
      this.setState({
        isDisableTime: true,
      });
    } else {
      this.setState({
        isDisableTime: false,
      });
    }
  }

  render() {
    return (
      <form>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" defaultValue="0" value={this.state.inputValue} onChange={(e) => { this.cancelDisableTime(e); }}>
                <option value="0">ถาวร</option>
                <option value="1">ชั่วโมง</option>
                <option value="2">รายเดือน</option>
                <option value="3">รายปี</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p>วันหมดอายุ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="nickname" disabled={this.state.isDisableTime} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวนชั่วโมง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" disabled={this.state.isDisableTime} />
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="col-sm-2">
              <p>สี</p>
            </div>
            <div className="col-sm-2">
              <ColorButton />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <AddButton />
          <CancelButton />
        </div>
        <style jsx>{`
          .modal-body{
            padding-left:60px;
            padding-right:60px;
          }
          .modal-body p{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            text-align: center;
          }
          .modal-body .row{
            margin-top:10px;
            margin-bottom:40px;
          }
          .modal-footer{
            justify-content: center;
            padding-top:0px;
            padding-bottom:40px;
            border-top:none;
          }
          .modal-footer>:not(:last-child){
            margin-right: 2rem;
          }
          .modal-footer>:not(:first-child){
            margin-left: 2rem;
          }
          @media (max-width: 576px) { 
            .modal-body p{
              position: relative;
              text-align: left;
            }
            .modal-body .row{
              margin-top:0px;
              margin-bottom:0px;
            }
            .modal-body{
              padding-bottom:30px;
              padding-top:0px;
            }
            .form-control{

            }
          }
        `}
        </style>
      </form>
    );
  }
}

function AddButton() {
  return (
    <button type="button" className="btn btn-success">สร้าง
      <style jsx>{`
        button{
          width:100px;
        }
      `}
      </style>
    </button>
  );
}

function CancelButton() {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal">ยกเลิก
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}

export default CustomerTypeModalAdd;
