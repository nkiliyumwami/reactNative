import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import colors from '../config/colors';
import AppText from './AppText/AppText'

function ListItem({title, subTitle, image, onPress}) {
  return (
    <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.light}>
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
        </View>
    </TouchableHighlight>
    
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Because we will have two sides right and left sides
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35, //1/2 of the size so that we can have a full squared image
        marginRight: 10
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium
    }
});
export default ListItem
