import React from "react";
import { Navigate } from "react-router-dom";

export function Default() {
  return <Navigate to="/" replace={true} />;
}
