import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from '@/styles/CustomContainer.module.css';

const Container = ({ children, mode, ...rest }) => {
  const containerStyles = classNames({
    [styles[mode]]: mode,
  });

  return (
    <div {...rest} className={containerStyles}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  mode: PropTypes.oneOf(['normal', 'app-style']),
};
Container.defaultProps = {
  mode: 'normal',
};
