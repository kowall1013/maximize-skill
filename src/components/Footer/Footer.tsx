import Button from "components/Button";
import { COLORS, FONT_WEIGHT } from "constant";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 0 16px;
  background-color: ${COLORS.primary};
`;

const StyledLogoTitle = styled.span`
  font-size: 2.8rem;
  color: ${COLORS.white};
  font-weight: ${FONT_WEIGHT.fw_800};
`;

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <StyledLogoTitle>skilled</StyledLogoTitle>
      <Button bgcColor={COLORS.gradient_secondary}>Get Started</Button>
    </StyledFooter>
  );
}

export default Footer;
