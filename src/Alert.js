import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Alert extends React.Component {
  static defaultProps = {
    color: utils.DefaultColor,
    onCloseClick: null
  };
  static propTypes = {
    color: PropTypes.string,
    onCloseClick: PropTypes.func
  };

  render() {
    const {
      className,
      color,
      onCloseClick,
      children,
      ...attributes
    } = this.props;

    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : utils.DefaultColor;
    const classNames = mapClass(
      'siimple-alert', 
      `siimple-alert--${ncolor}`,
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
          {onCloseClick ? <div className="siimple-close" onClick={onCloseClick}></div> : null }
          {children}
      </div>
    );
  }
  
}

export default Alert;