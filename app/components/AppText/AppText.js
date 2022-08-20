import React from 'react';
import { Text, StyleSheet} from 'react-native';

//import styles from './styles';

function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

//Platform-specific Code 
//we spread the object 'Platform.select'(with ...) to copy it to the 'text' object
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        
    }
});


export default AppText;