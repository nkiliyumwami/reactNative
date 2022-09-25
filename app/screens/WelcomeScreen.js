import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';


import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
  return (
   <ImageBackground
        blurRadius={10}
        source={require('../assets/background.jpg')}
        style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-red.png')} style={styles.logo} />
          <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
      <View style={styles.buttonsContainer}> 
        <AppButton title='Login' onPress={() => navigation.navigate(routes.LOGIN) } />
        <AppButton title='Register'  color='secondary' onPress={() => navigation.navigate(routes.REGISTER)}/>
      </View>

   </ImageBackground>
  );

}

const styles = StyleSheet.create({
  background: {
    flex:1, //Make it fill the entire page
    justifyContent: 'flex-end', //This moves the buttons to the end
    alignItems: 'center', //This will put the logo in the center
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  //logo and text by default will be down: as we set justifyContend to flex-end of the parent.
  //to change this behavior we will change the position of the logoContainer to absolute and top
  //and alignItems to center text and logo.
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
})

export default WelcomeScreen;






// const styles = StyleSheet.create({
//   logo: {
//     width: 50,
//     height:50,

//   },
//   container: {
//     //flex: 1,
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   logoContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   redBtn: {
//     backgroundColor: '#fc5c65',
//     height: 50,
//     top: 590,
//   },
//   greenBtn: {
//     backgroundColor: '#4ECDC4',
//     height: 50,
//     //position: 'absolute',
//     top: 600,
//   }
// })