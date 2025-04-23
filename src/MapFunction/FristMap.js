import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const FristMap = () => {
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
    <View>
        <SafeAreaView>
            <ScrollView>
      <Text>FristMap</Text>
      {DATA.map((item)=> <text>{item.title}</text>)}
      </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default FristMap