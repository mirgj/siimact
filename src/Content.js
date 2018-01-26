import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Content extends React.Component {
  static defaultProps = {
    size: utils.DefaultSize
  };
  static propTypes = {
    size: PropTypes.string
  };

  render() {
    const {
      className,
      size,
      children,
      ...attributes
    } = this.props;

    const nsize = utils.AllowedSize.indexOf(size) !== -1 ? size : utils.DefaultSize;
    const classNames = mapClass(
      'siimple-content', 
      `siimple-content--${nsize}`,
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

export default Content;