import styled from "styled-components";

import VisuallyHidden from "./VisuallyHidden";

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px;
  }
`;

const Card = styled.div`
  flex: 1;
  padding: 2.5rem;
  text-align: center;
`;

const Icon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const Title = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
`;

const FeatureDescription = styled.p`
  font-size: 15px;
  color: #555;
`;

function Features() {
  return (
    <FeaturesSection>
      <VisuallyHidden>Features</VisuallyHidden>
      <Card>
        <Icon
          src="./src/assets/img/icon-chat.png"
          title="You are our #1 priority"
        />
        <Title>You are our #1 priority</Title>
        <FeatureDescription>
          The more you save with us, the higher your interest rate will be!
        </FeatureDescription>
      </Card>
      <Card>
        <Icon
          src="./src/assets/img/icon-money.png"
          title="More savings means higher rates"
        />
        <Title>More savings means higher rates</Title>
        <FeatureDescription>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </FeatureDescription>
      </Card>
      <Card>
        <Icon
          src="./src/assets/img/icon-security.png"
          title="Security you can trust"
        />
        <Title>Security you can trust</Title>
        <FeatureDescription>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </FeatureDescription>
      </Card>
    </FeaturesSection>
  );
}

export default Features;
