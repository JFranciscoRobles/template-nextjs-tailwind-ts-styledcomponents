import React, { Fragment, ReactElement } from "react";
import tw from "tailwind-styled-components";
interface Props {
  text: string;
}

function Content({ text }: Props): ReactElement {
  return (
    <Fragment>
      <Title>Title</Title>
      <SubTitle $active>{text}</SubTitle>
      <SubTitle $active={false}>{text}</SubTitle>
    </Fragment>
  );
}

export default Content;

type SubTitleProps = {
  $active: boolean;
};

const Title = tw.h1`
  text-red-500
  text-4xl
`;

const SubTitle = tw.div<SubTitleProps>`
${(p) => (p.$active ? "text-green-800" : "text-red-800")}
`;
