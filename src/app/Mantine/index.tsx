import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const UIProvider = ({ children }: { children: ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default UIProvider;
