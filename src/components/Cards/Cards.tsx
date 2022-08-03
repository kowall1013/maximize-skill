import styled from "styled-components";

import { cardsData } from "talons/Cards";

import { COLORS, FONT_WEIGHT } from "constant";
import Card from "components/Card/Card";

const Wrapper = styled.section`
  display: grid;
`;

const Title = styled.h2`
  background-image: ${COLORS.gradient_primary};
  padding: 24px 28px 32px 28px;
  font-size: 2.4rem;
  line-height: 32px;
  font-weight: ${FONT_WEIGHT.fw_800};
  border-radius: 10px;
  color: ${COLORS.white};
`;

function Cards(): JSX.Element {
  return (
    <Wrapper>
      <Title>Check out our most popular courses!</Title>
      <ul>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </ul>
    </Wrapper>
  );
}

export default Cards;
