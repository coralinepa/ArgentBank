import styled from "styled-components";

import VisuallyHidden from "./VisuallyHidden";

import homeBanner from "../assets/bank-tree.jpeg";

const Container = styled.div`
  background-image: url(${homeBanner});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const Content = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
    background-color: #fff;
    text-align: left;
    padding: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

function Hero() {
  return (
    <>
      <Container>
        <Content>
          <VisuallyHidden>Promoted Content</VisuallyHidden>
          <Subtitle>No fees.</Subtitle>
          <Subtitle>No minimum deposit.</Subtitle>
          <Subtitle>High interest rates.</Subtitle>
          <Description>
            Open a savings account with Argent Bank today!
          </Description>
        </Content>
      </Container>
    </>
  );
}

export default Hero;
