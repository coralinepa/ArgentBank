import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { updateUserAsync } from "../../features/user/userSlice";

import Button from "../../components/Button";
import Error from "../../components/Error";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const StyledButton = styled(Button)`
  width: 20%;
`;

function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user = {}, error, status } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());
    await dispatch(updateUserAsync(user));

    navigate("..");
  };

  const handleCancel = () => {
    navigate("..");
  };

  const { firstName = "", lastName = "" } = user;

  return (
    <>
      <h1>
        Welcome back <br />
      </h1>
      {status === "failed" && <Error>{error}</Error>}
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={firstName}
            required
          />

          <Input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={lastName}
            required
          />
        </Wrapper>
        <Wrapper>
          <StyledButton type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Saving..." : "Save"}
          </StyledButton>
          <StyledButton type="submit" onClick={handleCancel}>
            Cancel
          </StyledButton>
        </Wrapper>
      </Form>
    </>
  );
}

export default EditUser;
