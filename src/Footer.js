import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Footer extends React.Component {
  static defaultProps = {
    size: utils.DefaultSize
  };
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string
  };

  render() {
    const {
      className,
      size,
      color,
      children,
      ...attributes
    } = this.props;

    const nsize = utils.AllowedSize.indexOf(size) !== -1 ? size : utils.DefaultSize;
    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : null;
    const classNames = mapClass(
      'siimple-footer', 
      `siimple-footer--${nsize}`,
      { [`siimple-footer--${ncolor}`]: !!ncolor},
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

export default Footer;