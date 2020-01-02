import React from 'react';
import { View, Text, Button, } from 'react-native';
import List from './List.js'
import styles from './styles';

export default function HomeScreen(props) {
    callback = item => {
        
        props.navigation.navigate('Details', {...item})
    }
    return (
        <View style={styles.container}>
            <List callback={item => callback(item)}/>
        </View>
    );
}
