import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import defaultStyles from '../config/styles';
import AppText from './AppText/AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';



 function AppPicker ({icon,items, onSelectedItem, selectedItem, placeholder}) {
    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
        {/* We want icon to be optional and render this if icon exist */}
     {icon && (<MaterialCommunityIcons 
        name={icon} 
        size={20}  
        color={defaultStyles.colors.medium} 
        style={styles.icon}
        />
    )}
        <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
        <MaterialCommunityIcons 
            name='chevron-down'
            size={20}  
            color={defaultStyles.colors.medium} 
            />
        </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
        <Screen>
            <Button  title='Close' onPress={()=> setModalVisible(false)}/>
            {/* Render a modal as Flatlist */}
            <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={({item}) => 
                    <PickerItem 
                        label={item.label}
                        onPress={() => {
                           setModalVisible(false);
                            onSelectedItem(item);
                        }}
                        />} 
                        />
        </Screen>
    </Modal>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row', //This so that the text and icon are on the same line horizontally
        width:'100%',
        padding: 15,
        marginVertical: 10
    },
    
    icon: {
       marginRight: 10, 
    },
    text: {
        flex: 1,
    }
});

export default AppPicker;