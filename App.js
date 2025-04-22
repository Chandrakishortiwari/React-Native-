import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import CalculatorApp from './src/Calcuator/CalculatorApp';
import Counter from './src/counter/Counter';
import GetinputValue from './src/getainputvalue/GetinputValue';
import CreateForm from './src/form/CreateForm';

const App = () => {
  const handlePress = () => {
   Alert.alert("Preasse a button");
  };

  return (
    <View>
     
      {/* <CalculatorApp /> */}
      {/* <Counter /> */}
      {/* <GetinputValue /> */}
      <CreateForm />
     

     
    </View>
  );
};

export default App;
