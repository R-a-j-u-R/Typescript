import React from "react";
type PersonLstprops = {
  names: {
    fname: string;
    lname: string;
  }[];
};
function PersonLst(prop: PersonLstprops) {
  return (
    <div>
      PersonLst
      <ul>
        {prop.names.map((d, i) => (
          <>
            <li key={i}>
              {d.fname} -{d.lname}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default PersonLst;
