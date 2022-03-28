import Navbar from "./Navbar.js";
const Layout = ({ children }) => {
  return (
    <>

      <Navbar />
      <main>{children}</main>{" "}
    </>
  );
};

export default Layout;
