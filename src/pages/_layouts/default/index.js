import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Aside } from './styles';
import Header from '~/components/header';
// import Sidebar from '~/components/sidebar';
// import Content from '~/components/content';
// import NavBar from '~/components/navbar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {/* <Aside> */}
      {/* <Sidebar /> */}
      {children}
      {/* </Aside> */}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
