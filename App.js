import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';//connector between react and react-redux

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import ExploreScreen from './screens/ExploreScreen';
import MyOrderScreen from './screens/MyOrderScreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          favourite: {
            screen: FavouriteScreen,
            navigationOptions: {
              tabBarLabel: 'Favourite'
            }
          },
          explore: {
            screen: ExploreScreen,
            navigationOptions: {
              tabBarLabel: 'Explore'
            }
          },
          myOrder: {
            screen: MyOrderScreen,
            navigationOptions: {
              tabBarLabel: 'My Order'
            }
          }
        })
      },
      subMain: {
        screen: StackNavigator({
          menu: {
            screen: MenuScreen,
            navigationOptions: {
              title: 'Menu'
            }
           },
          cart: {
            screen: CartScreen,
            navigationOptions: {
              title: 'Cart'
            }
           },
          payment: {
            screen: PaymentScreen,
            navigationOptions: {
              title: 'Payment'
            }
           }
        })
      }
    },
    {
      //Not showing my MainNavigator tab which consist of
      //welcome, auth, main and subMain screen.
      navigationOptions: {
        tabBarVisible: false
      },
      //Lazy loading is a design pattern commonly used in computer
      //programming to defer initialization of an object until the
      //point at which it is needed.
      lazy: true
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
