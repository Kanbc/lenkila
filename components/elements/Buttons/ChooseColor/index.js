import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import {connect} from 'react-redux'
import {setData} from '../../../../sagas/field_managementPriceSaga'


class ColorButton extends Component {
  state = {
    background: this.props.typeColor === "add" ? '#CA0813':this.props.userDatacolor,
  };
  
  handleChangeComplete = (color) => {
    console.log('color props',this.props)
    this.props.setStateCustomerType&&this.props.setStateCustomerType(color.hex)
    this.setState({ background: color.hex });
    this.props.setData({colorPriceEdit:color.hex})
    if(this.props.typeColor === "add") this.props.setData({colorPrice:color.hex})
  };
  
  render() {
    return (
      <div className="dropdown">
        <button className="btn dropdown-toggle" style={{ color: `${this.state.background}`, backgroundColor: `${this.state.background}` }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <TwitterPicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
        <style jsx>{`
          button{
            width: ${this.props.width};
            cursor:pointer;
          }
        `}
        </style>
      </div>
    );
  }
}

export default connect(null,{setData})(ColorButton);
