import React from 'react';
import mapClass from 'classnames';
import PropTypes from 'prop-types';

class Code extends React.Component {
  static defaultProps = {
    inline: false,
    text: ''
  };
  static propTypes = {
    inline: PropTypes.bool,
    text: PropTypes.string
  };

  render() {
    const {
      className,
      children,
      inline,
      text,
      ...attributes
    } = this.props;

    let classNames = mapClass({
      ['siimple-code']: true,
      [className]: !!className
    });
    let Tag = 'code';

    if(!inline) {
      classNames = mapClass({
        ['siimple-pre']: true,
        [className]: !!className
      }); 
      Tag = 'pre';
    }

    return (
      <Tag className={classNames}
        {...attributes}>
          {text}
      </Tag>
    );
  }
  
}

export default Code;