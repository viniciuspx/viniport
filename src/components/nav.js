import React, { useState } from "react";

import Sandwich from "./sandwich";
import useWindowDimensions from "../utils/resolution";
import SideDrawer from "./sideDrawer";
import NavLinks from "./navLinks";
import Backdrop from "./backdrop";

import "../assets/css/nav.css";
import "../assets/css/font.css";

function Nav() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleCloseSide = () => setShowSideDrawer(false);
  const handleOpenSide = () => setShowSideDrawer(true);
  const { width } = useWindowDimensions();

  const clickedLink = () => setShowSideDrawer(false);

  return (
    <React.Fragment>
      {showSideDrawer && <Backdrop onClick={handleCloseSide} />}
      <SideDrawer show={showSideDrawer} onClick={setShowSideDrawer}>
        <NavLinks onClick={clickedLink}/>
      </SideDrawer>
      {width > 900 ? <NavLinks /> : <Sandwich onClick={handleOpenSide} />}
    </React.Fragment>
  );
}

export default Nav;
