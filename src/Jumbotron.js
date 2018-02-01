import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Jumbotron extends React.Component {
  static defaultProps = {
    size: utils.DefaultSize
  };
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
  };

  render() {
    const {
      className,
      size,
      color,
      title,
      subTitle,
      children,
      ...attributes
    } = this.props;

    const nsize = utils.AllowedSize.indexOf(size) !== -1 ? size : utils.DefaultSize;
    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : null;
    const classNames = mapClass(
      'siimple-jumbotron', 
      `siimple-jumbotron--${nsize}`,
      { [`siimple-jumbotron--${ncolor}`]: !!ncolor},
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
        {title ? <div className="siimple-jumbotron-title">{title}</div> : null }
        {subTitle ? <div className="siimple-jumbotron-subtitle">{subTitle}</div> : null }
      	<div className="siimple-jumbotron-detail">{children}</div>
      </div>
    );
  }

}

export default Jumbotron;