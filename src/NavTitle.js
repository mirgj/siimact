import React from 'react';
import mapClass from 'classnames';

class NavTitle extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-navbar-title',
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

export default NavTitle;