import { StyleSheet } from 'react-native';

import colors from '../../colors';
import { sizes } from '../../styles';

export default StyleSheet.create({
  divider: {
    height: 0,
    margin: sizes.base * 2,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
