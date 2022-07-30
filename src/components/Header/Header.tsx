import Button from "components/Button";
import { COLORS, FONT_WEIGHT } from "constant";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 38px;
`;

const StyledLogoTitle = styled.span`
  font-size: 2.8rem;
  color: ${COLORS.primary};
  font-weight: ${FONT_WEIGHT.fw_800};
`;

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <StyledLogoTitle>skilled</StyledLogoTitle>
      <Button>Get Started</Button>
    </StyledHeader>
  );
}

export default Header;
