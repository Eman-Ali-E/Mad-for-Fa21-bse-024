import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
    setIsButtonDisabled(text === '' || password === '');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsButtonDisabled(text === '' || username === '');
  };

  const handleSubmit = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success login', 'You have successfully logged in.');
    } else {
      Alert.alert('Wrong credentials', 'Please enter correct username and password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={isButtonDisabled}
      />
    </View>
  );
};

export default LoginScreen;
