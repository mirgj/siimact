import React from 'react';
import mapClass from 'classnames';

class Quote extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-blockquote',
      { [className]: !!className }
    );

    return (
      <blockquote  className={classNames}
        {...attributes}>
          {children}
      </blockquote>
    );
  }
  
}

export default Quote;