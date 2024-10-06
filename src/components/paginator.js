import ReactPaginate from "react-paginate";

const Paginator = ({ prev, next, totalPages, setPage }) => {
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const showNextButton = next ? true : false;
  const showPrevButton = prev ? true : false;
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton ? (
            <span className="flex items-center justify-center bg-gray-200 rounded-md px-3 py-1  text-black">
              &#10095;
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className="flex items-center justify-center bg-gray-200 rounded-md px-3 py-1 mr-1  text-black">
              &#10094;
            </span>
          ) : null
        }
        containerClassName="flex items-center justify-end my-2 text-white"
        pageClassName="block border-lightGray hover:bg-gray-200 px-3 py-1 flex items-center justify-center rounded-md mr-1 text-white"
        activeClassName="bg-[#004477] text-white"
      />
    </div>
  );
};

export default Paginator;
