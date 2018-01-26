import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Tag extends React.Component {
  static defaultProps = {
    color: utils.DefaultColor,
    htmlTag: utils.DefaultTag
  };
  static propTypes = {
    color: PropTypes.string,
    htmlTag: PropTypes.string
  };

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

export default Tag;