import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import CustomButton from '../../components/Button';
import colors from '../../components/colors';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../../../context/LanguageContext';

const SignupPage = () => {
  const navigation = useNavigation();
  const { selectedLanguage } = useLanguage();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (text) => setEmail(text);
  const handleFirstNameChange = (text) => setFirstName(text);
  const handleLastNameChange = (text) => setLastName(text);
  const handlePasswordChange = (text) => setPassword(text);
  const toggleSecureTextEntry = () => setSecureTextEntry((prev) => !prev);

  const handleSignup = async () => {
    if (!selectedLanguage) {
      Alert.alert('Error', 'Please select a language to learn.');
      return;
    }

    const payload = {
      email,
      firstName,
      lastName,
      password,
      signinType: 'password',
      spokenLanguage: selectedLanguage.id,
      userType: 'learner',
      country: {
        name: "Nigeria",
        code: "NG",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
      },
    };

    try {
      console.log(payload);
      setLoading(true);
      const response = await fetch(
        'https://muta-app.fastgenapp.com/create-user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok && !result.error) {
        Alert.alert('Success', 'You have successfully signed up!');
        navigation.navigate('LoginPage');
      } else {
        throw new Error(result.message || 'Signup failed.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/Backbutton.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Enter name and password</Text>

        <CustomInput
          label='Email'
          value={email}
          onChangeText={handleEmailChange}
        />

        <CustomInput
          label='First name'
          value={firstName}
          onChangeText={handleFirstNameChange}
        />

        <CustomInput
          label='Last name'
          value={lastName}
          onChangeText={handleLastNameChange}
        />

        <CustomInput
          label='Password'
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={secureTextEntry}
          onToggleSecure={toggleSecureTextEntry}
        />

        <TouchableOpacity>
          <Text style={styles.PasswordEnforceText}>
            Use 8 or more characters
          </Text>
        </TouchableOpacity>

        <CustomButton
          title='SIGN UP'
          onPress={handleSignup}
          disabled={!email || !password || loading}
          style={[
            styles.signupButton,
            (!email || !password || loading) ? styles.disabledButton : null,
          ]}
          loading={loading}
        />

        <TouchableOpacity>
          <Text style={styles.signupText}>
            Don’t have a Muta account?{' '}
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191B20',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  iconContainer: {
    alignItems: 'start',
    marginBottom: 20,
  },
  icon: {
    marginTop: 0,
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Axiforma-Medium',
  },
  PasswordEnforceText: {
    color: '#7E7E7E',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 20,
    marginTop: -10,
  },
  signupButton: {
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#2A474D',
  },
  signupText: {
    textAlign: 'center',
    color: '#7E7E7E',
  },
  signupLink: {
    color: colors.linkActive,
    textDecorationLine: 'underline',
  },
});

export default SignupPage;
