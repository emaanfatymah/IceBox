import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import ViewCategories from "../components/viewcategories";
import Category from "../components/category";
import Rings from "../components/rings";
import VisitIcebox from "../components/visit-icebox";
import Footer from "../components/footer";
import Customjewellery from "../components/customjewellery";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ViewCategories />
      <Customjewellery />
      <Category />
      <Rings />
      <VisitIcebox />
      <Footer />
    </>
  );
};

export default HomePage;