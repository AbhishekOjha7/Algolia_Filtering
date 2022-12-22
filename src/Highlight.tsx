import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {connectHighlight} from 'react-instantsearch-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Highlight = ({attribute, hit, highlight}: any) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });
  return (
    <Text numberOfLines={3}>
      {highlights.map(({value, isHighlighted}: any, index: any) => {
        return (
          <Text
            key={index}
            style={{
              backgroundColor: isHighlighted ? 'yellow' : 'transparent',
              fontSize: 18,
              color: attribute === 'salePrice' ? 'red' : 'black',
            }}>
        { attribute==='salePrice' ? `${'$'}${value}` : value }

          </Text>
        );
      })}
    </Text>
  );
};

export default connectHighlight(Highlight);
