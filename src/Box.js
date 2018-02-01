import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Box extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string
  };

  render() {
    const {
      className,
      color,
      title,
      subTitle,
      children,
      ...attributes
    } = this.props;

    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : null;
    const classNames = mapClass(
      'siimple-box',
      {[`siimple-box--${ncolor}`]: !!ncolor},
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
        {title ? <div className="siimple-box-title">{title}</div> : null }
        {subTitle ? <div className="siimple-box-subtitle">{subTitle}</div> : null }
        <div className="siimple-box-detail">{children}</div>
      </div>
    );
  }
  
}

export default Box;