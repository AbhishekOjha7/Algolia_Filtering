import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import {connectInfiniteHits} from 'react-instantsearch-native';
import Highlight from './Highlight';

const InfiniteHits = ({hits, hasMore, refineNext}: any) => (
  <FlatList
    data={hits}
    keyExtractor={item => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refineNext()}
    renderItem={({item}) => {
      console.log('renderr', item);
      return (
        <View style={styles.item}>
          <Image style={styles.renderImg} source={{uri: item?.image}} />
          <Highlight attribute="name" hit={item} />
        </View>
      );
    }}
  />
);

export default connectInfiniteHits(InfiniteHits);
const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    width: 340,
  },
  titleText: {
    fontWeight: 'bold',
  },
  renderImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});
