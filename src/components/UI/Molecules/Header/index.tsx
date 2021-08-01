import React from "react";

import { Button } from "@material-ui/core";

import ArrowFoward from "../../../../assets/svg/arrowFoward";
import headerImage from "../../../../assets/images/headerimage.png";

import { useStyles } from "./style";

const Header = () => {
  const { root, container, btnDiv, titleDiv, h1, p, btn } = useStyles();
  return (
    <div className={root}>
      <div className={container}>
        <div>
          <img src={headerImage} width="50%" alt="header" />
        </div>
        <div className={titleDiv}>
          <h1 className={h1}>$0 delivery for 30 days! 🎉</h1>
          <p className={p}>$0 delivery free for orders over $10 for 30 days!</p>
        </div>
      </div>
      <div className={btnDiv}>
        <Button className={btn} endIcon={<ArrowFoward />}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Header;
