import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //data filling pending

  async function fetchBlogPosts(page = 1) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;
    //eg. https://codehelp-apis.vercel.app/api/get-blogs?page=4
    console.log("Printing the final URL");
    console.log(url);

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  // data send
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //step2(most of time this synatax will be same)
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
