import React from 'react'
import Constants from 'expo-constants'
import {SafeAreaView, StyleSheet, View} from 'react-native'

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}> 
        {/* in order to use this screen components as a native components and pass children inside */}
        {/* Safe area view doesn't accept padding: that is why our children is inside a view */}
        <View style={style}>
        {children}
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
});
export default Screen