import Dropdown from "../../common/Dropdown";
import * as S from "./styles";

export const SearchResults = ({
  onSortChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalItems,
  currentPage,
  selectedSortType,
}) => {
  const sortOptions = [
    { label: "Date", value: "date" },
    { label: "Title", value: "title" },
    { label: "Company", value: "company" },
    { label: "Category", value: "category" },
    { label: "Decision", value: "decision" },
  ];

  const limitOptions = [
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "15", value: 15 },
    { label: "20", value: 20 },
    { label: "25", value: 25 },
  ];

  const startResult = (currentPage - 1) * rowsPerPage + 1;
  const endResult = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <S.SearchResults>
      <S.SearchResultsData>
        <h2>Results</h2>
        {totalItems ? (
          <p>
            Showing results {startResult}-{endResult} of {totalItems}.
          </p>
        ) : (
          ""
        )}
      </S.SearchResultsData>

      <S.SearchResultsFilter>
        <Dropdown
          options={limitOptions}
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
          placeholder={`${rowsPerPage}`}
        />
        <Dropdown
          options={sortOptions}
          value={selectedSortType ? sortOptions.find(opt => opt.value === selectedSortType) : null}
          onChange={onSortChange}
          placeholder="Sort by"
        />
      </S.SearchResultsFilter>
    </S.SearchResults>
  );
};

export default SearchResults;
