import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const Copyright = styled.p`
  margin: 0;
  padding: 0;
`;

function Footer() {
  return (
    <Container>
      <Copyright>Copyright 2020 Argent Bank</Copyright>
    </Container>
  );
}

export default Footer;
