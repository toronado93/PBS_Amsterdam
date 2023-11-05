import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      {/*Expremental */}
      <section className=" " style={{ minHeight: "80vh" }}>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Layout;
