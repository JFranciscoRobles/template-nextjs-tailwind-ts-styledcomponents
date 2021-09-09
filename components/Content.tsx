import React, { Fragment, ReactElement } from "react";
import tw from "tailwind-styled-components";

interface Props {
  text: string;
}

function Content({ text }: Props): ReactElement {
  return (
    <Fragment>
      <Title>Title</Title>
      <SubTitle $active $size="lg">
        {text}
      </SubTitle>
      <SubTitle $size={"sm"}>{text}</SubTitle>
    </Fragment>
  );
}

export default Content;

//Title TWCSS
const Title = tw.h1`
  text-red-500
  text-4xl
`;

//Sizes config
//SubTitle Config Props
type Size = "sm" | "normal" | "lg";
const sizes: Record<Size, any> = {
  sm: `text-sm`,
  normal: `text-base`,
  lg: `text-lg`,
};

type SubTitleProps = {
  $active?: boolean;
  $size?: Size;
};

//Styled Div with Config Props
const SubTitle = tw.div<SubTitleProps>`
${(p) => (p.$active ? "text-green-800" : "text-red-800")}
${({ $size }) => $size && `${sizes[$size]}`}
`;
