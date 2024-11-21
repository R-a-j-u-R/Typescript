import React from "react";

type Personprops = {
  name: {
    fname: string;
    lname: string;
  };
};
function Person(prop: Personprops) {
  return (
    <div>
      Person
      {prop.name.fname}
      {prop.name.lname}
    </div>
  );
}

export default Person;
