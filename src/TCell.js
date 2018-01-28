import React from 'react';
import mapClass from 'classnames';

class TCell extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-table-cell',
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

export default TCell;