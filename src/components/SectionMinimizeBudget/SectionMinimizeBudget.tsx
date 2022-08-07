import styled from "styled-components";

import Button from "components/Button";
import Image from "components/Image";

import { Description } from "components/styled";
import { COLORS, FONT_WEIGHT, QUERIES } from "constant";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: flex-start;

  @media ${QUERIES.tabletAndUp} {
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: ${FONT_WEIGHT.fw_800};
  line-height: 50.4px;
  color: ${COLORS.primary};
  margin-bottom: 26px;
`;

const ImageWrapper = styled.div`
  margin-top: 46px;
`;

const DetailsWrapper = styled.div``;

function SectionMinimizeBudget(): JSX.Element {
  return (
    <StyledSection>
      <DetailsWrapper>
        <Title>Maximize skill, minimize budget</Title>
        <Description>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </Description>
        <Button bgcColor={COLORS.gradient_primary}>Get Started</Button>
      </DetailsWrapper>
      <ImageWrapper>
        <Image
          src="image-hero-mobile.png"
          alt="women drinking cup of coffee"
          width="327"
          height="301"
        />
      </ImageWrapper>
    </StyledSection>
  );
}

export default SectionMinimizeBudget;
