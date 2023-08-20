import styled from "styled-components";

export const Button = styled.button`
  border-color: rgba(203, 110, 41, 0.76);
  background-color: rgba(203, 110, 41, 0.66);
  color: whitesmoke;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 12px;
  font-style: italic;
  cursor: pointer;
  border-style: groove;;
`
export const SecondButton = styled.button`
  border-color: rgba(203, 110, 41, 0.76);
  background-color: whitesmoke;
  color: rgba(203, 110, 41, 0.68);
  border-radius: 5px;
  padding: 5px 30px;
  font-size: 12px;
  font-style: italic;
  cursor: pointer;
  border-style: groove;

`
export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0px;
    display: flex;

    li + li {
      margin-left: 10px;
    }
  }
`