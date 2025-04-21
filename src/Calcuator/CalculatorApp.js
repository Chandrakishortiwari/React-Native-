import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => handleOperation('+')} />
        <Button title="-" onPress={() => handleOperation('-')} />
        <Button title="×" onPress={() => handleOperation('*')} />
        <Button title="÷" onPress={() => handleOperation('/')} />
      </View>
      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:80,
   
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
   
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
