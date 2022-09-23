import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/lists/ListItem'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const menuItems =[{
    title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    }, 
    {
    title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }]

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
        <ListItem 
            title='Clarisse Ingabire'
            subTitle='ingabire@clemsolutions.com'
            image={require('../assets/emma.jpg')} />
        </View>

        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({item}) =>  
                <ListItem
                    title={item.title}
                    IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    } />
            }
            
            
            
            
            
            />
        </View>

        <ListItem 
            title='Log Out'
            IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}/>
        
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
});
export default AccountScreen

