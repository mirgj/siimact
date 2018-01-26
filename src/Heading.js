import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Heading extends React.Component {
  static defaultProps = {
    size: utils.HeadingDefaultSize
  };
  static propTypes = {
    size: PropTypes.number
  };

  render() {
    const {
      className,
      size,
      children,
      ...attributes
    } = this.props;
    
    const nsize = utils.AllowedHeadingSize.indexOf(size) !== -1 ? size : utils.HeadingDefaultSize;
    const classNames = mapClass(
      `siimple-h${nsize}`,
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

export default Heading;