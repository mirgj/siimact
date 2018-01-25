import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Heading extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      const {
         className,
         size,
         children,
         ...attributes
     } = this.props;

     const classNames = mapClass({
        [`siimple-h${size}`]: true,
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

Heading.defaultProps = {
    size: 1
};
Heading.propTypes = {
    size: PropTypes.number
};

export default Heading;