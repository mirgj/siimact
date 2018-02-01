import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Input extends React.Component {

  static propTypes = {
    fullwidth: PropTypes.bool
  };

  render() {
    const {
      className,
      fullwidth,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-input',
      { 'siimple-input--fluid': fullwidth },
      { [className]: !!className }
    );

    return (
      <input className={classNames} {...attributes} />
    );
  }
  
}

export default Input;