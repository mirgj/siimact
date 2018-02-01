import React from 'react';
import mapClass from 'classnames';

class MenuItem extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-menu-item',
      { [className]: !!className }
    );

    return (
      <a className={classNames} 
        {...attributes}>
          {children}
      </a>
    );
  }
  
}

export default MenuItem;