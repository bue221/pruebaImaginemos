import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Time from "../../../../assets/svg/time";
import BackIcon from "../../../../assets/svg/back";
import { useStyles } from "./style";

export default function SelectButton() {
  const { btn } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        startIcon={<Time color="white" />}
        endIcon={<BackIcon color="white" />}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={btn}
      >
        <span>Delivery</span>
        <strong> : Now</strong>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
        <MenuItem onClick={handleClose}>Two hours</MenuItem>
        <MenuItem onClick={handleClose}>Next Week</MenuItem>
      </Menu>
    </div>
  );
}
