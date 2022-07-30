import Button from "components/Button";
import { COLORS, FONT_WEIGHT } from "constant";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: ${FONT_WEIGHT.fw_800};
  line-height: 50.4px;
  color: ${COLORS.primary};
  margin-bottom: 26px;
`;

const Description = styled.p``;

function SectionMinimizeBudget(): JSX.Element {
  return (
    <StyledSection>
      <Title>Maximize skill, minimize budget</Title>
      <Description />
    </StyledSection>
  );
}

export default SectionMinimizeBudget;
