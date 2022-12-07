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
    padding: 8,
  },
  titleText: {
    fontWeight: 'bold',
  },
  renderImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
