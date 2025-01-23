import styled from "styled-components";

import Button from "./Button";

const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const Description = styled.p`
  margin: 0;
`;

const Unit = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  flex: 1;
  @media (min-width: 720px) {
    flex: 0;
  }
`;

const accounts = [
  {
    id: 1,
    name: "checking (x8349)",
    balance: 2082.79,
    type: "available",
  },
  {
    id: 2,
    name: "savings (x6712)",
    balance: 10928.42,
    type: "available",
  },
  {
    id: 3,
    name: "credit card (x8349)",
    balance: 184.3,
    type: "current",
  },
];

function Account() {
  return (
    <>
      {accounts.map((account) => (
        <Article key={account.id}>
          <Wrapper>
            <Title>Argent bank {account.name}</Title>
            <Unit>${account.balance.toLocaleString("en")}</Unit>
            <Description>{account.type} Balance</Description>
          </Wrapper>
          <ButtonWrapper>
            <Button>View transactions</Button>
          </ButtonWrapper>
        </Article>
      ))}
    </>
  );
}

export default Account;
