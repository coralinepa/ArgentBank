import styled from "styled-components";

import Hero from "../components/Hero";
import Features from "../components/Features";

const Main = styled.main`
  flex: 1;
`;

function Home() {
  return (
    <Main>
      <Hero />
      <Features />
    </Main>
  );
}
export default Home;
