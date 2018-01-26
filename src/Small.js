import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Small extends React.Component {

  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass({
      ['siimple-small']: true,
      [className]: !!className
    });

    return (
      <small className={classNames} {...attributes}>
          {children}
      </small>
    );
  }
  
}

export default Small;