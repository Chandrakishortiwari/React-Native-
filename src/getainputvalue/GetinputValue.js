import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const GetinputValue = () => {
    const [input, setinput] = useState('');
  return (
    <View>
        
      <Text>GetinputValue </Text>
      <TextInput placeholder='Enter your name ' value={input} onChange={(Text)=>setinput(Text)} />
       <Button title='Clear input value' onPress={()=>setinput('')} />
        <Text >user value: </Text>
    </View>
  )
}

export default GetinputValue