import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const AnnouncementBar = ({ text1 = texts.text1 }) => {
  return (
    <div className="wrapper-div-3121074 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1440px] w-full box-border min-h-[57px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[17px_0px_17px__0px] bg-[#000000ff]  ">
        <div className=" max-w-[198px] w-full box-border min-h-[13px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
          <span className="additional-15-o-3121075-0 ">{text1}</span>
        </div>
      </div>
    </div>
  );
};
export default AnnouncementBar;
