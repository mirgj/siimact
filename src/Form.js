import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Form extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    detail: PropTypes.string,
  };

  render() {
    const {
      className,
      title,
      detail,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-form',
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
        {title ? <div className="siimple-form-title">{title}</div> : null }
        {detail ? <div className="siimple-form-detail">{detail}</div> : null }
        {children}
      </div>
    );
  }
  
}

export default Form;