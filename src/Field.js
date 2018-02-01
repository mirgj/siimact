import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Field extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    helper: PropTypes.string,
  };

  render() {
    const {
      className,
      label,
      helper,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-form-field',
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
        {label ? <div className="siimple-form-field-label">{label}</div> : null }
        {children}
        {helper ? <div className="siimple-form-field-helper">{helper}</div> : null }
      </div>
    );
  }
  
}

export default Field;