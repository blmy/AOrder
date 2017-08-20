import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

class ExploreScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
      </View>
    );
  }
}

export default ExploreScreen;
