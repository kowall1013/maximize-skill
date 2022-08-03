import styled from "styled-components";

import Header from "components/Header";

import GlobalStyles from "globalStyles";
import { COLORS } from "constant";
import SectionMinimizeBudget from "components/SectionMinimizeBudget";
import Cards from "components/Cards";

const Wrapper = styled.div`
  max-width: 1110px;
  min-height: 100%;
  margin: 0 auto;
  padding: 16px 16px 80px 16px;
  background-image: ${COLORS.gradient_white_gray};
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <SectionMinimizeBudget />
      <Cards />
    </Wrapper>
  );
}

export default App;
