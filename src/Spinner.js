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
    size: PropTypes.string
  };

  render() {
    const {
      className,
      color,
      size,
      ...attributes
    } = this.props;

    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : utils.DefaultColor;
    const nsize = utils.AllowedSpinnerSize.indexOf(size) !== -1 ? size : null;
    const classNames = mapClass(
      'siimple-spinner', 
      `siimple-spinner--${ncolor}`,
      { [`siimple-spinner--${nsize}`]: !!nsize },
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
      </div>
    );
  }
  
}

export default Spinner;