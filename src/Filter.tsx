import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import {Configure, InstantSearch} from 'react-instantsearch-native';
import RefinementList from './RefinementList';
const Filters = ({
  isModalOpen,
  searchState,
  searchClient,
  toggleModal,
  onSearchStateChange,
}: any) => {
  console.log('SearchState', searchState);
  const data = ['manufacturer', 'categories', 'salePrice_range'];

  const ScrollRef: any = useRef();
  const [value, setValue] = useState([]);

  return (
    <Modal animationType="slide" visible={isModalOpen}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.title}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'black',
                paddingHorizontal: 10,
                backgroundColor: 'lightgrey',
              }}>
              <Text
                style={styles.titleText}
                onPress={() => {
                  ScrollRef.current?.scrollToIndex({
                    index: 0,
                  });
                }}>
                {data[0]}
              </Text>
              <Text
                style={styles.titleText}
                onPress={() => {
                  ScrollRef.current?.scrollToIndex({
                    index: 1,
                  });
                }}>
                {data[1]}
              </Text>
              <Text
                style={styles.titleText}
                onPress={() => {
                  ScrollRef.current?.scrollToIndex({
                    index: 2,
                  });
                }}>
                {data[2]}
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
            <View>
              <InstantSearch
                searchClient={searchClient}
                indexName="Appinventiv_DATA"
                searchState={searchState}
                onSearchStateChange={onSearchStateChange}>
                <FlatList
                  data={data}
                  ref={ScrollRef}
                  renderItem={({item}) => {
                    return <RefinementList attribute={item} />;
                  }}
                />
              </InstantSearch>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default Filters;

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
  container: {
    flex: 1,
  },
  title: {
    height: 500,
    width: 250,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    marginVertical: 10,
  },
});
