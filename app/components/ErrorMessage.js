import React from 'react'
import {StyleSheet} from 'react-native'
import AppText from './AppText/AppText'

function ErrorMessage({error, visible}) {
    // Return null if error doesn't exist instead of returning an empty component
    if(!visible || !error) return null

  return (
    <AppText style={styles.error}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
});

export default ErrorMessage