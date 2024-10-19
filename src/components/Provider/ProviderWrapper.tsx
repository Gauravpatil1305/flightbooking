"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import React, { ReactNode } from "react";

const ProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
