import React , {Component} from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal,Button } from '../..';
import {addFieldDataField} from '../../../store'
import {connect} from 'react-redux'


class FMAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:'',
      typeField:"0",
      is_dividable:"0",
    };
    this.cancelAddUser = this.cancelAddUser.bind(this);
    this.addNewField = this.addNewField.bind(this);
  }

  cancelAddUser() {
    this.setState({
      name:'',
      description:'',
      typeField:"0",
      is_dividable:"0",
    });
  }
  

  addNewField() {
    this.props.addFieldDataField({
      name:this.state.name,
      description:this.state.description,
      typeField:this.state.typeField,
      is_dividable:this.state.is_dividable,
    });
    this.cancelAddUser();
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="50" >
    <Body>
      <div className="row">
        <div className="col-sm-2">
          <p>ชื่อสนาม</p>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        </div>
        <div className="col-sm-2">
          <p>ประเภท</p>
        </div>
        <div className="col-sm-4">
          <select className="custom-select" defaultValue="0" onChange={e => this.setState({ typeField: e.target.value })}>
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
          <select className="custom-select" defaultValue="0" onChange={e => this.setState({ is_dividable: e.target.value })}>
            <option value="0">ได้</option>
            <option value="1">ไม่ได้</option>
          </select>
        </div>
        <div className="col-sm-6" />
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p>รายละเอียด</p>
        </div>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="email" onChange={e => this.setState({ description: e.target.value })}/>
        </div>
      </div>
    </Body>
    <Footer>
      <CancelModal width="100px" bstrap="btn-success" onClick={()=>this.addNewField()}>
        สร้าง
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
  }
}
export default connect(null,{addFieldDataField})(FMAddModal);