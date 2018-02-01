import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  static defaultProps = {
    boxed: false
  };
  static propTypes = {
    boxed: PropTypes.bool
  };

  render() {
    const {
      className,
      children,
      boxed,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-tabs',
      { 'siimple-tabs--boxed': boxed },
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

export default Tabs;