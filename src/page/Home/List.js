import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
    Dimensions,
    RefreshControl
} from 'react-native';
import cityList from '../momock/city.json'
import styles from './styles';
const { width } = Dimensions.get('window')

export default function List(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isRefresh, setIsRefresh] = useState(false)
    const init = () => {
        setTimeout(() => {
            setData(cityList)
            setLoading(false)
        }, 1000)
    }
    const renderLoading = () => (
        <View style={styles.loading}>
            <ActivityIndicator size='large' color='gray' />
        </View>
    )
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => props.callback(item)}>
            <Text style={{ marginVertical: 20, marginLeft: 10 }}>{item.name}</Text>
        </TouchableOpacity>
    )
    const renderListHeader = () => (
        <View style={{ width, height: 50, backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>头部</Text>
        </View>
    )
    const renderListFooter = () => (
        <View style={{ width, height: 50, backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>底部</Text>
        </View>
    )
    const refreshControl = () => (
        <RefreshControl
            title={'laoding'}
            tintColor='red'
            titleColor='red'
            refreshing={isRefresh}
            onRefresh={() => {
                setIsRefresh(true)
                setTimeout(() => {
                    setIsRefresh(false)
                }, 2000);
            }}
        />
    )
    const extractorKey = (item, index) => {
        return 'index' + item.zip;
    }
    const onEndReached = (item, index) => {
        Alert.alert('onEndReached');
    }
    useEffect(() => {
        init()
    })
    if (loading) {
        return renderLoading()
    }
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItem}
                // ListEmptyComponent={}
                ListFooterComponent={renderListFooter}
                ListHeaderComponent={renderListHeader}
                refreshControl={
                    <RefreshControl
                        title={'laoding'}
                        tintColor='red'
                        titleColor='red'
                        refreshing={isRefresh}
                        onRefresh={() => {
                            setIsRefresh(true)
                            setTimeout(() => {
                                setIsRefresh(false)
                            }, 2000);
                        }}
                    />
                }
                keyExtractor={extractorKey}
                //监听滑动到底部的事件
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                ItemSeparatorComponent={() => (<View style={{ height: 1, backgroundColor: '#999' }} />)}
                
            />
        </SafeAreaView>
    );
}
