import styled from 'styled-components';

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 16px;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #120083;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #FAAD6F;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px #AEE6E2, 0 -3px 4px #ffffff;
    color: #00BFFF;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 75px;
`;

export const SearchInput = styled.input`
  @media screen and (max-width: 767.99px) {
    width: 260px;
  }
  width: 400px;
  height: 26px;
  padding: 4px;
  text-align: center;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 6px 8px #FAAD6F, 0 -1px 1px #e4d5e3;
  color: #120083;
  &::placeholder {
    padding: 4px;
    font-size: 16px;
    color: #cccccc;
  }
  &:hover {
    background: linear-gradient(45deg, #6579BE, #7A8F8E);
    box-shadow: 0 3px 4px #AEE6E2, 0 -3px 4px #ffffff;
    color: white;
  }
`;
