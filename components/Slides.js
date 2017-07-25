import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

//get the phone screen size
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length -1) {
      return (
        //Because button is a react-native-elements,
        //it does not take style property.
        //It has it's own prperty buttonStyle.
        //onComplete is a function without parentheses because
        //it will be call in the future when user presses on the button.
        //If we include the parentheses, it will be called the instant
        //the button is rendered.
        <Button
          title="Begin!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    //this.props.data is a prop setup in WelcomeScreen for <Slides>
    //index is the array of data been passed. eg 0,1,2,3
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles ={
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default Slides;
