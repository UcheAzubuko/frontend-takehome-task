import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/pages/Search.js";
import { GlobalStyle } from "./global.styles.js";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
