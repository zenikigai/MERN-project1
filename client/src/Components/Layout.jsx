import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="_footer">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
