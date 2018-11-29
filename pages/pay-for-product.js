import React, { Component } from 'react';
import { TabsLayout, Constant } from '../components';

class PayForProduct extends Component {
    // [GET] - Users
    users = userData();
    render() {
        return (
            <TabsLayout title="ชำระสินค้า" tabs={Constant.PaymentTabs}>
                
            </TabsLayout>
        );
    }
}

function userData() {
    const users = [
        {
            id: 1,
            weekday: 'Rhynyx',
            start: '10:24',
            end: '13:44',
            price: 734,
            color: '#FD9226',
        },
        {
            id: 2,
            weekday: 'Aimbu',
            start: '7:44',
            end: '13:03',
            price: 999,
            color: '#9013FE',
        },
        {
            id: 3,
            weekday: 'DabZ',
            start: '5:58',
            end: '6:37',
            price: 664,
            color: '#D0021B',
        },
    ];
    return users;
}

export default PayForProduct;
