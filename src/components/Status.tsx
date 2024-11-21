import React from "react";
type statusProp = {
  status: "loading" | "success" | "error";
};
function Status(prop: statusProp) {
  let message;
  if (prop.status === "loading") {
    message = "loading";
  } else if (prop.status === "success") {
    message = "success";
  } else if (prop.status === "error") {
    message = "error";
  }
  return <div>Status={message}</div>;
}

export default Status;
