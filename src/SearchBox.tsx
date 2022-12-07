import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {connectSearchBox} from 'react-instantsearch-native';

const SearchBox = ({currentRefinement, refine}: any) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={value => refine(value)}
      value={currentRefinement}
      placeholder="Search Products here"
      placeholderTextColor={'grey'}
    />
  </View>
);

export default connectSearchBox(SearchBox);
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#131921',
  },
  input: {
    height: 48,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
