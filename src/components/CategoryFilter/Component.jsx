import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const CategoryFilter = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
}) => {
  return (
    <div className="wrapper-div-3121024 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1444px] w-full box-border min-h-[335px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-end gap-[375px] p-[84px_43px_48px__43px] bg-[#ffffffff]  ">
        {/* Frame 631 */}
        <section className=" max-w-[677px] w-full box-border min-h-[203px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[677px] w-full box-border min-h-[67px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[677px] w-full box-border min-h-[67px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="cosmic-collecti-3121027-0 ">{text1}</span>
            </div>
          </div>
          <div className=" max-w-[677px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="categories-3121028-0 ">{text2}</span>
          </div>
          <div className=" max-w-[677px] w-full box-border min-h-[66px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-wrap justify-start items-center gap-[12px] p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[125.8px] w-full box-border min-h-[66px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[20px_0px_20px__0px] box-border border-l-[3px] border-l-[#222222ff] border-r-[3px] border-r-[#222222ff] border-t-[3px] border-t-[#222222ff] border-b-[3px] border-b-[#222222ff]  ">
              <div className=" max-w-[34px] w-full box-border min-h-[26px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="all-3121031-0 ">{text3}</span>
              </div>
            </div>
            <div className=" max-w-[125.8px] w-full box-border min-h-[66px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[20px_0px_20px__0px] box-border border-l-[3px] border-l-[#222222ff] border-r-[3px] border-r-[#222222ff] border-t-[3px] border-t-[#222222ff] border-b-[3px] border-b-[#222222ff]  ">
              <div className=" max-w-[63px] w-full box-border min-h-[26px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="face-3121033-0 ">{text4}</span>
              </div>
            </div>
            <div className=" max-w-[125.8px] w-full box-border min-h-[66px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[20px_0px_20px__0px] box-border border-l-[3px] border-l-[#222222ff] border-r-[3px] border-r-[#222222ff] border-t-[3px] border-t-[#222222ff] border-b-[3px] border-b-[#222222ff]  ">
              <div className=" max-w-[40px] w-full box-border min-h-[26px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="lip-3121035-0 ">{text5}</span>
              </div>
            </div>
            <div className=" max-w-[125.8px] w-full box-border min-h-[66px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[20px_0px_20px__0px] box-border border-l-[3px] border-l-[#222222ff] border-r-[3px] border-r-[#222222ff] border-t-[3px] border-t-[#222222ff] border-b-[3px] border-b-[#222222ff]  ">
              <div className=" max-w-[48px] w-full box-border min-h-[26px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="eye-3121037-0 ">{text6}</span>
              </div>
            </div>
            <div className=" max-w-[125.8px] w-full box-border min-h-[66px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[20px_0px_20px__0px] box-border border-l-[3px] border-l-[#222222ff] border-r-[3px] border-r-[#222222ff] border-t-[3px] border-t-[#222222ff] border-b-[3px] border-b-[#222222ff]  ">
              <div className=" max-w-[70px] w-full box-border min-h-[26px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="tools-3121039-0 ">{text7}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Group 17701 */}
        <section className=" w-[306px] min-h-[37px] opacity-[1] z-[1]  rotate-[0deg]  ">
          <div className=" max-w-[84px] w-full box-border min-h-[26px] top-[0px] left-[7px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]   absolute ">
            <span className="filters-3121041-0 ">{text8}</span>
          </div>
          <div className=" w-[19px] min-h-[19px] top-[2px] left-[283px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
            <div className=" w-[4px] max-w-[100%] min-h-[19px] top-[0px] left-[7.5px] opacity-[1] z-[0]  rotate-[-90deg]  rotate-[-90deg]  origin-[-3492.11%_-444.74%] overflow-hidden box-border   absolute ">
              <div className="nodeBg-3121043 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
            <div className=" w-[19px] max-w-[100%] min-h-[4px] top-[7.5px] left-[0px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border   absolute ">
              <div className="nodeBg-3121044 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>
          <div className=" w-[306px] min-h-[0px] top-[37px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   [box-shadow:inset_0_0_0_1px_#000000ff,inset_0_0_1px_0_#000000ff,inset_0_1px_0_0_#000000ff,inset_1px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
        </section>
      </div>
    </div>
  );
};
export default CategoryFilter;
