import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Content extends React.Component {
  render() {
    const {
      className,
      size,
      children,
      ...attributes
    } = this.props;

    const nsize = utils.AllowedSize.indexOf(size) !== -1 ? size : utils.DefaultSize;
    const classNames = mapClass({
      ['siimple-content']: true,
      [`siimple-content--${nsize}`]: true,
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

Content.defaultProps = {
  size: utils.DefaultSize
};
Content.propTypes = {
  size: PropTypes.string
};

export default Content;