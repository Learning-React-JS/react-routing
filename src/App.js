import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
