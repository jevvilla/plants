import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Block, Button } from '../../common/components';
import { sizes } from '../../common/styles';
import { LOGIN, SIGNUP } from '../../navigation/routes';

const Welcome = props => {
  const navigateTo = route => {
    const { navigation } = props;

    navigation.navigate(route);
  };

  return (
    <Block>
      <Block center bottom flex={0.4}>
        <Typography h1 center bold>
          Your Home.
          <Typography h1 primary>
            {' '}
            Greener.
          </Typography>
        </Typography>
        <Typography h3 gray2 style={{ marginTop: sizes.padding / 2 }}>
          Enjoy the experience.
        </Typography>
      </Block>
      <Block center middle>
        {Welcome.renderIllustrations()}
        {Welcome.renderSteps()}
      </Block>
      <Block middle flex={0.5} margin={[0, sizes.padding * 2]}>
        <Button gradient opacity={0.5} onPress={() => navigateTo(LOGIN)}>
          <Typography center semibold white>
            Login
          </Typography>
        </Button>
        <Button shadow opacity={0.5} onPress={() => navigateTo(SIGNUP)}>
          <Typography center>Signup</Typography>
        </Button>
        <Button>
          <Typography center>Terms of service</Typography>
        </Button>
      </Block>
    </Block>
  );
};

Welcome.navigationOptions = {
  header: null,
};

Welcome.renderIllustrations = () => {
  return (
    <Block>
      <Typography>Image</Typography>
    </Block>
  );
};

Welcome.renderSteps = () => {
  return (
    <Block>
      <Typography>* * *</Typography>
    </Block>
  );
};

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

Welcome.defaultProps = {
  navigation: {},
};

export default Welcome;
