/* eslint-disable react/prop-types */
import React from 'react';

import Block from '../Block';
import colors from '../../colors';

import styles from './styles';

const Divider = props => {
  const { color, style, ...cprops } = props;
  const dividerStyles = [styles.divider, style];

  return <Block color={color || colors.gray2} style={dividerStyles} {...cprops} />;
};

export default Divider;
