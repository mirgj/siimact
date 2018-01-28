import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';
import TRow from './TRow'

class Table extends React.Component {
  static defaultProps = {
    striped: false,
    border: false,
    hover: false
  };
  static propTypes = {
    striped: PropTypes.bool,
    border: PropTypes.bool,
    hover: PropTypes.bool,
    header: PropTypes.array,
    rows: PropTypes.array
  };

  render() {
    const {
      className,
      striped,
      border,
      hover,
      header,
      rows,
      ...attributes
    } = this.props;

    const classNames = mapClass(
      'siimple-table',
      { 'siimple-table--striped': striped },
      { 'siimple-table--border': border },
      { 'siimple-table--hover': hover },
      { [className]: !!className }
    );

    return (
      <div className={classNames}
        {...attributes}>
          <div className="siimple-table-header">
            <TRow>
              {header}
            </TRow>
          </div>
          <div className="siimple-table-body">
            {rows}
          </div>
      </div>
    );
  }
  
}

export default Table;