import React from 'react';
import { DeviceEventEmitter, View } from 'react-native'
import {BottomTabBar} from 'react-navigation-tabs'

//自定义BottomTabBar
export default class CustomBottomTabBar extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }

    componentDidMount() {
        // 这里监听一个事件，如果需要显示商品推荐页面，则将showMarket置为true
        this.subscribe = DeviceEventEmitter.addListener('triggerBottomTabBar', paramas => {
            const {type} = paramas || {}
            this.setState({
                isShow: type
            });
        });
    };

    componentWillUnmount() {
        this.subscribe && this.subscribe.remove();
    };

    dealNavigation = () => {
        const { routes, index } = this.props.navigation.state;
        
        return {
            state: {
                index,
                routes
            }
        };
    };

    render() {
        const { navigation, ...restProps } = this.props;
        return <BottomTabBar {...restProps} navigation={this.dealNavigation()} />;
    }
}
