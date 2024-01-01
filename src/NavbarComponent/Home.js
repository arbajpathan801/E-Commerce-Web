import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Circle from "../Components/Shapes/Circle";

import TourList from "../Components/HomeTourlist/Tourlist";

export default function Home() {
  return (
    <Fragment>
    <div className="bg-secondary pt-2 pb-5">
      <Button
        variant="outline-primary"
        className="fs-5 bg-secondary text-white p-2"
        style={{ position: "relative", top: "0px", left: "46%" }}
      >
        Get Our Latest Album
      </Button>
   <Circle></Circle>
    </div>
    <TourList/>
    </Fragment>
  );
}
