import { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserAsync } from "../../features/user/userSlice"; // Ajouter updateUserAsync

import Error from "../../components/Error";

const Button = styled(NavLink)`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
`;

function User() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <Error>{error}</Error>}

      <h1>
        Welcome back <br />
        {user?.firstName} {user?.lastName}!
      </h1>
      <Button to="edit">Edit Name</Button>
    </>
  );
}

export default User;
