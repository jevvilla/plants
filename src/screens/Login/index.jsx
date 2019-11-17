import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

const Login = props => {
  const { navigation } = props;

  const goToForgot = () => navigation.navigate('Forgot');

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={goToForgot}>
        <View>
          <Text>Fotgot password</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
