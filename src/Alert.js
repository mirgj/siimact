import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Alert extends React.Component {
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
          {close ? <div class="siimple-close" onClick={close}></div> : null }
          {children}
      </div>
    );
  }
}

Alert.defaultProps = {
  color: utils.DefaultColor,
  close: null
};
Alert.propTypes = {
  color: PropTypes.string,
  close: PropTypes.func
};

export default Alert;