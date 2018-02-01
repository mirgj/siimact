import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class TabItem extends React.Component {
  static defaultProps = {
    selected: false
  };
  static propTypes = {
    selected: PropTypes.bool
  };

  render() {
    const {
      className,
      children,
      selected,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-tabs-tab',
      { 'siimple-tabs-tab--selected': selected },
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

export default TabItem;