import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Col extends React.Component {
  static propTypes = {
    size: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    extraLarge: PropTypes.number,
  };

  render() {
    const {
      className,
      children,
      size,
      small,
      medium,
      large,
      extraLarge,
      ...attributes
    } = this.props;

    const nsize = utils.AllowedColSize.indexOf(size) !== -1 ? size : null;
    const nsmall = utils.AllowedColSize.indexOf(small) !== -1 ? small : null;
    const nmedium = utils.AllowedColSize.indexOf(medium) !== -1 ? medium : null;
    const nlarge = utils.AllowedColSize.indexOf(large) !== -1 ? large : null;
    const nextraLarge = utils.AllowedColSize.indexOf(extraLarge) !== -1 ? extraLarge : null;

    const classNames = mapClass(
      'siimple-grid-col',
      { [`siimple-grid-col--${nsize}`]: nsize },
      { [`siimple-grid-col-sm--${nsmall}`]: nsmall },
      { [`siimple-grid-col-md--${nmedium}`]: nmedium },
      { [`siimple-grid-col-lg--${nlarge}`]: nlarge },
      { [`siimple-grid-col-xl--${nextraLarge}`]: nextraLarge },
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

export default Col;