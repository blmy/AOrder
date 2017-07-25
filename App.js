import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

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
          favourite: { screen: FavouriteScreen },
          explore: { screen: ExploreScreen },
          myOrder: { screen: MyOrderScreen },
          subMain: {
            screen: StackNavigator({
              menu: { screen: MenuScreen },
              cart: { screen: CartScreen },
              payment: { screen: PaymentScreen }
            })
          }
        })
       }
    });

    return (
      <MainNavigator />
    );
  }
}
