import { styled } from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

export const ScrollView = styled.ScrollView`
  width: 100%;
`;

export const WrapperButton = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
  z-index: 1;
`;

export const TouchableWithoutFeed = styled(TouchableWithoutFeedback)`
  width: 100%;
  z-index: 1;
`;

export const Touch = styled.TouchableOpacity`
  width: 100%;
  z-index: 1;
`;
