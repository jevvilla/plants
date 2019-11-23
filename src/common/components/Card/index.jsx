/* eslint-disable react/prop-types */
import React from 'react';

import Block from '../Block';
import colors from '../../colors';

import styles from './styles';

const Card = props => {
  const { color, style, children, ...cprops } = props;
  const cardStyles = [styles.card, style];

  return (
    <Block color={color || colors.white} style={cardStyles} {...cprops}>
      {children}
    </Block>
  );
};

export default Card;
