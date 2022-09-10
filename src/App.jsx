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
    console.log(pathname);
    paths.forEach( path => {
      path !==
    } )
    window.scroll(0, 0);
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
