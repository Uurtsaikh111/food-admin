import Header from "./Header";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
