/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';

import Block from '../Block';

import styles from './styles';

const Badge = props => {
  const { children, style, size, color, ...cprops } = props;

  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);

  return (
    <Block flex={false} middle center color={color} style={badgeStyles} {...cprops}>
      {children}
    </Block>
  );
};

export default Badge;
