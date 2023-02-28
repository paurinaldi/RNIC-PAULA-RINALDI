import {Platform} from 'react-native';
import styled from 'styled-components/native';
import CircleIcon from '../../assets/icons/circle';
import TickIcon from '../../assets/icons/tick';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  padding: 15px;
  background-color: ${({theme}) =>
    isAndroid ? theme.colors.pink : theme.colors.greyishPink};
  border-radius: 35px;
  margin: 10px 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.darkerGreen};
`;

export const Description = styled.Text`
  font-size: 15px;
  color: ${({theme}) =>
    isAndroid ? theme.colors.darkerGrey : theme.colors.black};
  font-family: 'Lato-Regular';
  padding-bottom: 10px;
`;

export const TaskCompleted = styled(TickIcon)`
  margin: 10px 10px 0px 10px;
  align-self: flex-end;
  height: 24px;
  width: 24px;
`;

export const TaskIncomplete = styled(CircleIcon)`
  margin: 10px 10px 0px 10px;
  align-self: flex-end;
  height: 24px;
  width: 24px;
`;

// export const IconsContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
//   gap: 10px;
//   padding: 0px 10px;
// `;

export const CardImage = styled.Image`
  width: 250px;
  height: 150px;
  align-self: center;
  border-radius: 30px;
`;
