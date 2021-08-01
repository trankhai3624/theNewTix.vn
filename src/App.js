import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { routeHome } from "./Route";
import HomeTemplate from "./Container/HomeTemplate";
import ScrollToTop from "./Components/ScrollToTop/index";

function App() {
  const showLayoutHome = (routeHome) => {
    if (routeHome && routeHome.length > 0) {
      return routeHome.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>{showLayoutHome(routeHome)}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
