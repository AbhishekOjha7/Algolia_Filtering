import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import {InstantSearch} from 'react-instantsearch-native';
import RefinementList from './RefinementList';

const Filters = ({
  isModalOpen,
  searchState,
  searchClient,
  toggleModal,
  onSearchStateChange,
}: any) => (
  <Modal animationType="slide" visible={isModalOpen}>
    <SafeAreaView style={styles.container}>
      <InstantSearch
        searchClient={searchClient}
        indexName="Appinventiv_Algolia"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}>
        <RefinementList attribute="brand" />
        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </InstantSearch>
    </SafeAreaView>
  </Modal>
);

export default Filters;

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: '800',
  },
  container: {
    flex: 1,
  },
});
