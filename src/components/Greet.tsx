import React from "react";
type GreetProps = {
  id: number;
  name: string;
  message?: string;
  isLoggedin: boolean;
};
function Greet(prop: GreetProps) {
  const { message = 0 } = prop;
  return (
    <div>
      {prop.isLoggedin ? (
        <p>
          Greet======
          {prop.name}-{message}
        </p>
      ) : (
        "welcome"
      )}
    </div>
  );
}

export default Greet;
