import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ theme }) => theme.sizes.m};
  padding: ${({ theme }) => theme.sizes.m};
  border-radius: ${({ theme }) => theme.sizes.xs};
  ${({ disabled, theme }) => (disabled ? `color: ${theme.colors.error}` : "")}
`;
