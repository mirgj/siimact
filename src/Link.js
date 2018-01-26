import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Link extends React.Component {
  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass({
      ['siimple-link']: true,
      [className]: !!className
    });

    return (
      <a className={classNames} {...attributes}>
          {children}
      </a>
    );
  }
}

export default Link;