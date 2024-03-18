import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const Game = () => {
  const [userInput, setUserInput] = useState('');

  const handleNumberPress = (number) => {
    setUserInput(prevInput => prevInput + number);
  };

  const handleSubmit = () => {
    Alert.alert('Submitted', `You entered: ${userInput}`);
    setUserInput(''); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>PUBG</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        value={userInput}
        onChangeText={text => setUserInput(text)}
        keyboardType="numeric"
      />
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <Button key={number} title={number.toString()} onPress={() => handleNumberPress(number.toString())} />
        ))}
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Game;

