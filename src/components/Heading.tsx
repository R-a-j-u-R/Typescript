import React from "react";
type headingPros = {
  children: string;
};
function Heading(prop: headingPros) {
  return <div>{prop.children}</div>;
}

export default Heading;
