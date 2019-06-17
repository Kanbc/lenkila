import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Constant } from '../..';
import { deleteThisBookingDiscount, editThisBookingDiscount } from '../../../store';

class DiscountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.item,
        };

        this.editDiscount = this.editDiscount.bind(this);
        this.cancelEditDiscount = this.cancelEditDiscount.bind(this);
    }

    editDiscount() {
        this.setState({ isEdit: true });
    }

    cancelEditDiscount() {
        this.setState({ isEdit: false });
    }

    render() {
        let button1 = null;
        let button2 = null;
        if (this.state.isEdit === true) {
            button1 = <Button width="80px" bstrap="btn-success" onClick={() => {
                // validation
                // edit note api
                this.props.editStateDiscount({
                    id: this.state.id,
                    detail: this.state.detail,
                    price: this.state.price,
                })
                this.cancelEditDiscount();
            }}>บันทึก</Button>;
            // button2 = <CancelModal width="80px" color={Constant.Red} onClick={() => this.cancelEditNote()}>ยกเลิก</CancelModal>;
            button2 = "";
        } else {
            button1 = <Button width="80px" color={Constant.Orange} onClick={this.editDiscount}>แก้ไข</Button>;
            button2 = <Button width="80px" bstrap="btn-danger" color={Constant.Red} onClick={() => {
                const deleteDiscount = this.props.rebate_other.filter(value=> value.id !== this.props.id)
                this.props.deleteStateDiscount(deleteDiscount)
            }}>ลบ</Button>;
        }
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <p className="bold-text">รายละเอียด</p>
                    </div>
                    <div className="col-sm-3">
                        <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.detail}</p>
                        <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="name" defaultValue={this.state.detail} onChange={e => this.setState({ detail: e.target.value })} />
                    </div>
                    <div className="col-sm-2">
                        <p className="bold-text">ลดราคา</p>
                    </div>
                    <div className={this.state.isEdit ? "col-sm-3" : "col-sm-1"}>
                        <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.price}</p>
                        <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="tel" defaultValue={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
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
            </div>
        );
    }
}

export default connect()(DiscountForm);
