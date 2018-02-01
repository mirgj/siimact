import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';


class Navbar extends React.Component {
  static defaultProps = {
    size: utils.DefaultSize
  };
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    left: PropTypes.array,
    right: PropTypes.array
  };

  render() {
    const {
      className,
      color,
      size,
      left,
      right,
      ...attributes
    } = this.props;

    const nsize = utils.AllowedSize.indexOf(size) !== -1 ? size : utils.DefaultSize;
    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : null;
    const classNames = mapClass(
      'siimple-navbar',
      `siimple-navbar--${nsize}`,
      { [`siimple-navbar--${ncolor}`]: !!ncolor},
      { [className]: !!className }
    );

    return (
      <div className={classNames} 
        {...attributes}>
        <div className="siimple-layout--left">
          {left}
        </div>
        <div className="siimple-layout--right">
          {right}
        </div>
      </div>
    );
  }
  
}

export default Navbar;