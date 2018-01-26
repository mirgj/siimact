import React from 'react';
import mapClass from 'classnames';

class Small extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-small',
      { [className]: !!className }
    );

    return (
      <small className={classNames} 
        {...attributes}>
          {children}
      </small>
    );
  }
  
}

export default Small;