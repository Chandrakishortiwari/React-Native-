import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const Flatelislearn = () => {
    const DATA = [
        {
          id: '1',
          title: 'First Item',
        },
        {
          id: '2',
          title: 'Second Item',
        },
        {
          id: '3',
          title: 'Third Item',
        },
        {
            id: '4',
            title: 'Third Item',
          },
          {
            id: '5',
            title: 'Third Item',
          },
          {
            id: '6',
            title: 'Third Item',
          },
      ];
      
  return (
    
        <SafeAreaView>
            <FlatList data={DATA}  renderItem={({item}) =><Text>{item.title}</Text>} keyExtractor={item=> item.id} />

        </SafeAreaView>
     

  )
}

export default Flatelislearn