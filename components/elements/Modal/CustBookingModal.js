import React, { Component } from 'react';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant } from '../..';

class CustBookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      ...this.props.userData,
      // date_of_birth: moment(this.props.userData.date_of_birth)
    };

    this.exitThisModal = this.exitThisModal.bind(this);
  }

  exitThisModal() {
    // Jquery hide specific modal
    $(`#${this.props.type}`).modal('hide');
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อเล่น*</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''} >Test</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เบอร์โทรศัพท์*</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''} >099999999</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">วันเกิด</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>12/05/2019</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อจริง</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>Test</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">นามสกุล</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>Test</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เพศ</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>ชาย</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>หัวกลุ่ม</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">ความสัมพันธ์:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>ขาประจำ</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">Free Credits:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.customer_freecredits}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ประเภท:</p>
            </div>
            <div className="col-sm-2">
              <p>test</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">โน้ต</p>
            </div>
            <div className="col-sm-10">
              <p>test</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10" />
            <div className="col-sm-2">
              <label className={this.state.isEdit ? 'form-check-label red-label' : 'form-check-label red-label d-none'} htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="0" defaultValue={this.state.is_blacklist} onChange={() => this.setState({ is_blacklist: this.state.is_blacklist === '0' ? '1' : '0' })} checked={this.state.is_blacklist === '1'} />
                Blacklist
              </label>
            </div>
          </div>
        </Body>
        <Footer>
          <Button width={Constant.Buttons.default} color={Constant.Red} onClick={this.exitThisModal}>
            ปิด
          </Button>
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:30px;
          }
          .red-label{
            color:#c82333;
          }
          .bold-text{
            font-weight:bold;
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

export default CustBookingModal;
