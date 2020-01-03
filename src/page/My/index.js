
import React, { Component } from 'react';
import {
    View,
    Button,
    Alert,
} from 'react-native';
import StorageUtil from '../../utils/StorageUtil';

export default class My extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title='请求数据' onPress={() => {
                    // http://m.app.haosou.com/index/getData?type=1&page=1
                    fetch('http://m.app.haosou.com/index/getData?type=1&page=1')
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }} />

                <Button title='存储数据' onPress={() => {
                    StorageUtil.setData('key1', '测试数据2')
                        .then((result) => {
                            Alert.alert(result);
                        })
                }} />
                <Button title='获取数据' onPress={() => {
                    StorageUtil.getData('key1')
                        .then((result) => {
                            Alert.alert(result);
                        })
                }} />
                <Button title='删除数据' onPress={() => {
                    StorageUtil.deleteData('key1')
                        .then((result) => {
                            Alert.alert(result);
                        })
                }} />
            </View>
        );
    }

}