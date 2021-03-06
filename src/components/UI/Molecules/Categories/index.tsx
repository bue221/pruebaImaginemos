import React, { useState } from "react";

import { useStyles } from "./style";

import { Grid, Paper } from "@material-ui/core";

import Hamburger from "../../../../assets/svg/hamburger";

import data from "../../../../commons/utils/categories.json";

import SelectButton from "../../Atoms/SelectButton";

const Categories = ({
  value,
  handleChange,
}: {
  value: any;
  handleChange: any;
}) => {
  const {
    root,
    title,
    divIcon,
    divCategory,
    containerCategory,
    paperIcon,
    gridSelectBtn,
  } = useStyles();
  const [category, setCategory] = useState(1);

  const handleChangeCategory = (id: number) => {
    setCategory(id);
  };

  return (
    <>
      <div className={root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item xs={12} md={6}>
            <h1 className={title}>
              Restaurants{" "}
              <div className={divIcon}>
                <Hamburger />
              </div>
            </h1>
          </Grid>
          <Grid item xs={12} md={6} className={gridSelectBtn}>
            <SelectButton />
          </Grid>
        </Grid>
      </div>
      <div className={divCategory}>
        <div className={containerCategory}>
          {data.map((i: any) => (
            <Paper
              elevation={2}
              style={{
                background: i.id === category ? "#ffd543" : "white",
                borderRadius: "70px",
                padding: "1rem 0.75rem",
              }}
              key={i.id}
              onClick={() => handleChangeCategory(i.id)}
            >
              <Paper className={paperIcon}>
                <img width="50px" src={i.icon} alt={i.name} />
              </Paper>
              <p>{i.name}</p>
            </Paper>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
