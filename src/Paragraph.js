import React from 'react';
import mapClass from 'classnames';

class Paragraph extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-p',
      { [className]: !!className }
    );

    return (
      <p className={classNames}
        {...attributes}>
          {children}
      </p>
    );
  }
  
}

export default Paragraph;