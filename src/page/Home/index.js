import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js'
import HomeDetails from './HomeDetails.js'

const HomeNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen
      },
      Detail: {
          screen: HomeDetails
      }
    },
    {
        defaultNavigationOptions: {
            headerTitleStyle: {
                color: 'white',
            }, 
            headerStyle: {
                backgroundColor: 'rgb(29,216,200)'
            }
        }
    }
);

HomeNavigator.navigationOptions = ({navigation}) => {

    let tabBarVisible = true;
    if(navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible
    };
}

export default HomeNavigator