import React, { FC } from "react";
import * as S from "./styles";

type Props = {
  label: string;
  styles?: object;
  onClick?: Function;
  disabled?: boolean;
  stars?: number;
};

const Button: FC<Props> = ({ label, stars, ...restProps }) => {
  return (
    <S.Container {...restProps}>
      <button>{label}</button>
      {stars && Array(stars).fill("⭐")}
    </S.Container>
  );
};

export default Button;
