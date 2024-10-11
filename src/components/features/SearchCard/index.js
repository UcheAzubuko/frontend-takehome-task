import { formatDate } from "../../../utils/date";
import * as S from "./styles";

export const SearchCard = ({ searchData }) => {
  return (
    <S.SearchCard>
      <S.SearchCardHeader>{formatDate(searchData.date)}</S.SearchCardHeader>
      <S.SearchCardBody>
        <h3>{searchData.title}</h3>
        <p>{searchData.content}</p>
      </S.SearchCardBody>
      <S.SearchCardFooter>
        <ul>
          <li>Category</li>
          <li>{searchData.category}</li>
        </ul>
        <ul>
          <li>Decision</li>
          <li>{searchData.decision}</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>{searchData.company}</li>
        </ul>
      </S.SearchCardFooter>
    </S.SearchCard>
  );
};

export default SearchCard;
