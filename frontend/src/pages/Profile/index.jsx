import { Outlet } from "react-router-dom";
import styled from "styled-components";

import VisuallyHidden from "../../components/VisuallyHidden";
import Account from "../../components/Account";

const Main = styled.main`
  flex: 1;
  background-color: #12002b;
`;
const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

function User() {
  return (
    <Main>
      <Header>
        <Outlet />
      </Header>
      <VisuallyHidden>Accounts</VisuallyHidden>
      <Account />
    </Main>
  );
}

export default User;
