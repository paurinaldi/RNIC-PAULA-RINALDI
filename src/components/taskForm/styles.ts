import styled from 'styled-components/native';
import TickIcon from '../../assets/icons/tick';

export const Container = styled.View`
  opacity: 10;
  border: 0.5px solid ${({theme}) => theme.colors.greyishGreen};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  padding-top: 10px;
  color: ${({theme}) => theme.colors.greyishGreen};
`;

export const Input = styled.TextInput`
  font-size: 18px;
  background-color: ${({theme}) => theme.colors.grey};
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 20px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.pink};
  border-radius: 50px;
  margin: 30px 130px;
  height: 60px;
  width: 150px;
`;

export const ButtonLabel = styled.Text`
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
  text-align: center;
  color: ${({theme}) => theme.colors.greyishGreen};
`;

export const SubmitIcon = styled(TickIcon)`
  height: 24px;
  width: 24px;
`;
