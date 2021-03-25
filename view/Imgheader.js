import React, { Component } from 'react'
import { StyleSheet, Text,TouchableOpacity, View, Dimensions } from 'react-native';

import { Header } from 'react-navigation';
import {HeaderImageScrollView,TriggeringView } from 'react-native-image-header-scroll-view';
import {px2dp }from '../src/px2dp'
const MIN_HEIGHT = Header.HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width,
  },
});

export default class Imgheader extends Component<Props> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <HeaderImageScrollView
          maxHeight={px2dp(200)}
          minHeight={ MIN_HEIGHT}
          headerImage={require('../image/icons/tp1.png')}
          renderForeground={() => (
            <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => console.log('tap!!')}>
                <Text style={{ backgroundColor: 'transparent' }}>Tap Me!</Text>
              </TouchableOpacity>
            </View>
          )}
        >
          <View style={{ height: 1000 }}>
            <TriggeringView onHide={() => console.log('text hidden')}>
              <Text>Scroll Me!</Text>
            </TriggeringView>
          </View>
        </HeaderImageScrollView>
    );
  }
}


