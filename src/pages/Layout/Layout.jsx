import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import { NavbarProvider } from "../../context/ContextNavbar.jsx";

function Layout() {
  return (
    <NavbarProvider>
      <Header></Header>
      {/*Expremental */}
      <section /* style={{ minHeight: "80vh" }} */>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </NavbarProvider>
  );
}

export default Layout;
