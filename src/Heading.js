import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Heading extends React.Component {
  render() {
    const {
      className,
      size,
      children,
      ...attributes
    } = this.props;
    
    const nsize = utils.AllowedHeadingSize.indexOf(Number(size)) !== -1 ? size : utils.HeadingDefaultSize;
    const classNames = mapClass({
      [`siimple-h${nsize}`]: true,
      [className]: !!className
    });

    return (
      <div className={classNames}
        {...attributes}>
          {children}
      </div>
    );
  }
}

Heading.defaultProps = {
  size: utils.HeadingDefaultSize
};
Heading.propTypes = {
  size: PropTypes.number
};

export default Heading;