import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Alert extends React.Component {
  static defaultProps = {
    color: utils.DefaultColor,
    close: null
  };
  static propTypes = {
    color: PropTypes.string,
    close: PropTypes.func
  };

  render() {
    const {
      className,
      color,
      close,
      children,
      ...attributes
    } = this.props;

    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : utils.DefaultColor;
    const classNames = mapClass({
      ['siimple-alert']: true,
      [`siimple-alert--${ncolor}`]: true,
      [className]: !!className
    });

    return (
      <div className={classNames}
        {...attributes}>
          {close ? <div className="siimple-close" onClick={close}></div> : null }
          {children}
      </div>
    );
  }
  
}

export default Alert;