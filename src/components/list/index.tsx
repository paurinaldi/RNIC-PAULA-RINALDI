import React from 'react';
import {FlatList} from 'react-native';
import {Tasks} from '../../types';
import Card from '../card';
import {Container, EmptyList} from './styles';

export interface ListProps {
  data: Tasks[];
  editData: (data: Tasks) => void;
}

const List = ({data, editData}: ListProps) => {
  const emptyListMsg = <EmptyList>No tasks submited yet</EmptyList>;
  return (
    <Container>
      <FlatList
        data={data}
        ListEmptyComponent={emptyListMsg}
        renderItem={({item}) => <Card editData={editData} data={item} />}
      />
    </Container>
  );
};

export default List;
