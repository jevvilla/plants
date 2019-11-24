import React from 'react';
import PropTypes from 'prop-types';

import { Block, Typography } from '../../common/components';

const Login = () => {
  return (
    <Block middle>
      <Typography center bold>
        Login
      </Typography>
    </Block>
  );
};

Login.navigationOptions = {
  header: null,
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

Login.defaultProps = {
  navigation: {},
};

export default Login;
