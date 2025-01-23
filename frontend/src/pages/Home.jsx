import styled from "styled-components";

import Hero from "../components/Hero";
import Features from "../components/Features";
import homeBanner from "../assets/bank-tree.jpeg";

const Main = styled.main`
  flex: 1;
`;

function Home() {
  return (
    <Main>
      <Hero image={homeBanner} />
      <Features />
    </Main>
  );
}
export default Home;
