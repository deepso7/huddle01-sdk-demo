import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="max-w-2xl flex flex-col mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
