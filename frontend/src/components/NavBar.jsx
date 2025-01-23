import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AvatarIcon, ExitIcon } from "@radix-ui/react-icons";

import { logout } from "../features/auth/authSlice";

import Button from "./Button";

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  width: auto;
  border: none;
  background-color: white;
  color: black;
  gap: 10px;
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

function NavBar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {token ? (
        <UserMenu>
          <UserProfile>
            <StyledLink to="/profile">
              <AvatarIcon width={16} height={16} />
              <span>{user?.firstName}</span>
            </StyledLink>
          </UserProfile>

          <StyledButton onClick={handleLogout}>
            <ExitIcon width={14} height={16} /> Log Out
          </StyledButton>
        </UserMenu>
      ) : (
        <StyledLink to="/login">
          <AvatarIcon width={16} height={16} /> Sign In
        </StyledLink>
      )}
    </>
  );
}

export default NavBar;
