import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Spinner extends React.Component {
  static defaultProps = {
    color: utils.DefaultColor
  };
  static propTypes = {
    color: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    const {
      className,
      color,
      type,
      children,
      ...attributes
    } = this.props;

    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : utils.DefaultColor;
    const ntype = utils.AllowedTipType.indexOf(type) !== -1 ? type : null;
    const classNames = mapClass(
      'siimple-tip', 
      `siimple-tip--${ncolor}`,
      { [`siimple-tip--${ntype}`]: !!ntype },
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

export default Spinner;