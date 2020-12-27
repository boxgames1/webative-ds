import styled from "styled-components";

type ContainerProps = {
  theme?: any;
  disabled?: boolean;
}

export const Container: Function = styled.div`
  margin: ${({ theme }: ContainerProps) => theme.sizes.m};
  padding: ${({ theme }: ContainerProps) => theme.sizes.m};
  border-radius: ${({ theme }: ContainerProps) => theme.sizes.xs};
  ${({ disabled, theme }: ContainerProps) => (disabled ? `color: ${theme.colors.error}` : "")}
`;
