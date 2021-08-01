import React from "react";

import { Button, Grid, Hidden } from "@material-ui/core";

import ArrowFoward from "../../../../assets/svg/arrowFoward";
import headerImage from "../../../../assets/images/headerimage.png";

import { useStyles } from "./style";

const Header = () => {
  const { root, container, btnDiv, titleDiv, h1, p, btn } = useStyles();
  return (
    <div className={root}>
      <div className={container}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <div>
              <img src={headerImage} width="50%" alt="header" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={titleDiv}>
              <h1 className={h1}>$0 delivery for 30 days! 🎉</h1>
              <p className={p}>
                $0 delivery free for orders over $10 for 30 days!
              </p>
            </div>
          </Grid>
          <Hidden smUp>
            <Grid item xs={12}>
              <div className={btnDiv}>
                <Button className={btn} endIcon={<ArrowFoward />}>
                  Learn more
                </Button>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
      <Hidden smDown>
        <div className={btnDiv}>
          <Button className={btn} endIcon={<ArrowFoward />}>
            Learn more
          </Button>
        </div>
      </Hidden>
    </div>
  );
};

export default Header;
