import Hero from "../components/Hero";
import Features from "../components/Features";
import homeBanner from "../assets/bank-tree.jpeg";

const featuresData = [
  {
    icon: "./src/assets/img/icon-chat.png",
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: "./src/assets/img/icon-money.png",
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: "./src/assets/img/icon-security.png",
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Home() {
  return (
    <>
      <Hero image={homeBanner} />
      <Features features={featuresData} />
    </>
  );
}
export default Home;
