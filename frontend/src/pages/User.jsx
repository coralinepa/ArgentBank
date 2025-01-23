import { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserAsync } from "../features/user/userSlice"; // Ajouter updateUserAsync

const Button = styled(NavLink)`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

function User() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>
        Welcome back <br />
        {user?.firstName} {user?.lastName}!
      </h1>
      <Button to="edit">Edit Name</Button>
    </>
  );
}

export default User;
