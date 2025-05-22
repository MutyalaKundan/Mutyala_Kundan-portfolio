import React from 'react';
import PropTypes from 'prop-types';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2025 KUNDAN</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

AppWrap.propTypes = {
  Component: PropTypes.elementType.isRequired,
  idName: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

AppWrap.defaultProps = {
  classNames: '',
};

export default AppWrap;
