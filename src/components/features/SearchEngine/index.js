import { useEffect, useState, useCallback, useMemo } from "react";
import { getSearchData } from "../../../services";
import * as S from "./styles";
import SearchCard from "../SearchCard";
import InputField from "../../common/InputFIeld";
import Button from "../../common/Button";
import Dropdown from "../../common/Dropdown";
import DateDropdown from "../../common/DateDropdown";
import SearchResults from "../SearchResults";
import Paginator from "../Paginator";

const SearchEngine = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentlyDisplayedData, setCurrentlyDisplayedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(null);
  const [decision, setDecision] = useState(null);
  const [company, setCompany] = useState(null);
  const [date, setDate] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const getPageData = () => {
    const searchData = getSearchData();
    setData(searchData);
    setFilteredData(searchData);
  };

  useEffect(() => {
    getPageData();
  }, []);

  const sortData = useCallback(
    dataToSort => {
      if (!sortType) return dataToSort;

      const sortedData = [...dataToSort].sort((a, b) => {
        if (sortType === "date") {
          return new Date(b.date) - new Date(a.date);
        } else {
          return a[sortType].localeCompare(b[sortType]);
        }
      });

      return sortedData;
    },
    [sortType]
  );

  const paginateData = useCallback(
    dataToPaginate => {
      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      return dataToPaginate.slice(startIndex, endIndex);
    },
    [currentPage, rowsPerPage]
  );

  const handleSearch = useCallback(() => {
    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        Object.values(item).some(val => String(val).toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (category) {
      filtered = filtered.filter(item => item.category === category.value);
    }

    if (decision) {
      filtered = filtered.filter(item => item.decision === decision.value);
    }

    if (company) {
      filtered = filtered.filter(item => item.company === company.value);
    }

    if (date) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return (
          itemDate.getFullYear() === date.getFullYear() &&
          itemDate.getMonth() === date.getMonth() &&
          itemDate.getDate() === date.getDate()
        );
      });
    }

    const sorted = sortData(filtered);
    setFilteredData(sorted);
    setCurrentPage(1);
  }, [data, searchTerm, category, decision, company, date, sortData]);

  useEffect(() => {
    let filtered = data;

    if (category) {
      filtered = filtered.filter(item => item.category === category.value);
    }

    if (decision) {
      filtered = filtered.filter(item => item.decision === decision.value);
    }

    if (company) {
      filtered = filtered.filter(item => item.company === company.value);
    }

    if (date) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        return (
          itemDate.getFullYear() === date.getFullYear() &&
          itemDate.getMonth() === date.getMonth() &&
          itemDate.getDate() === date.getDate()
        );
      });
    }

    const sorted = sortData(filtered);
    setFilteredData(sorted);
    setCurrentPage(1);
  }, [category, decision, company, date, data, sortData]);

  useEffect(() => {
    const paginated = paginateData(filteredData);
    setCurrentlyDisplayedData(paginated);
  }, [filteredData, paginateData]);

  const handleSortChange = selectedSort => {
    setSortType(selectedSort ? selectedSort.value : null);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = selectedRowsPerPage => {
    setRowsPerPage(selectedRowsPerPage ? selectedRowsPerPage.value : 5);
    setCurrentPage(1);
  };

  const categories = useMemo(
    () =>
      [...new Set(data.map(item => item.category))].map(category => ({
        value: category,
        label: category,
      })),
    [data]
  );

  const decisions = useMemo(
    () =>
      [...new Set(data.map(item => item.decision))].map(decision => ({
        value: decision,
        label: decision,
      })),
    [data]
  );

  const companies = useMemo(
    () =>
      [...new Set(data.map(item => item.company))].map(company => ({
        value: company,
        label: company,
      })),
    [data]
  );

  const clearFilters = () => {
    setSearchTerm("");
    setCategory(null);
    setDecision(null);
    setCompany(null);
    setDate(null);
    setFilteredData(data);
    setSortType(null);
    setRowsPerPage(5);
    setCurrentPage(1);
  };

  return (
    <S.SearchEngine>
      <S.SearchEngineTitle>AI-Powered Regulatory Search</S.SearchEngineTitle>
      <S.SearchEngineDescription>
        Use the search engine to search for publications from courts and regulators.
      </S.SearchEngineDescription>

      <S.SearchControlsContainer>
        <S.SearchControlsTop>
          <InputField value={searchTerm} onChange={setSearchTerm} onEnterPress={handleSearch} />
          <Button onClick={handleSearch} label="Search" />
        </S.SearchControlsTop>

        <S.SearchControlsBottom>
          <Dropdown options={categories} value={category} onChange={setCategory} placeholder="Category" />
          <Dropdown options={decisions} value={decision} onChange={setDecision} placeholder="Decision" />
          <Dropdown options={companies} value={company} onChange={setCompany} placeholder="Company" />
          <DateDropdown selectedDate={date} onChange={setDate} />
        </S.SearchControlsBottom>

        <Button onClick={clearFilters} label="Clear Filters" type="plain" />
      </S.SearchControlsContainer>

      <SearchResults
        onSortChange={handleSortChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        totalItems={filteredData.length}
        selectedSortType={sortType}
        currentPage={currentPage}
        rowsDisplayed={currentlyDisplayedData.length}
      />

      {currentlyDisplayedData.length > 0 ? (
        currentlyDisplayedData.map(searchItem => <SearchCard key={searchItem.id} searchData={searchItem} />)
      ) : (
        <S.SearchEmptyContainer>
          <p>No results found</p>
        </S.SearchEmptyContainer>
      )}

      <Paginator
        totalItems={filteredData.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </S.SearchEngine>
  );
};

export default SearchEngine;
