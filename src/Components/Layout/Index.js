import React from "react";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Menu from "../menu/Menu";
import Review from "../Pages/Review";
import Expert from "../Expert/Expert";
import Footer from "../Footer/Footer";

function Index({ handelClick }) {
  return (
    <>
      <Main />
      <About />
      <Menu handelClick={handelClick} />
      <Review />
      <Expert />
      <Footer />
    </>
  );
}

export default Index;
