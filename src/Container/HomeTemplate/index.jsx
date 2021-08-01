import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const LayoutHome = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
function HomeTemplate({ exact, path, component }) {
  return (
    <>
      <LayoutHome>
        <Route exact={exact} path={path} component={component} />
      </LayoutHome>
    </>
  );
}

export default HomeTemplate;
