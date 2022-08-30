import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable  from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import AppText from './AppText/AppText'

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.light}>
        <View style={styles.container}>
            {/* Render image only when you have image: this make it a reusable component */}
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
        </View>
        </TouchableHighlight>
    </Swipeable>
    
    
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Because we will have two sides right and left sides
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    }, 
    image: {
        width: 70,
        height: 70,
        borderRadius: 35, //1/2 of the size so that we can have a full squared image
       
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium
    }
});
export default ListItem
