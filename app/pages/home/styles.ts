import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) =>  css`
  flex: 1;
  background-color: ${theme.backgrounds.secondary};
  `};
  padding: 20px;
`;