import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default class MessageScreen extends React.Component {
    render() {
        const { data } = this.props.navigation.state.params
        return (
            <View>
                <Text>{data}</Text>
            </View>
        )
    }
}