import { View, Text, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const CalculatorApp = () => {
  const [dark, setDark] = useState(false);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
      
        backgroundColor: dark ? '#000' : '#fff',
      }}
    >
      <Text style={{ color: dark ? '#fff' : '#000', fontSize: 24, marginBottom: 20 }}>
        {dark ? 'Dark Mode' : 'Light Mode'}
      </Text>

      <Switch
        value={dark}
        onValueChange={() => setDark(!dark)}
        thumbColor={dark ? '#fff' : '#000'}
        trackColor={{ true: '#81b0ff', false: '#767577' }}
      />
    </View>
  );
};

export default CalculatorApp;
