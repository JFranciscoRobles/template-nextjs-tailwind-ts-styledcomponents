import React, { Fragment, ReactElement } from "react";
import tw from "tailwind-styled-components";

interface Props {
  text: string;
}

function Content({ text }: Props): ReactElement {
  return (
    <Fragment>
      <Title>Title</Title>
      <SubTitle $active $size={"lg"}>
        {text}
      </SubTitle>
      <SubTitle $size="sm">{text}</SubTitle>
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
type SubTitleProps = {
  /**
   *"true | false".
   */
  $active?: boolean;
  /**
   *"sm | normal | lg".
   */
  $size?: Size;
};

const sizes: Record<Size, any> = {
  sm: `text-sm`,
  normal: `text-base`,
  lg: `text-lg`,
};

//Styled Div with Config Props
/**
 * @props active, size
 */
const SubTitle = tw.div<SubTitleProps>`
${(p) => (p.$active ? "text-green-800" : "text-red-800")}
${({ $size }) => $size && `${sizes[$size]}`}
`;
