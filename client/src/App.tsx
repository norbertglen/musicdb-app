import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import customTheme from "./theme";
import RoutesConfig from "./routes";

export const App = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <RoutesConfig />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
);
