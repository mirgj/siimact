import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Quote extends React.Component {
  render() {
    const {
      className,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass({
      ['siimple-blockquote']: true,
      [className]: !!className
    });

    return (
      <blockquote  className={classNames}
        {...attributes}>
          {children}
      </blockquote>
    );
  }
}

export default Quote;