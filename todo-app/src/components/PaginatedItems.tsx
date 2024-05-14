import { useEffect, useState } from "react";
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
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items && items.slice(itemOffset, endOffset);
  const pageCount = items && Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    dispatch(paginateTasks(currentItems));
  }, [flag]);

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
