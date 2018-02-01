import React from 'react';
import mapClass from 'classnames';

class SubMenu extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-menu-sub',
      { [className]: !!className }
    );

    return (
      <div className={classNames} 
        {...attributes}>
          {children}
      </div>
    );
  }
  
}

export default SubMenu;