import styled from "styled-components";
import PropTypes from "prop-types";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

function Navbar({ user }) {
  return (
    <Nav>
      <div>
        {user ? (
          <div>
            <span>Hello</span>
            <p>Sign Out</p>
          </div>
        ) : (
          <p>Sign In</p>
        )}
      </div>
    </Nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
export default Navbar;
