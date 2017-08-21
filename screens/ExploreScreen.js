import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';

class ExploreScreen extends Component {
  onComplete = () => {
    this.props.navigation.navigate('menu');
  }

  render() {
    return (
      <Button
        title="Menu"
        raised
        buttonStyle={styles.buttonStyle}
        onPress={this.onComplete}
      />
    );
  }
}

const styles ={
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default ExploreScreen;
