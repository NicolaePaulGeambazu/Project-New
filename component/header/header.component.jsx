import React from "react";
import { Search } from "../search/search.component";
import { Cell, Header, Nav, Social } from "./header.styled";

export const Top = ({ siv, iv }) => {
  return (
    <Header>
      <Cell>
        <Nav>
          <Social href="https://central.gymshark.com">Blog</Social>
        </Nav>
        <Nav>
          <Social href="https://uk.gymshark.com">Shop</Social>
        </Nav>
        <Nav>female</Nav>
        <Nav>male</Nav>
        <Search siv={siv} iv={iv} />
      </Cell>
    </Header>
  );
};
