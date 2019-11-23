/* eslint-disable react/prop-types */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Block from '../Block';

import styles from './styles';

const Progress = props => {
  const { startColor, endColor, value, opacity, style, ...cprops } = props;

  return (
    <Block row center color="gray3" style={[styles.background, styles]} {...cprops}>
      <LinearGradient
        end={{ x: 1, y: 0 }}
        style={[styles.overlay, { flex: value }]}
        colors={[startColor, endColor]}
      >
        <LinearGradient
          end={{ x: 1, y: 0 }}
          colors={[startColor, endColor]}
          style={[styles.active, { flex: value }]}
        />
      </LinearGradient>
    </Block>
  );
};

export default Progress;
