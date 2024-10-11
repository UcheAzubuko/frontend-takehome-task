import styled from "styled-components";
import theme from "../../../theme";

export const DateDropdown = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    font-family: "Inter", sans-serif;
    border: 1px solid ${theme.border.colors.subdued};
    border-radius: 8px;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 1rem 1.714rem 1rem 2.857rem;
    font-size: ${theme.fontSizes.base};
    font-weight: 300;
    border: 1px solid ${theme.border.colors.subdued};
    border-radius: ${theme.border.radius.base};
    outline: none;
    color: ${theme.textColors.default};

    &:focus {
      border-color: ${theme.colors.primary};
    }

    &:hover {
      border-color: ${theme.colors.primary};
    }

    &::-webkit-input-placeholder {
      font-size: ${theme.fontSizes.base};
      color: ${theme.textColors.subdued};
      font-weight: 400;
    }

    &:-moz-placeholder {
      /* Firefox 18- */
      font-size: ${theme.fontSizes.base};
      color: ${theme.textColors.subdued};
      font-weight: 400;
    }

    &::-moz-placeholder {
      /* Firefox 19+ */
      font-size: ${theme.fontSizes.base};
      color: ${theme.textColors.subdued};
      font-weight: 400;
    }

    &:-ms-input-placeholder {
      font-size: ${theme.fontSizes.base};
      color: ${theme.textColors.subdued};
      font-weight: 400;
    }
  }

  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: 0.286rem;
    box-sizing: content-box;
    top: 0.825rem;
    left: 1.143rem;
  }

  .react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0 0.429rem 0 0;
    position: absolute;
    top: 0;
    right: 1.143rem;
    height: 100%;
    display: table-cell;
    vertical-align: middle;

    &::after {
      cursor: pointer;
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      padding: 2px;
      font-size: ${theme.fontSizes.caption};
      line-height: 1;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      content: "×";
    }
  }

  .react-datepicker__header {
    background-color: ${theme.colors.primary};
    border-bottom: none;
    color: white;
  }

  .react-datepicker__day--selected {
    background-color: ${theme.colors.primary};
    color: white;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${theme.colors.primary};
  }

  .react-datepicker__current-month {
    color: ${theme.textColors.default};
  }

  .react-datepicker__day {
    &:hover {
      background-color: #eee;
    }
  }

  .react-datepicker__navigation {
    top: 0.714rem;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${theme.border.colors.subdued};
  }
`;
