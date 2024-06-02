import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowidth = Dimensions.get('window').width;
export const Container = styled.View`
  ${({ theme }) =>  css`
  flex: 1;
  background-color: ${theme.backgrounds.secondary};
  `};
  padding: 20px;
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
  width: ${windowidth}px;
  height: 220px;
  background-color: ${theme.backgrounds.secondary};
  margin-left: -20px;
  `};
  `;


export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: 32px;
  font-height: 36px;
  font-weight: bold;
  color: ${theme.texts.black};
  `};
`;