import styled from "styled-components";

import Navbar from "./NavBar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <img
          src="./src/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
          width="200px"
        />
      </div>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
