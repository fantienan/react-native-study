import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as pages from './pages.js'
import CustomBottomTabBar from './CustomBottomTabBar.js'

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: pages.Home,
        },
        Company: {
            screen: pages.Company,
        },
        Message: {
            screen: pages.Message,
        },
        My: {
            screen: pages.My,
        }
    },
    {
        initialRouteName: 'Company',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'globe';
                } else if (routeName === 'Company') {
                    iconName = 'building-o';
                } else if (routeName === 'Message') {
                    iconName = 'comments-o';
                } else if (routeName === 'My') {
                    iconName = 'user-circle-o';
                }
                return <Icon name={iconName} size={20} color={tintColor} />;
            },
        }),
        // order: [],
        // 自定义底部导航 控制底部菜单的显示/隐藏
        // tabBarComponent: CustomBottomTabBar,
        tabBarOptions: {
            activeTintColor: 'rgb(29,216,200)',
            inactiveTintColor: 'gray'
        }
    }
)


const AppNavigator = createSwitchNavigator({
    Init: pages.Welcome,
    Main: TabNavigator
});


export default createAppContainer(AppNavigator);