import styled, { css } from "styled-components/native";

export const Button = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.backgrounds.primary};
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: 90%;
  `}
`;

export const TextButton = styled.Text`
  ${({theme}) => css`
    color: ${theme.texts.primary};
    font-size: 16px;
    font-weight: bold;
  `}
`;

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.backgrounds.secondary};
  `}
`;