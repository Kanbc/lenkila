import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant, NoteForm } from '../..';
import { setThisDayNote } from '../../../store';

class NoteAddModal extends Component {
  // [GET] notes of this day
  notes = notes();

  componentDidMount() {
    this.props.dispatch(setThisDayNote(this.notes));
  }

  render() {
    const { notes } = this.props;
    console.log('render!', notes);
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="45">
        <Body>
          {notes && notes.map(note => {
            return (
              <NoteForm key={note.id} name={note.name} tel={note.tel} note={note.note} />
            );
          })}
        </Body>
        <Footer>
          <Button width="100px" color={Constant.Blue}>
            เพิ่ม
          </Button>
        </Footer>
        <style jsx>
          {` 
            .row {
              margin-top: 10px;
              margin-bottom: 40px;
              p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                text-align: center;
              }
            }
            .lenkila_time_picker {
              font-size:100px;
              .react-datepicker__time-container {
                .react-datepicker__time {
                  .react-datepicker__time-box {
                    ul.react-datepicker__time-list {
                      padding:0;
                      background-color:black;      
                    }
                  }
                }
              }
            }
            @media (max-width: 576px) {
              .row {
                margin-top: 0;
                margin-bottom: 0;
                p {
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

function notes() {
  const notes = [
    {
      id: 1,
      name: 'Archer',
      tel: '941-715-4509',
      note: 'Owner',
    },
    {
      id: 2,
      name: 'Sherilyn',
      tel: '589-802-3451',
      note: 'Owner',
    },
  ];
  return notes;
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps)(NoteAddModal);
