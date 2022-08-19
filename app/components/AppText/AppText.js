import React from 'react';
import { Text} from 'react-native';

import styles from './styles';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

//Platform-specific Code 
//we spread the object 'Platform.select'(with ...) to copy it to the 'text' object



export default AppText;