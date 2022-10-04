import { Navbar } from "./Navbar";
import { Home } from "./Home";

import { Routes, Route } from "react-router-dom";
import { Create } from "./Create";
import { BlogDetails } from "./BlogDetails";
const App = () => {
  return (
    <div className="App">
      <Navbar />
         <Routes>
          <Route path="/" element={<div className="content">
        <Home></Home>
      </div>}></Route>

      <Route path="/create" element={<Create/>}></Route>
      <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
      <Route path="*" element={<div>404 page not found</div>}></Route>



         </Routes>
      
    </div>
  );
};

export { App };
