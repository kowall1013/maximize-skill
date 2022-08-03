import Button from "components/Button";
import { COLORS, FONT_WEIGHT } from "constant";
import styled from "styled-components";

const StyledCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 38px;
`;

type CardProps = {
  title: string;
  icon: string;
  description: string;
};

function Card({ title, icon, description }: CardProps): JSX.Element {
  return (
    <StyledCard>
      <h1>Card</h1>
    </StyledCard>
  );
}

export default Card;
