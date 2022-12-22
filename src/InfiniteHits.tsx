import React from 'react';
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import {connectInfiniteHits} from 'react-instantsearch-native';
import Highlight from './Highlight';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const InfiniteHits = ({hits, hasMore, refineNext}: any) => 
  <FlatList
    data={hits}
    keyExtractor={item => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refineNext()}
    numColumns={2}
    renderItem={({item}) => {
      // console.log("renderdata===>",item);
      const firstpart = item.image.slice(0,4)
      const secondpart=item.image.slice(4,)
      return (
        <View style={styles.item}>
          <Image source={{uri: `${firstpart}s${secondpart}`}} style={styles.renderImg}/>
          <Highlight attribute="name" hit={item} />
          <Highlight attribute='salePrice'hit ={item} />

        </View>
      );
    }}
  />


export default connectInfiniteHits(InfiniteHits);
const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    alignContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    width: windowWidth / 2,
    margin: 2,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  titleText: {
    fontWeight: 'bold',
  },
  renderImg: {
    height: 90, 
    width: 100,
   resizeMode: 'contain',
   borderRadius:5,
   
  },

});
