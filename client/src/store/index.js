import React from "react";
import { LogInfo } from "./logInfo";

const providers = [<LogInfo.Provider />];

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, { children }),
    initial
  );

export { Store, LogInfo };
