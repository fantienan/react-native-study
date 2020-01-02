import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default function DetailsScreen(props) {
    const { name } = props.navigation.state.params
    return (
        <View>
            <Text>{name}</Text>
            <Button title='go to Message' onPress={() => {
                props.navigation.navigate('Message', { data: 'Hello ' + name })
            }} />
        </View>
    )
}
