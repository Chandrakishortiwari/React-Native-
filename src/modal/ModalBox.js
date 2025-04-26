import { View, Text, TouchableOpacity, StyleSheet, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalBox = () => {
    const [showAndhide, setshowAndhide] = useState(false);
  return (
    <View style={styles.counter}>
      
      <Modal transparent={true} visible={showAndhide}>
        <View style={styles.modal}>
            <View style={styles.modelentrinalview}>
                <Text>welcome chandra kishore tiwari </Text>
                <Button title='close modal' onPress={()=>setshowAndhide(false)} />
                </View>
        </View>
      </Modal>



        <View style={styles.buttonView}>
        <Button title='Oppen Modal' onPress={()=>setshowAndhide(true)} />
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    counter:{
        flex:1,

    
    },
    buttonView:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom:8,
    },

    modal:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      
      
     
    },
    modelentrinalview:{
        backgroundColor:"gray",
        padding:40,
        borderRadius:10,
        shadowColor:"gray",
        elevation:10,
        gap:50,

    },

})

export default ModalBox