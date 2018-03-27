import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DatePickerButton = ({ value, onClick }) => (
  <button
    className="btn btn-info"
    onClick={onClick}
  >
    {moment(value, 'DD/MM/YYYY').format('วันdddd ที่ DD MMMM YYYY')}
    <i className="fa fa-pencil" />
    <style jsx>{`
      .fa {
        margin-left: 10px;
      }
    `}
    </style>
  </button>
);

DatePickerButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

DatePickerButton.defaultProps = {
  value: '',
  onClick: () => console.log('DatePickerButton no onClick prop'),
};

export default DatePickerButton;
