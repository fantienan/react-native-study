import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as pages from './index.js';
import IcoMoonIcon from '../icomoon'
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomBottomTabBar from './CustomBottomTabBar.js'

const BottomNavigator = createBottomTabNavigator({
    Home: {
        screen: pages.Home,
        navigationOptions: {
            title: "首页",
            headerStyle: {
                backgroundColor: 'green'
            },
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                // name就是svg生成字体图标时的文件名, 在selection.json里有定义
                
                // return <Icon name={'angle-right'} size={24} color={tintColor} />
                return <IcoMoonIcon name='home' size={25} color={tintColor} />
                // return <Ionicons name={'home'} size={25} style={{ color: tintColor }} />
            }
        }
    },
    My: {
        screen: pages.My,
        navigationOptions: {
            title: "我的",
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return <Ionicons name={'ios-home'} size={25} style={{ color: tintColor }} />
            }
        }
    },
}, {
    // defaultNavigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //         
    //         const { routeName } = navigation.state;
    //         let IconComponent = Ionicons;
    //         let iconName;
    //         if (routeName === 'Home') {
    //             iconName = `android-information-circle${focused ? '' : '-outline'}`;
    //             // Sometimes we want to add badges to some icons.
    //             // You can check the implementation below.
    //             // IconComponent = HomeIconWithBadge;
    //         } else if (routeName === 'Web') {
    //             iconName = `android-options`;
    //         }

    //         // You can return any component that you like here!
    //         return <IconComponent name={iconName} size={25} color={tintColor} />;
    //     },
    // }),
    
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',

    },
    // order: ['My', 'Details', 'Home'],
    // 自定义底部导航 控制底部菜单的显示/隐藏
    tabBarComponent: CustomBottomTabBar
});

const AppNavigator = createStackNavigator({
    Root: {
        screen: BottomNavigator,
        navigationOptions: {
            header: null,
        }
    },
    Details: {
        screen: pages.Details,
    },
    Message: {
        screen: pages.Message,
    }
});

export default createAppContainer(AppNavigator);