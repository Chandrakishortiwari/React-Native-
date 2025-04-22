import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'


const Counter = () => {
    const [counter, setcounter] = useState(0);
   const [input, setinput] = useState('');
   const [getinputvalue, setgetinputvalue] = useState('');

   const setdata =()=>{
    setgetinputvalue(input);
    setinput('');
   }

    const incremment = ()=>{
        setcounter(counter + 1);
    }
    const decremment = ()=>{
        if(counter == 0){
          console.log("Wong Way")
        }else{
            setcounter(counter - 1);
        }
    }

  return (
    <View style={{justifyContent:"center", alignItems:"center", marginTop:80, gap:5,}}>
    <Text style={{fontWeight: 900, fontSize:50,}}>{counter}</Text>
    <TouchableOpacity style={{backgroundColor:'green', height:50, width:200, alignItems:"center", padding:2}}>
    <Text onPress={incremment} style={{textAlign:'center', textAlignVertical:'center',fontSize:25,}}>Add counter</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'pink', height:50, width:200, alignItems:"center", padding:2}}>
    <Text onPress={decremment} style={{textAlign:'center', textAlignVertical:'center',fontSize:25,}}>Add counter</Text>
    </TouchableOpacity>

   <TextInput placeholder='entent uour name' onChangeText={(Text)=>setinput(Text)}  />
    <Text>{getinputvalue}</Text>
    <TouchableOpacity onPress={setdata}>
      <Text>grt inputvalue</Text>
    </TouchableOpacity>

    {/* learn props in react-native
    <User counter={counter} setcounter={setcounter} /> */}
    </View>
  )
}

export default Counter


   
//   lear props in react-native



//  const User = ({counter,setcounter})=>{
//     return(
//         <View>
//            <Text style={{fontWeight: 900,}}>{counter}</Text>
//     <TouchableOpacity style={{backgroundColor:'green', height:30, width:80, padding:2}}>
//     <Text onPress={()=>setcounter(counter +1)} style={{}}>Add counter</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//     <Text onPress={()=>setcounter(counter -1)} style={{backgroundColor:'pink', height:30, width:80, padding:2}}>Add counter</Text>
//     </TouchableOpacity>

//         </View>
//     )
//  }