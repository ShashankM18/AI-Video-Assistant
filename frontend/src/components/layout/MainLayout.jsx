import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        {children}

      </div>

    </div>
  );
}