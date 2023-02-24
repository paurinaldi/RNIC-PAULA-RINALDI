import React from 'react';
import {TouchableHighlight, TouchableOpacity} from 'react-native';
import CloseIcon from '../../assets/icons/close';
import EditIcon from '../../assets/icons/edit';
import {Tasks} from '../../types';
import {
  Container,
  Title,
  Description,
  CardStatus,
  IconsContainer,
  CardImage,
} from './styles';

export interface CardProps {
  editData: (data: Tasks) => void;
  data: Tasks;
}

const Card = ({data, editData}: CardProps) => {
  return (
    <TouchableOpacity onPress={() => editData(data)}>
      <Container>
        <IconsContainer>
          <TouchableHighlight>
            <EditIcon />
          </TouchableHighlight>
          <TouchableHighlight>
            <CloseIcon />
          </TouchableHighlight>
        </IconsContainer>
        <Title> {data.title} </Title>
        <Description> {data.description} </Description>
        {data.img && <CardImage source={data.img} resizeMethod="resize" />}
        {data.isCompleted && <CardStatus />}
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
