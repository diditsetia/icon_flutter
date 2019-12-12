import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class IconScreen extends Component {
  render() {
    return (
      <View style={{ padding: 50 }}>
        <Text>
          kamu
        </Text>
        <Icon name="home" size={30} color="#900" />
      </View>
    );
  }
}

export default IconScreen;