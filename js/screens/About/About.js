import React, {Component} from 'react';
import { Platform, Text, View } from 'react-native';
class About extends Component {
  render() {
    return <div style={styles.color}>About</div>;
  }
}

const styles = StyleSheet.create({
    color: {
        color: "red"
    }   
});

export default About;
