import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Routes} from '../../types/enums/routes';
import {Tasks} from '../../types/interfaces/tasks';
import {
  Container,
  Title,
  Description,
  CardImage,
  TaskCompleted,
  TaskIncomplete,
} from './styles';

export interface CardProps {
  taskCompleted: (data: Tasks) => void;
  data: Tasks;
  navigation: any;
}

const Card = ({data, taskCompleted, navigation}: CardProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Routes.EDIT_TASK, {
          id: data.id,
        });
      }}>
      <Container>
        <Title> {data.title} </Title>
        <Description> {data.description} </Description>
        {data.img && <CardImage source={data.img} resizeMethod="resize" />}
        <TouchableOpacity onPress={() => taskCompleted(data)}>
          {data.isCompleted ? <TaskCompleted /> : <TaskIncomplete />}
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
