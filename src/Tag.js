import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Tag extends React.Component {
  render() {
    const {
      className,
      color,
      htmlTag,
      children,
      ...attributes
    } = this.props;

    const HtmlTag = utils.AllowedTag.indexOf(htmlTag) !== -1 ? htmlTag : utils.DefaultTag;
    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : utils.DefaultColor;
    const classNames = mapClass({
      ['siimple-tag']: true,
      [`siimple-tag--${ncolor}`]: true,
      [className]: !!className
    });

    return (
      <HtmlTag className={classNames}
        {...attributes}>
          {children}
      </HtmlTag>
    );
  }
}

Tag.defaultProps = {
  color: utils.DefaultColor,
  htmlTag: utils.DefaultTag
};
Tag.propTypes = {
  color: PropTypes.string,
  htmlTag: PropTypes.string
};

export default Tag;