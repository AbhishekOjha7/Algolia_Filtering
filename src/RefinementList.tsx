import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connectRefinementList} from 'react-instantsearch-native';

const RefinementList = ({items, refine}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Brand</Text>
      </View>
      <View style={styles.list}>
        {items.map((item: any) => {
          const labelStyle = {
            fontSize: 18,
            fontWeight: item.isRefined ? '900' : '400',
            color: 'black',
          };
          console.log('refine', item);

          return (
            <TouchableOpacity
              key={item.value}
              onPress={() => refine(item.value)}
              style={styles.item}>
              <Text style={labelStyle}>{item.label}</Text>
              <View style={styles.itemCount}>
                <Text style={styles.itemCountText}>{item.count}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default connectRefinementList(RefinementList);
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffff',
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
  list: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  itemCount: {
    backgroundColor: '#131921',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 7.5,
  },
  itemCountText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },
});
