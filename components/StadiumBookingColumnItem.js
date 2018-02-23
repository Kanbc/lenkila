import React, { Component } from 'react';
import { StadiumBookingModal } from '../components';

class StadiumBookingColumnItem extends Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <div className="item">
        <a
          onClick={() => this.setState(prev => ({ isOpen: !prev.isOpen }))}
        >
          <div className="d-flex align-items-center">
            <div className="time">8.00 - 9.00</div>
            <div className="name">
              <p>คุณเอ</p>
            </div>
          </div>
        </a>
        <style jsx>{`
          .item {
            width: 100%;
          }
          .time {
            flex: 1.5;
            border-right: 1px solid #ddd;
          }
          .name {
            flex: 1;
            white-space: pre;
          }
          p {
            margin: 0;
            padding-left: 5px;
            word-break: break-all;
            word-wrap: break-word;
            white-space: pre-wrap;
          }
        `}
        </style>
        <StadiumBookingModal
          isOpen={this.state.isOpen}
          setIsOpen={isOpen => this.setState({ isOpen })}
        />
      </div>
    );
  }
}

export default StadiumBookingColumnItem;
