import { Alert, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import { COLORS } from '../const/colors/index';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Loader } from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);

      //delete
      await AsyncStorage.setItem('userData', JSON.stringify({ email: inputs.email, password: inputs.password }));

      let userData = await AsyncStorage.getItem('userData');

      if (userData) {
        userData = JSON.parse(userData);

        if (inputs.email === userData.email && inputs.password === userData.password) {
          navigation.navigate('Main');
          await AsyncStorage.setItem('userData', JSON.stringify({ ...userData, loggedIn: true }));
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.wrapper}>
        <Loader visible={loading} />
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>welcome to RECLAMIC</Text>
          <Input
            onChangeText={(text) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title={'Log In'} style={styles.button} onPress={validate} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexGrow: 1,
  },
  button: {
    minWidth: '100%',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: COLORS.blue,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
  },
  loginContainer: {
    marginVertical: 60,
    paddingHorizontal: 40,
  },
  loginTitle: {
    textAlign: 'center',
    color: COLORS.black,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
