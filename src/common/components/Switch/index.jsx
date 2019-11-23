/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Platform } from 'react-native';

import colors from '../../colors';

const GRAY_COLOR = 'rgba(168, 182, 200, 0.30)';

const SwitchInput = props => {
  const { value, ...cprops } = props;
  let thumbColor = null;

  if (Platform.OS === 'android') {
    thumbColor = GRAY_COLOR;

    if (cprops.value) {
      thumbColor = colors.secondary;
    }
  }

  return (
    <Switch
      thumbColor={thumbColor}
      ios_backgroundColor={GRAY_COLOR}
      trackColor={{
        // false: GRAY_COLOR,
        true: colors.secondary,
      }}
      value={value}
      {...cprops}
    />
  );
};

export default SwitchInput;
