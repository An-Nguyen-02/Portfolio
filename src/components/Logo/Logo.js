import React from 'react';
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import logo from '../../data/logo.svg';

// const spin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

export const Logo = props => {
  // const prefersReducedMotion = usePrefersReducedMotion();

  // const animation = prefersReducedMotion
  //   ? undefined
  //   : `${spin} infinite 20s linear`;

  return <Image src={logo} marginTop="20px" marginBottom="50px" width="40%" {...props} />;
};
