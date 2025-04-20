import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import CalculatorApp from './src/Calcuator/CalculatorApp';

const App = () => {
  const handlePress = () => {
   Alert.alert("Preasse a button");
  };

  return (
    <View>
     
      <CalculatorApp />

     
    </View>
  );
};

export default App;
