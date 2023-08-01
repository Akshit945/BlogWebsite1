import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
