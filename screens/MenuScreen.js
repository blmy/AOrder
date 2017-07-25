import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
//npm install --save react-native-elements
import { Button } from 'react-native-elements';

class MenuScreen extends Component {
  //Whenever this page is shown, navigationOptions will be used to customise the
  //display of the route for MenuScreen.
  //Class level propeerty do not have access to props, therefore
  //not able to use this.props.blah eg this.props.navigation.navigate
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Menu',
      headerRight: (
        <Button
          title="Cart"
          onPress={() => navigation.navigate('cart')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      ),
      //platform specific style for android
      style: {
        //if we are on android return 24 else return 0
        marginTop: Platform.os === 'android' ? 24 : 0
      }
    };
  }

  render() {
    return (
      <View>
        <Text>MenuScreen</Text>
        <Text>MenuScreen</Text>
        <Text>MenuScreen</Text>
        <Text>MenuScreen</Text>
        <Text>MenuScreen</Text>
      </View>
    );
  }
}

export default MenuScreen;
