import Content from "@components/Content";
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <Container>
      <Content text={"Custom Message"} />
    </Container>
  );
}

const Container = tw.div`
  bg-gray-50
  flex
  min-h-screen
  items-center
  justify-center
  w-full
  flex-col
`;
