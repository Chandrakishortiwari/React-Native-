import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const CreateForm = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [display, setdisplay] = useState(false)
    const Resetinputvalue = ()=>{
        setdisplay(false);
        setname('');
        setemail('');
        setpassword('');  
    }
  return (
    <View>
      <Text>React native form</Text>
      <TextInput style={style.TextInputs} placeholder='Please enter your name' value={name} onChangeText={(Text) =>setname(Text) } />
      <TextInput style={style.TextInputs}  placeholder='Please enter your Email ' value={email} onChangeText={(Text) =>setemail(Text) } />
      <TextInput style={style.TextInputs} secureTextEntry={true}  placeholder='Please enter your password' value={password} onChangeText={(Text) =>setpassword(Text) } />
        <View style={{margin:10,}}>
        <Button title='Submit' onPress={()=>setdisplay(true)} />
        <Button title='Reset' onPress={Resetinputvalue} />
        </View>
       
            {display ? <View>
                <Text>User name :{name}</Text> 
                <Text> User Email :{email}</Text> 
                <Text>User Password :{password}</Text> 
             </View>: null}
       
    </View>
  )
}

 const style = StyleSheet.create({
   TextInputs:{
    borderWidth:2,
    fontSize:18,
    color:"blue",
    borderColor:"black",
    margin:10,

   }
 })

export default CreateForm