import React from 'react'
import { FlatList, StyleSheet, View} from 'react-native'

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'



const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/emma.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/emma.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/emma.jpg')
    }
]

function MessagesScreen() {
  return (
    <Screen >
        <FlatList
        data={messages}
        //a function to loop through the array and get each id as a key then convert to a string
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
            <ListItem 
                title={item.title} 
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('Message selected', item)}/>} 
        ItemSeparatorComponent={ListItemSeparator}
                />
    </Screen>
    
  )
}

const styles = StyleSheet.create({
    
});

export default MessagesScreen