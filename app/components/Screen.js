import React from 'react'
import Constants from 'expo-constants'
import {SafeAreaView, StyleSheet} from 'react-native'

function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}> 
        {/* in order to use this screen components as a native components and pass children inside */}
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
    }
});
export default Screen