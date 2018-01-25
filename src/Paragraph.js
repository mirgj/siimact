import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Paragraph extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
		const {
			className,
			children,
			...attributes
		} = this.props;

        const classNames = mapClass({
            ['siimple-p']: true,
            [className]: !!className
        });

        return (
        	<p className={classNames}
	            {...attributes}>
	            {children}
			</p>
		);
    }
}

export default Paragraph;