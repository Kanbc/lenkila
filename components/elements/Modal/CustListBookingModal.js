import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant } from '../..';

class CustListBookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            ...this.props.userData,
        };

        this.exitThisModal = this.exitThisModal.bind(this);
    }

    exitThisModal() {
        // Jquery hide specific modal
        $(`#${this.props.type}`).modal('hide');
    }

    render() {
        return (
            <DefaultModal title={this.props.title} type={this.props.type} percentWidth="55" >
                <Body>
                    <div className="row overall-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ชื่อเล่น</th>
                                    <th scope="col">เบอร์โทรศัพท์</th>
                                    <th scope="col">ความสัมพันธ์</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Test 1</td>
                                    <td>Test 2</td>
                                    <td>Test 3</td>
                                </tr>
                                <tr>
                                    <td>Test 1</td>
                                    <td>Test 2</td>
                                    <td>Test 3</td>
                                </tr>
                                <tr>
                                    <td>Test 1</td>
                                    <td>Test 2</td>
                                    <td>Test 3</td>
                                </tr>
                            </tbody>
                        </table>
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

export default CustListBookingModal;
