const Pagination = ({
  totalPages,
  postPerpage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPages / postPerpage); i++) {
    pages.push(i);
  }

  const prevBtn = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextBtn = () => {
    if (currentPage !== -1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <nav>
        <ul>
          <button id="btn" onClick={prevBtn}>
            Prev
          </button>

          {pages.map((page, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={page === currentPage ? "active" : ""}
                >
                  {page}
                </button>
              </li>
            );
          })}

          <button id="btn" onClick={nextBtn}>
            Next
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
