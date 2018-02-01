import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Breadcrumb extends React.Component {
  static propTypes = {
    crumbs: PropTypes.array
  };

  render() {
    const {
      className,
      crumbs,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-breadcrumb',
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
        {crumbs}
      </div>
    );
  }
  
}

export default Breadcrumb;