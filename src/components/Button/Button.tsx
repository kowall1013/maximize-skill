import styled from "styled-components";

import { FONT_WEIGHT, COLORS } from "constant";

type ButtonStyledProps = {
  bgcColor: string;
  bgcHoverColor: string;
};

const StyledButton = styled.button<ButtonStyledProps>`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 56px;
  color: ${COLORS.white};
  line-height: 100%;
  min-width: 10rem;
  font-size: 1.8rem;
  font-weight: ${FONT_WEIGHT.fw_700};
  background-color: ${({ bgcColor }) => bgcColor};
  border-radius: 28px;
  outline: none;
  border: 1px solid ${({ bgcColor }) => bgcColor};
  padding: 14px 32px;

  &:hover {
    background-color: ${({ bgcHoverColor }) => bgcHoverColor};
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  bgcColor?: string;
  bgcHoverColor?: string;
};

function Button({
  children,
  onClick,
  type = "button",
  bgcColor = COLORS.primary,
  bgcHoverColor = COLORS.violet,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      bgcColor={bgcColor}
      bgcHoverColor={bgcHoverColor}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
