import React from "react";
import Founders from "./_components/Founders";
import EmployeeComp from "./_components/Employee";

export default function page() {
  return (
    <div className="main-container sm:mt-20 mb-16">
      <div className="my-12 flex flex-col items-center justify-center gap-5 lg:my-20">
        <h2 className="text-accent-hover uppercase">Meet Our Team</h2>
        <h1 className="font-bold">the Minds Behind Your Success</h1>
      </div>
      <Founders />
      <EmployeeComp />      
    </div>
  );
}
