import Navbar from "./navbar";

const Layout = ({ children, categories }) => (
  <>
    <Navbar categories={categories} />
    {children}
  </>
);

export default Layout;