import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button, Constant, NoteForm } from '../..';
import {addNote as addNoteApi} from '../../../store';

class NoteAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      name: null,
      tel: null,
      note: null,
    };

    this.addNewNote = this.addNewNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.cancelAddNote = this.cancelAddNote.bind(this);
  }

  addNote() {
    this.setState({ isAdding: true });
  }

  addNewNote() {
    this.props.addNoteApi({
      doc_date:this.props.gotoDate.format("YYYY-MM-DD"),
      name:this.state.name,
      tel:this.state.tel,
      note:this.state.note,
    });
    this.cancelAddNote();
  }

  cancelAddNote() {
    this.setState({ 
      isAdding: false,
      name: null,
      tel: null,
      note: null, 
    });
  }
  componentDidMount() {
    console.log('this props =>>>', this.props)
  }

  // [GET] notes of this day

  render() {
    const { notes } = this.props;
    // console.log('render! notes', notes);
    // console.log('render!', this.state.isAdding);
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="50">
        <Body>
          <div className="container bodyNote" >
            {(!notes || notes.length == 0 && !this.state.isAdding) && <p className="nonote">กดปุ่ม เพิ่ม เพื่อเพิ่ม note</p>}
            {notes && notes.map(note => {
              return (
                <NoteForm gotoDate={this.props.gotoDate} key={note.id} note={note}/>
              );
            })}
            {this.state.isAdding && 
              <div>
                <div className="row">
                  <div className="col-sm-2">
                    <p className="bold-text">ชื่อ</p>
                  </div>
                  <div className="col-sm-4">
                    <input type="text" className='form-control' id="name" defaultValue={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                  </div>
                  <div className="col-sm-2">
                    <p className="bold-text">เบอร์โทร</p>
                  </div>
                  <div className="col-sm-4">
                    <input type="text" className='form-control' id="tel" defaultValue={this.state.tel} onChange={e => this.setState({ tel: e.target.value })} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <p className="bold-text">รายละเอียด</p>
                  </div>
                  <div className="col-sm-6">
                    <textarea className='form-control' rows="2" id="note" defaultValue={this.state.note} onChange={e => this.setState({ note: e.target.value })} />
                  </div>
                  <div className="col-sm-2">
                    <Button width="80px" bstrap="btn-success" onClick={() => {
                      // validation
                      // add note api
                      this.addNewNote();
                      
                    }}>บันทึก</Button>
                  </div>
                  <div className="col-sm-2" />
                </div>
              </div>
            }
          </div>
        </Body>
        <Footer>
          <Button width="100px" color={Constant.Blue} onClick={this.addNote}>
            เพิ่ม
          </Button>
          <CancelModal width="100px" color={Constant.Red} onClick={this.cancelAddNote}>
            ยกเลิก
          </CancelModal>
        </Footer>
        <style jsx>{`
          .bodyNote{
            max-height:400px;
            width:100%;
            overflow-y: scroll;
            overflow-x: visible;
          }
          .nonote{
            text-align: center;
            color: ${Constant.Grey};
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
                text-align: left;
            }
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


function mapStateToProps(state) {
  return {
    notes: state.booking_noteSaga.notes,
  }
}

export default connect(mapStateToProps,{addNoteApi})(NoteAddModal);
