import React from 'react';

import { Typography, Block, Button } from '../../common/components';

import { sizes } from '../../common/styles';

const Welcome = () => {
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
        <Button gradient opacity={0.5}>
          <Typography center semibold white>
            Login
          </Typography>
        </Button>
        <Button shadow opacity={0.5}>
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

export default Welcome;
