import React from 'react';
import {FlatList} from 'react-native';
import {Tasks} from '../../types/interfaces/tasks';
import Card from '../card';
import Title from '../title';
import {Container, EmptyList} from './styles';

export interface ListProps {
  data: Tasks[];
  taskCompleted: (data: Tasks) => void;
  navigation: any;
}

const List = ({data, taskCompleted, navigation}: ListProps) => {
  const emptyListMsg = <EmptyList>No tasks submited yet</EmptyList>;
  return (
    <Container>
      <Title />
      <FlatList
        data={data}
        ListEmptyComponent={emptyListMsg}
        renderItem={({item}) => (
          <Card
            navigation={navigation}
            taskCompleted={taskCompleted}
            data={item}
          />
        )}
      />
    </Container>
  );
};

export default List;
