import { TextInput, View, StyleSheet, Platform} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import defaultStyles from '../config/styles';

 function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
        {/* We want icon to be optional and render this if icon exist */}
     {icon && (<MaterialCommunityIcons 
        name={icon} 
        size={20}  
        color={defaultStyles.colors.medium} 
        style={styles.icon}
        />
    )}
     <TextInput style={defaultStyles.text} {...otherProps}/>
    </View>
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
    }
});

export default AppTextInput;