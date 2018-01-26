import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Button extends React.Component {
  static defaultProps = {
    color: utils.DefaultColor,
    disabled: false
  };
  static propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      className,
      color,
      disabled,
      children,
      ...attributes
    } = this.props;

    const ncolor = utils.AllowedColor.indexOf(color) !== -1 ? color : utils.DefaultColor;
    const classNames = mapClass({
      ['siimple-btn']: true,
      [`siimple-btn--${ncolor}`]: true,
      ['siimple-btn--disabled']: disabled,
      [className]: !!className
    });

    return (
      <div className={classNames} onClick={this.onClick}
        {...attributes}>
          {children}
      </div>
    );
  }
  
}

export default Button;