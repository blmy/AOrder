import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.fbLogin();
    //to remove once App is completed
    //AsyncStorage.removeItem('fb_token');
    this.onAuthComplete(this.props);
  }

  //called whenever a component is about to be re-render
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('favourite');
    }
    else {
      this.props.navigation.navigate('welcome');
    }
  }

  render() {
    return (
      <View>
      <Text>Auth Screen</Text>
      <Text>Auth Screen</Text>
      <Text>Auth Screen</Text>
      <Text>Auth Screen</Text>
      </View>
    );
  }
}

function mapStateToProps({ auth }){
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
