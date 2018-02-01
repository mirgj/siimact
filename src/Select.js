import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Select extends React.Component {

  static propTypes = {
    fullwidth: PropTypes.bool
  };

  render() {
    const {
      className,
      fullwidth,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-select',
      { 'siimple-select--fluid': fullwidth },
      { [className]: !!className }
    );

    return (
      <select className={classNames} {...attributes}>
        {children}
      </select>
    );
  }
  
}

export default Select;