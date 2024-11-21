import React from "react";
type oscarProps = {
  children: React.ReactNode;
};
function Oscar(prop: oscarProps) {
  return <div>{prop.children}</div>;
}

export default Oscar;
