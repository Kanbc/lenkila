import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DatePickerInput = ({ value, onClick }) => (
  <input type="text" className="form-control" id="date" value={moment(value, 'DD/MM/YYYY').format('DD/MM/YYYY')} onClick={onClick} />
);

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onClick: () => console.log('DatePickerButton no onClick prop'),
};

export default DatePickerInput;
