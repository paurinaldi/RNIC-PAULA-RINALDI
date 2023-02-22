import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ListProps} from '../../types';
import Card from '../card';
import {styles} from './styles';

const List = ({data}: ListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            isCompleted={item.isCompleted}
            title={item.title}
            description={item.description}
          />
        )}
      />
      {!data.length && (
        <Text style={styles.noCardsMsg}>No tasks submited yet</Text>
      )}
    </View>
  );
};

export default List;
