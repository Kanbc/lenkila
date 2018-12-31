import React, { Component } from 'react';
import DefaultModal from './../../DefaultModal';
import Body from './../../DefaultModal/Body';
import Footer from './../../DefaultModal/Footer';
import { CancelModal, Constant, Button } from '../../../..';

class MemberModal extends Component {
  constructor(props) {
    super(props);
    const datas = userTypes();
    this.state = {
      isAdding: false,
      memberTypeId: datas[0].id,
      memberTypeName: datas[0].name,
      memberTypeNumHour: datas[0].numHour,
      memberTypeDistanceTime: datas[0].timeDistance,
      memberTypePrice: datas[0].price,
    };

    this.addMember = this.addMember.bind(this);
    this.cancelAddMember = this.cancelAddMember.bind(this);
  }

  addMember() {
    this.setState({ isAdding: true });
  }

  cancelAddMember() {
    const datas = userTypes();
    this.setState({
      isAdding: false,
      memberTypeId: datas[0].id,
      memberTypeName: datas[0].name,
      memberTypeNumHour: datas[0].numHour,
      memberTypeDistanceTime: datas[0].timeDistance,
      memberTypePrice: datas[0].price,
    });
  }

  selectMember(id) {
    const datas = userTypes();
    this.setState({
      memberTypeId: id,
      memberTypeName: datas[id - 1].name,
      memberTypeNumHour: datas[id - 1].numHour,
      memberTypeDistanceTime: datas[id - 1].timeDistance,
      memberTypePrice: datas[id - 1].price,
    });
  }

  // [GET] get all user types
  types = userTypes();
  // [GET] get user type
  userData = userType();

  render() {
    const { types } = this;
    const { userData } = this;

    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">Default:</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.default}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">ปัจจุบัน:</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.now}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">จำนวนชั่วโมง:</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.numHour}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">หมดอายุ:</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.expireDate}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">Next :</p>
            </div>
            <div className="col-sm-4">
              <p>{userData.next}</p>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-4" />
          </div>
          {
            (this.state.isAdding && types.length !== 0) &&
            <div>
              <div className="row" />
              <div className="row">
                <div className="col-sm-3">
                  <p className="bold-text">ซื้อ Member เพิ่ม:</p>
                </div>
                <div className="col-sm-4">
                  <select className="form-control" id="exampleFormControlSelect1" onChange={e => this.selectMember(e.target.value)}>
                    {
                      types && types.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="col-sm-5" />
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="bold-text">ประเภท:</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.memberTypeName}</p>
                </div>
                <div className="col-sm-2">
                  <p className="bold-text">จำนวนชั่วโมง:</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.memberTypeNumHour}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="bold-text">ระยะเวลา:</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.memberTypeDistanceTime}</p>
                </div>
                <div className="col-sm-2">
                  <p className="bold-text">ราคา</p>
                </div>
                <div className="col-sm-4">
                  <p>{this.state.memberTypePrice}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <Button
                    width="80px"
                    bstrap="btn-success"
                    onClick={() => {
                      // มี 2 เงื่อนไข
                      // 1 ถ้าใน next ไม่มี เพิ่มเลย
                        // add member by
                        // - user_id
                        // - member_type_id
                      // 2 ถ้ามี ซื้อไม่ได้ ต้องรอของเก่าหมดอายุก่อน

                      this.cancelAddMember();
                    }}
                  >
                    ซื้อ
                  </Button>
                </div>
              </div>
            </div>
          }
        </Body>
        <Footer>
          <Button width="100px" color={Constant.Blue} onClick={this.addMember}>
            ซื้อเพิ่ม
          </Button>
          <CancelModal width="100px" bstrap="btn-danger" >
            ปิด
          </CancelModal>
        </Footer>
        <style jsx>{`
          .bold-text{
            font-weight:bold;
          }
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
              padding-bottom:30px;
              padding-top:0px;
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

function userTypes() {
  const typesData = [
    {
      id: 1,
      name: 'Silver',
      type: 'ชั่วโมง',
      numHour: '30',
      timeDistance: '-',
      price: '1,000',
    },
    {
      id: 2,
      name: 'Gold',
      type: 'ชั่วโมง',
      numHour: '50',
      timeDistance: '-',
      price: '1,500',
    },
    {
      id: 3,
      name: 'Platinum',
      type: 'ชั่วโมง',
      numHour: '80',
      timeDistance: '-',
      price: '2,000',
    },
  ];
  return typesData;
}

function userType() {
  const userData = {
    id: 1,
    default: 'ทั่วไป',
    now: 'Silver',
    numHour: '6',
    expireDate: '10/04/61',
    next: 'Gold(รอใช้งาน)',
  };
  return userData;
}

export default MemberModal;
