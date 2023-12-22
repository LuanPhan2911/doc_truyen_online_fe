import { useSearchParams } from "react-router-dom";
import { usePagination, DOTS } from "../hooks/usePagination";
import _ from "lodash";

const PaginateLink = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}) => {
  let paginationRange = usePagination({
    totalCount,
    currentPage,
    pageSize,
    siblingCount,
  });
  const [, setQs] = useSearchParams();
  return (
    paginationRange?.length >= 2 && (
      <ul className="pagination justify-content-center mt-3">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => {
              setQs((prev) => {
                prev.set("page", currentPage - 1);
                return prev;
              });
            }}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
        </li>
        {paginationRange.map((item) => {
          return item === DOTS ? (
            <li className="page-item px-3">{DOTS}</li>
          ) : (
            <li className="page-item" key={item}>
              <button
                className={`page-link ${currentPage === item && "active"}`}
                onClick={() =>
                  setQs((prev) => {
                    prev.set("page", item);
                    return prev;
                  })
                }
              >
                {item}
              </button>
            </li>
          );
        })}

        <li
          className={`page-item ${
            currentPage === _.last(paginationRange) && "disabled"
          }`}
        >
          <button
            className="page-link"
            onClick={() => {
              setQs((prev) => {
                prev.set("page", currentPage + 1);
                return prev;
              });
            }}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </li>
      </ul>
    )
  );
};
export default PaginateLink;
