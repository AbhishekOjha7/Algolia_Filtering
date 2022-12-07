import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Button} from 'react-native';
import algoliasearch from 'algoliasearch';
import {InstantSearch, connectRefinementList} from 'react-instantsearch-native';
import SearchBox from './src/SearchBox';
import InfiniteHits from './src/InfiniteHits';
import Filters from './src/Filter';

const searchClient = algoliasearch(
  'W2OFSLZD6V',
  '6d2dc7b162f500ef42a18746f3170376',
);

const VirtualRefinementList = connectRefinementList(() => null);
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchState, setSearchState] = useState({});
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSearchStateChange = (searchState: any) => {
    setSearchState(searchState);
  };

  return (
    <View style={styles.parent}>
      <SafeAreaView style={styles.safe} />
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <InstantSearch
          searchClient={searchClient}
          indexName="Appinventiv_Algolia"
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}>
          <VirtualRefinementList attribute="brand" />
          <Filters
            isModalOpen={isModalOpen}
            searchClient={searchClient}
            searchState={searchState}
            toggleModal={toggleModal}
            onSearchStateChange={onSearchStateChange}
          />
          <SearchBox />
          <Button title="Filters" color="#252b33" onPress={toggleModal} />
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
