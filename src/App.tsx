import GlobalStyle from "@styles/global";
import { HelmetProvider } from "react-helmet-async";
import Router from "./router";

function App() {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <Router />
      </HelmetProvider>
    </>
  );
}

export default App;
