import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) =>  css`
  flex: 1;
  background-color: ${theme.backgrounds.primary};
  `};
`;

export const Content = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  ${({ theme }) =>  css`
  height: 30%;
  background-color: ${theme.backgrounds.secondary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  `};
`;

export const WapperAnimation = styled.View`
  border-radius: 500px;
  height: 300px;
  width: 300px;
  justify-content: center;
  align-items: center;
  background-color: #D44346;
`;

export const Title = styled.Text`
  ${({ theme }) =>  css`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.backgrounds.secondary};
  margin-top: 20px;
  text-align: center;
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) =>  css`
  font-size: 16px;
  color: ${theme.backgrounds.secondary};
  text-align: center;
  margin-top: 10px;
  `};
`;