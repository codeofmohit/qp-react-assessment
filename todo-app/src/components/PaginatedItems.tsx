import { useEffect, useState } from "react";
// import { taskListType } from "../types";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { paginateTasks } from "../store/slices/paginationSlice";

export default function PaginatedItems({
  itemsPerPage,
}: {
  itemsPerPage: any;
}) {
  const items = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const [flag, setFlag] = useState<number>(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items && items.slice(itemOffset, endOffset);
  const pageCount = items && Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    dispatch(paginateTasks(currentItems));
  }, [flag]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = items && (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    dispatch(paginateTasks(currentItems));
    setFlag(flag + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
