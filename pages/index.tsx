import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <Container>
      <Title>Title</Title>
      <SubTitle $active>SubTitle</SubTitle>
      <SubTitle $active={false}>SubTitleTwo</SubTitle>
    </Container>
  );
}

type SubTitleProps = {
  $active: boolean;
};

const Container = tw.div`
  bg-gray-50
  flex
  min-h-screen
  items-center
  justify-center
  w-full
  flex-col
`;

const Title = tw.h1`
  text-red-500
  text-4xl
`;

const SubTitle = tw.div<SubTitleProps>`
${(p) => (p.$active ? "text-green-800" : "text-red-800")}
`;
