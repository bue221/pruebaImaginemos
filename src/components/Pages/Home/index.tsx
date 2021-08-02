import React from "react";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../features/user/userSlice";

import PersistentDrawerRight from "../../UI/Organisms/Drawer";

const Home = () => {
  const userState = useAppSelector(selectUser);

  if (userState.user === null) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <PersistentDrawerRight />
      </div>
    );
  }
};

export default Home;
