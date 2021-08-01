import React from "react";

import IconButton from "@material-ui/core/IconButton";

import SearchButton from "../../Atoms/SearchButton";

import { useStyles } from "./style";
import MenuHamburger from "../../Atoms/MenuHamburger";

const Navbar = ({ onClick }: { onClick: any }) => {
  const { root, title } = useStyles();
  return (
    <div className={root}>
      <div className={title}>
        <IconButton onClick={onClick}>
          <MenuHamburger />
        </IconButton>
        <h1>Chuckwudi</h1>
      </div>
      <SearchButton />
    </div>
  );
};

export default Navbar;
