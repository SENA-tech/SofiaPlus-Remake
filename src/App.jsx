import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Components
import {
  About,
  Class,
  Error404,
  Footer,
  Home,
  Login,
  Navbar,
  RegisterForm,
  Suport,
  User,
  Logout,
  TeamInfo,
  Courses,
} from "./Router";

import { paths } from "./path";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    let windowed = () => window.scroll(0, 0)
    console.log(pathname);
    switch (pathname) {
      case paths[0]: windowed(); break;
      case paths[1]: windowed(); break;
      case paths[2]: windowed(); break;
      case paths[3]: windowed(); break;
      case paths[4]: windowed(); break;
      case paths[5]: windowed(); break;
      case paths[6]: windowed(); break;
      case paths[7]: windowed(); break;
      case paths[8]: windowed(); break;
      case paths[9]: windowed(); break;
      default: return; break;
    }
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Suport />} />
        <Route path="/search" element={<Class />} />
        <Route path="/search/about" element={<Courses />} />
        <Route path="/profile/:userId" element={<User />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/team" element={<TeamInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}
