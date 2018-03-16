import React, { Component } from 'react';

class CustomerFilterModalBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck1: false,
      isCheck2: false,
      isCheck3: false,
      isCheck4: false,
      isCheck5: false,
      isCheck6: false,
      isCheck7: false,
      isCheck8: false,
      isCheck9: false,
      isCheck10: false,
      isCheck11: false,
      isCheck12: false,
      isCheck13: false,
      isCheck14: false,
      isCheck15: false,
      isCheck16: false,
      isCheck17: false,
      isCheck18: false,
      isCheck19: false,
      isCheck20: false,
    };

    this.checkAll = this.checkAll.bind(this);
    this.disCheckAll = this.disCheckAll.bind(this);
    this.toggleCheck1 = this.toggleCheck1.bind(this);
    this.toggleCheck2 = this.toggleCheck2.bind(this);
    this.toggleCheck3 = this.toggleCheck3.bind(this);
    this.toggleCheck4 = this.toggleCheck4.bind(this);
    this.toggleCheck5 = this.toggleCheck5.bind(this);
    this.toggleCheck6 = this.toggleCheck6.bind(this);
    this.toggleCheck7 = this.toggleCheck7.bind(this);
    this.toggleCheck8 = this.toggleCheck8.bind(this);
    this.toggleCheck9 = this.toggleCheck9.bind(this);
    this.toggleCheck10 = this.toggleCheck10.bind(this);
    this.toggleCheck11 = this.toggleCheck11.bind(this);
    this.toggleCheck12 = this.toggleCheck12.bind(this);
    this.toggleCheck13 = this.toggleCheck13.bind(this);
    this.toggleCheck14 = this.toggleCheck14.bind(this);
    this.toggleCheck15 = this.toggleCheck15.bind(this);
    this.toggleCheck16 = this.toggleCheck16.bind(this);
    this.toggleCheck17 = this.toggleCheck17.bind(this);
    this.toggleCheck18 = this.toggleCheck18.bind(this);
    this.toggleCheck19 = this.toggleCheck19.bind(this);
    this.toggleCheck20 = this.toggleCheck20.bind(this);
  }

  checkAll() {
    this.setState({
      isCheck1: true,
      isCheck2: true,
      isCheck3: true,
      isCheck4: true,
      isCheck5: true,
      isCheck6: true,
      isCheck7: true,
      isCheck8: true,
      isCheck9: true,
      isCheck10: true,
      isCheck11: true,
      isCheck12: true,
      isCheck13: true,
      isCheck14: true,
      isCheck15: true,
      isCheck16: true,
      isCheck17: true,
      isCheck18: true,
      isCheck19: true,
      isCheck20: true,
    });
  }

  disCheckAll() {
    this.setState({
      isCheck1: false,
      isCheck2: false,
      isCheck3: false,
      isCheck4: false,
      isCheck5: false,
      isCheck6: false,
      isCheck7: false,
      isCheck8: false,
      isCheck9: false,
      isCheck10: false,
      isCheck11: false,
      isCheck12: false,
      isCheck13: false,
      isCheck14: false,
      isCheck15: false,
      isCheck16: false,
      isCheck17: false,
      isCheck18: false,
      isCheck19: false,
      isCheck20: false,
    });
  }

  toggleCheck1() {
    if (this.state.isCheck1 === true) {
      this.setState({
        isCheck1: false,
      });
    } else {
      this.setState({
        isCheck1: true,
      });
    }
  }

  toggleCheck2() {
    if (this.state.isCheck2 === true) {
      this.setState({
        isCheck2: false,
      });
    } else {
      this.setState({
        isCheck2: true,
      });
    }
  }

  toggleCheck3() {
    if (this.state.isCheck3 === true) {
      this.setState({
        isCheck3: false,
      });
    } else {
      this.setState({
        isCheck3: true,
      });
    }
  }

  toggleCheck4() {
    if (this.state.isCheck4 === true) {
      this.setState({
        isCheck4: false,
      });
    } else {
      this.setState({
        isCheck4: true,
      });
    }
  }

  toggleCheck5() {
    if (this.state.isCheck5 === true) {
      this.setState({
        isCheck5: false,
      });
    } else {
      this.setState({
        isCheck5: true,
      });
    }
  }

  toggleCheck6() {
    if (this.state.isCheck6 === true) {
      this.setState({
        isCheck6: false,
      });
    } else {
      this.setState({
        isCheck6: true,
      });
    }
  }

  toggleCheck7() {
    if (this.state.isCheck7 === true) {
      this.setState({
        isCheck7: false,
      });
    } else {
      this.setState({
        isCheck7: true,
      });
    }
  }

  toggleCheck8() {
    if (this.state.isCheck8 === true) {
      this.setState({
        isCheck8: false,
      });
    } else {
      this.setState({
        isCheck8: true,
      });
    }
  }

  toggleCheck9() {
    if (this.state.isCheck9 === true) {
      this.setState({
        isCheck9: false,
      });
    } else {
      this.setState({
        isCheck9: true,
      });
    }
  }

  toggleCheck10() {
    if (this.state.isCheck10 === true) {
      this.setState({
        isCheck10: false,
      });
    } else {
      this.setState({
        isCheck10: true,
      });
    }
  }

  toggleCheck11() {
    if (this.state.isCheck11 === true) {
      this.setState({
        isCheck11: false,
      });
    } else {
      this.setState({
        isCheck11: true,
      });
    }
  }

  toggleCheck12() {
    if (this.state.isCheck12 === true) {
      this.setState({
        isCheck12: false,
      });
    } else {
      this.setState({
        isCheck12: true,
      });
    }
  }

  toggleCheck13() {
    if (this.state.isCheck13 === true) {
      this.setState({
        isCheck13: false,
      });
    } else {
      this.setState({
        isCheck13: true,
      });
    }
  }

  toggleCheck14() {
    if (this.state.isCheck14 === true) {
      this.setState({
        isCheck14: false,
      });
    } else {
      this.setState({
        isCheck14: true,
      });
    }
  }

  toggleCheck15() {
    if (this.state.isCheck15 === true) {
      this.setState({
        isCheck15: false,
      });
    } else {
      this.setState({
        isCheck15: true,
      });
    }
  }

  toggleCheck16() {
    if (this.state.isCheck16 === true) {
      this.setState({
        isCheck16: false,
      });
    } else {
      this.setState({
        isCheck16: true,
      });
    }
  }

  toggleCheck17() {
    if (this.state.isCheck17 === true) {
      this.setState({
        isCheck17: false,
      });
    } else {
      this.setState({
        isCheck17: true,
      });
    }
  }

  toggleCheck18() {
    if (this.state.isCheck18 === true) {
      this.setState({
        isCheck18: false,
      });
    } else {
      this.setState({
        isCheck18: true,
      });
    }
  }

  toggleCheck19() {
    if (this.state.isCheck19 === true) {
      this.setState({
        isCheck19: false,
      });
    } else {
      this.setState({
        isCheck19: true,
      });
    }
  }

  toggleCheck20() {
    if (this.state.isCheck20 === true) {
      this.setState({
        isCheck20: false,
      });
    } else {
      this.setState({
        isCheck20: true,
      });
    }
  }

  render() {
    return (
      <form>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่ :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck1} checked={this.state.isCheck1} />
                หัวกลุ่ม
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" checked={this.state.isCheck2} onClick={this.toggleCheck2} />
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
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck3} checked={this.state.isCheck3} />
                ขาประจำ
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck4} checked={this.state.isCheck4} />
                ขาเก่า
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck5} checked={this.state.isCheck5} />
                ขาจร
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ประเภท :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck6} checked={this.state.isCheck6} />
                นักเรียน
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck7} checked={this.state.isCheck7} />
                นักศึกษา
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck8} checked={this.state.isCheck8} />
                ทั่วไป
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck9} checked={this.state.isCheck9} />
                สูงวัย
              </label>
            </div>
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck10} checked={this.state.isCheck10} />
                VIP Member
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck11} checked={this.state.isCheck11} />
                Special
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck12} checked={this.state.isCheck12} />
                Gold
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck13} checked={this.state.isCheck13} />
                Red
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck14} checked={this.state.isCheck14} />
                Silver
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck15} checked={this.state.isCheck15} />
                Blue
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck16} checked={this.state.isCheck16} />
                Green
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck17} checked={this.state.isCheck17} />
                Yellow
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck18} checked={this.state.isCheck18} />
                Mars
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck19} checked={this.state.isCheck19} />
                Pluto
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label red-label" htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick={this.toggleCheck20} checked={this.state.isCheck20} />
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
              <GreenButton title="เลือกทั้งหมด" onClick={() => this.checkAll()} />
            </div>
            <div className="col-sm-3">
              <BlueButton title="ไม่เลือกทั้งหมด" onClick={() => this.disCheckAll()} />
            </div>
            <div className="col-sm-3" />
            <div className="col-sm-3" />
          </div>
        </div>
        <div className="modal-footer">
          <RedButton title="ปิด" />
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
          }
          .modal-body .row{
            margin-top:10px;
            margin-bottom:40px;
          }
          .bold-text{
            font-weight:bold;
          }
          .modal-footer{
            justify-content: center;
            padding-top:0px;
            padding-bottom:40px;
            border-top:none;
          }
          .red-label{
            color:#c82333;
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

function GreenButton(props) {
  return (
    <button type="button" className="btn btn-success" onClick={props.onClick}>{props.title}
      <style jsx>{`
        button{
          width:150px;
        }
      `}
      </style>
    </button>
  );
}

function BlueButton(props) {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.title}
      <style jsx>{`
        button{
          width:150px;
          background-color: #4A90E2;
          cursor:pointer;
        }
      `}
      </style>
    </button>
  );
}

function RedButton(props) {
  return (
    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.onClick} >{props.title}
      <style jsx>{`
          button{
            width:100px;
          }
        `}
      </style>
    </button>
  );
}


export default CustomerFilterModalBody;
