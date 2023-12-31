import { css, styled } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large};
    text-align: center;
  `}
`;
