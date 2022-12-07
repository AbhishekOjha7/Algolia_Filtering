import React from 'react';
import {Text} from 'react-native';
import {connectHighlight} from 'react-instantsearch-native';

const Highlight = ({attribute, hit, highlight}: any) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });
  return (
    <Text>
      {highlights.map(({value, isHighlighted}: any, index: any) => {
        const style = {
          backgroundColor: isHighlighted ? 'yellow' : 'transparent',
        };
        return (
          <Text key={index} style={style}>
            {value}
          </Text>
        );
      })}
    </Text>
  );
};

export default connectHighlight(Highlight);
