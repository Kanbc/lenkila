import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CancelModal, Button, Constant } from '../..';
import { editUsersData } from '../../../store';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            tel: this.props.tel,
            note: this.props.note,
            isEdit: false,
        };

        this.editNote = this.editNote.bind(this);
        this.cancelEditNote = this.cancelEditNote.bind(this);
    }

    editNote() {
        this.setState({ isEdit: true });
    }

    cancelEditNote() {
        this.setState({ isEdit: false });
    }

    render() {
        let button1 = null;
        let button2 = null;
        if (this.state.isEdit === true) {
            button1 = <Button width="80px" bstrap="btn-success" onClick={() => {
                // validation
                // edit user api
                this.props.dispatch(editUsersData({
                    id: this.state.id,
                    name: this.state.name,
                    tel: this.state.tel,
                    note: this.state.note
                }));

                this.cancelEditNote();
            }}>บันทึก</Button>;
            button2 = <CancelModal width="80px" color={Constant.Red} onClick={() => this.cancelEditNote()}>ยกเลิก</CancelModal>;
        } else {
            button1 = <Button width="80px" color={Constant.Orange} onClick={this.editNote}>แก้ไข</Button>;
            button2 = <CancelModal width="80px" bstrap="btn-danger" >ลบ</CancelModal>;
        }
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <p>ชื่อ</p>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="firstname" defaultValue={this.state.name} />
                    </div>
                    <div className="col-sm-2">
                        <p>เบอร์โทร</p>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" id="firstname" defaultValue={this.state.tel} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <p>รายละเอียด</p>
                    </div>
                    <div className="col-sm-6">
                        <textarea className="form-control" rows="2" id="comment" defaultValue={this.state.note} />
                    </div>
                    <div className="col-sm-2">
                        {button1}
                    </div>
                    <div className="col-sm-2">
                        {button2}
                    </div>
                </div>
                <style jsx>{`
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
            </div>
        );
    }
}

export default connect()(NoteForm);
