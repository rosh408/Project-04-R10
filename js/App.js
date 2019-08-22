import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {FavesProvider} from './context/FavesContext';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from '@apollo/react-hooks';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <View>
            <RootStackNavigator/>
            dsc sdc lca,lsc,
          </View>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  
});
