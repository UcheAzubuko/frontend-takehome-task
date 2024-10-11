import styled from "styled-components";
import theme from "../../../theme";

export const Dropdown = styled.div`
  width: 100%;

  .custom-select__control {
    background-color: ${theme.colors.white};
    border-color: ${theme.border.colors.subdued};
    padding: 1rem 1.143rem;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    width: 100%;
    text-align: left;
    box-shadow: unset;

    &:hover {
      border-color: ${theme.colors.primary};
    }
  }

  .custom-select__placeholder {
    color: ${theme.textColors.subdued};
  }

  .custom-select__value-container {
    padding: 0;

    .custom-select__placeholder {
      font-size: ${theme.fontSizes.base};
      color: ${theme.textColors.subdued};
      font-weight: 400;
    }

    .custom-select__input-container {
      margin: 0;
      padding: 0;
      outline: none;

      .custom-select__input {
        color: ${theme.textColors.default};
        font-weight: 400;
      }
    }
  }

  .custom-select__menu {
    border-radius: 8px;
    overflow: hidden;
    font-family: "Inter", sans-serif;
    text-align: left;
    color: ${theme.textColors.default};
  }

  .custom-select__option--is-selected {
    background-color: ${theme.colors.primary};
    color: white;
  }

  .custom-select__option--is-focused {
    background-color: #e6f9f1;
    color: ${theme.colors.primary};
    cursor: pointer;
  }

  .custom-select__indicator-separator {
    display: none;
  }

  .custom-select__indicators {
    flex: none;
  }

  .custom-select__indicator.custom-select__dropdown-indicator,
  .custom-select__indicator.custom-select__clear-indicator {
    padding: 0;

    svg {
      height: 1rem;
      color: ${theme.textColors.subdued};
    }
  }
`;
