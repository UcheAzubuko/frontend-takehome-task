import * as S from "./styles";
import { ReactComponent as ChevronLeftIcon } from "../../../assets/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "../../../assets/chevron-right.svg";

const Paginator = ({ totalItems, rowsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  if (totalPages === 0) return null;

  let startPage = Math.max(1, currentPage - 1);
  let endPage = startPage + 2;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - 2);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <S.Paginator>
      <S.PaginatorContainer>
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev-button">
          <ChevronLeftIcon />
        </button>

        {visiblePages.map(page => (
          <button
            type="button"
            key={page}
            onClick={() => onPageChange(page)}
            className={`page-button ${currentPage === page ? "active" : ""}`}>
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={visiblePages.includes(totalPages) && currentPage === totalPages}
          className="next-button">
          <ChevronRightIcon />
        </button>
      </S.PaginatorContainer>
    </S.Paginator>
  );
};

export default Paginator;
