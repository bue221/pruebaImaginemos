import React from "react";

import { MenuItem, Select } from "@material-ui/core";

import Hamburger from "../../../../assets/svg/hamburger";

const Categories = ({
  value,
  handleChange,
}: {
  value: any;
  handleChange: any;
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <h1 style={{ display: "flex", alignItems: "center" }}>
          Restaurants. <Hamburger />
        </h1>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* {data.map((i: any) => (
              <Paper
                style={{ borderRadius: "70px", padding: "1rem 0.75rem" }}
                key={i.id}
              >
                <img width="50px" src={i.icon} alt={i.name} />
                <p>{i.name}</p>
              </Paper>
            ))} */}
      </div>
    </>
  );
};

export default Categories;
