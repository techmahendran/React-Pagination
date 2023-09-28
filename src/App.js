import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPages] = useState(10);

  useEffect(() => {
    // get fetchData
    let fetchData = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();

        setPosts(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    // call fetchData
    fetchData();
  }, []);

  // Get current Posts
  const lastIndexPage = currentPage * postPerPages;
  const firstIndexPage = lastIndexPage - postPerPages;
  const currentPages = posts.slice(firstIndexPage, lastIndexPage);

  const pagenite = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1 className="title_name">My Pagination</h1>

      <Posts posts={currentPages} />

      <Pagination
        totalPages={posts.length}
        postPerpage={postPerPages}
        setCurrentPage={pagenite}
        currentPage={currentPage}
        firstIndexPage={firstIndexPage}
        lastIndexPage={lastIndexPage}
      />
    </div>
  );
}

export default App;
