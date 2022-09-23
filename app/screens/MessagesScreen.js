import React, {useState} from 'react'
import { FlatList, StyleSheet, View} from 'react-native'

import ListItem from '../components/lists/ListItem'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import Screen from '../components/Screen'



const initialMessages = [
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
    //Set a state and hook to be able to delete a message and re-render the component
    const [messages, setMessages] = useState(initialMessages)

    //State to refresh/pull to refresh
    const [refreshing, setRefreshing] = useState(false)

    //Function to delete a message 
    const handleDelete = message => {
        //Delete a message from a messages array//We need a state and hook
        //We update the state and re-render
         const newMessages = messages.filter((m) =>m.id !== message.id)
         setMessages(newMessages)
    }
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
                onPress={() => console.log('Message selected', item.description)}
                renderRightActions={() => 
                    <ListItemDeleteAction  onPress={() => handleDelete(item)}/>}
            />} 
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/emma.jpg')
                }
            ])
        }}
                />
    </Screen>
    
  )
}

const styles = StyleSheet.create({
    
});

export default MessagesScreen