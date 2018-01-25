import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Alert extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {
			className,
			color,
			close,
			children,
			...attributes
		} = this.props;

		const classNames = mapClass({
			['siimple-alert']: true,
			[`siimple-alert--${color}`]: true,
			[className]: !!className
		});

		return (
			<div className={classNames}
    			{...attributes}>
    			{close ? <div class="siimple-close" onClick={close}></div> : null }
    			{children}
			</div>
			);
	}
}

Alert.defaultProps = {
	color: 'navy',
	close: null
};
Alert.propTypes = {
	color: PropTypes.string,
	close: PropTypes.func
};

export default Alert;