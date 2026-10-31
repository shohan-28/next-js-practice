import React from "react";
import Header from "./component/Header/page";
import Footer from "./component/Footer/page";
import Products from "./component/Products/page";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}
