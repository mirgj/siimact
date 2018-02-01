import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Textarea extends React.Component {

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
      'siimple-textarea',
      { 'siimple-textarea--fluid': fullwidth },
      { [className]: !!className }
    );

    return (
      <textarea className={classNames} {...attributes}></textarea>
    );
  }
  
}

export default Textarea;