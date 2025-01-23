import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { AvatarIcon } from "@radix-ui/react-icons";

import { loginUser } from "../features/auth/authSlice";

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Main = styled.main`
  flex: 1;
  background-color: #12002b;
`;

const Content = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;
const Reset = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;
const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(loginUser({ email, password }));

    if (response.payload.token) {
      navigate("/profile");
    }
  };

  return (
    <>
      <Header />
      <Main>
        <Content>
          <AvatarIcon width={32} height={32} />
          <h1>Sign In</h1>
          {auth.status === "failed" && (
            <p style={{ color: "red" }}>{auth.error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <Wrapper>
              <Label htmlFor="email">Username</Label>
              <Input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Wrapper>
            <Reset>
              <Label htmlFor="remember">Remember me</Label>
              <Input type="checkbox" id="remember" />
            </Reset>
            <Button type="submit" disabled={auth.status === "loading"}>
              {auth.status === "loading" ? "Logging in..." : "Login"}
            </Button>
          </form>
          {auth.error && <p style={{ color: "red" }}>{auth.error}</p>}
        </Content>
      </Main>
      <Footer />
    </>
  );
}

export default Login;
