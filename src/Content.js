import React  from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Content extends React.Component {

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
            ['siimple-content']: true,
            [`siimple-content--${size}`]: true,
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

Content.defaultProps = {
    size: 'large'
};
Content.propTypes = {
    size: PropTypes.string
};

export default Content;