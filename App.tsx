import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Button} from 'react-native';
import algoliasearch from 'algoliasearch';
import {InstantSearch, connectRefinementList} from 'react-instantsearch-native';
import SearchBox from './src/SearchBox';
import InfiniteHits from './src/InfiniteHits';
import Filters from './src/Filter';

const searchClient = algoliasearch(
  'SS7JYYYRGE',
  '3a5ba24ad1e9aaf1e93ebac5b725090a',
);

const VirtualRefinementList = connectRefinementList(() => null);
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchState, setSearchState] = useState({});
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSearchStateChange = (searchState: any) => {
    console.log('SearchState',searchState)
    setSearchState(searchState);
  };

  return (
    <View style={styles.parent}>
      <SafeAreaView style={styles.safe} />
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <InstantSearch
          searchClient={searchClient}
          indexName="Appinventiv_DATA"
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}>
          <VirtualRefinementList attribute="manufacturer" />
          <VirtualRefinementList attribute="categories" />
          <VirtualRefinementList attribute="salePrice_range" />
          <Filters
            isModalOpen={isModalOpen}
            searchClient={searchClient}
            searchState={searchState}
            toggleModal={toggleModal}
            onSearchStateChange={onSearchStateChange}
          />
          <SearchBox />
          <Button title="Filters" color="black" onPress={toggleModal} />
          <InfiniteHits />
        </InstantSearch>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#131921',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  parent: {
    flex: 1,
  },
});
