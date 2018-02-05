import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import * as utils from './utils';

class Checkbox extends React.Component {
  static defaultProps = {
    checked: false
  };
  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.id = utils.getId('chkid');
  }

  onChange(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      className,
      label,
      checked,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-checkbox',
      { [className]: !!className }
    );

    return (
      <span>
        {label ? <label className="siimple-label">{label}</label> : null }
        
        <div className={classNames} onChange={this.onChange}
          {...attributes}>
          <input type="checkbox" id={this.id} defaultChecked={checked} />
          <label htmlFor={this.id}></label>
        </div>
      </span>
    );
  }
  
}

export default Checkbox;