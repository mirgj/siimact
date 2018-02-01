import React from 'react';
import mapClass from 'classnames';

class Label extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-label',
      { [className]: !!className }
    );

    return (
      <label className={classNames} {...attributes} >{children}</label>
    );
  }
  
}

export default Label;