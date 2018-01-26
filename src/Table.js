import React from 'react';
import mapClass from 'classnames';

class Table extends React.Component {
  static defaultProps = {
    striped: false,
    border: false,
    hover: false
  };
  static propTypes = {
    striped: PropTypes.bool,
    border: PropTypes.bool,
    hover: PropTypes.bool
  };

  render() {
    const {
      className,
      striped,
      border,
      hover,
      children,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-table',
      'siimple-table--striped': striped,
      'siimple-table--border': border,
      'siimple-table--hover': hover,
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

export default Table;