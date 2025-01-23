import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { updateUserAsync } from "../features/user/userSlice";

import Button from "../components/Button";

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
  const { user = {} } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());
    navigate("..");

    dispatch(updateUserAsync(user));
  };

  const handleCancel = () => {
    navigate("/profile"); // Redirige vers la page d'accueil ou une autre URL
  };

  const { firstName = "", lastName = "" } = user;

  return (
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
        <StyledButton type="submit">Save</StyledButton>
        <StyledButton type="submit" onClick={handleCancel}>
          Cancel
        </StyledButton>
      </Wrapper>
    </Form>
  );
}

export default EditUser;
