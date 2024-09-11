import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Pagination = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
}) => {
  return (
    <div className="wrapper-div-312987 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1444px] w-full box-border min-h-[160px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[64px] p-[48px_0px_48px__0px] bg-[#ffffffff]  ">
        {/* Right1 */}
        <section className=" w-[64px] min-h-[64px] opacity-[0.24] z-[0]  rotate-[0deg]   overflow-hidden  ">
          <div className=" w-[50.67px] min-h-[50.67px] top-[6.67px] left-[6.67px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
            <div className=" w-[45.33px] min-h-[45.33px] top-[5.33px] left-[5.33px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#000000ff] [box-shadow:inset_0_0_0_2px_#000000ff,inset_0_0_2px_0_#000000ff,inset_0_2px_0_0_#000000ff,inset_2px_0_0_0_#000000ff] border-l-[2px] border-l-[#000000ff] border-r-[2px] border-r-[#000000ff] border-t-[2px] border-t-[#000000ff] border-b-[2px] border-b-[#000000ff]   absolute "></div>
            <div className=" w-[45.33px] min-h-[45.33px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_2px_#000000ff,inset_0_0_2px_0_#000000ff,inset_0_2px_0_0_#000000ff,inset_2px_0_0_0_#000000ff] border-l-[2px] border-l-[#000000ff] border-r-[2px] border-r-[#000000ff] border-t-[2px] border-t-[#000000ff] border-b-[2px] border-b-[#000000ff]   absolute "></div>
            <div className=" w-[28px] min-h-[21.33px] top-[12px] left-[11.33px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
              <div className=" w-[28px] max-w-[100%] min-h-[5px] top-[8.17px] left-[0px] opacity-[1] z-[0]  rotate-[-180deg]  rotate-[-180deg]  origin-[50%_11.72%] overflow-hidden box-border   absolute ">
                <div className="nodeBg-312993 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
              <div className=" w-[15.97px] max-w-[100%] min-h-[24.87px] top-[-1.77px] left-[-3.54px] opacity-[1] z-[1]  rotate-[-180deg]  rotate-[-180deg]  origin-[62.63%_58.29%] overflow-hidden box-border   absolute ">
                <div className="nodeBg-312994 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 661 */}
        <section className=" max-w-[385px] w-full box-border min-h-[61.09px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[20px] p-[0px_0px_0px__0px]  ">
          <div className=" w-[61.09px] min-h-[61.09px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden  ">
            <div className=" w-[48.37px] min-h-[48.37px] top-[6.36px] left-[6.36px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" w-[43.28px] min-h-[43.28px] top-[5.09px] left-[5.09px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#000000ff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
              <div className=" w-[43.28px] min-h-[43.28px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
            </div>
            <div className=" max-w-[23px] w-full box-border min-h-[39px] top-[8.27px] left-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
              <span className="c-1-3121000-0 ">{text1}</span>
            </div>
          </div>
          <div className=" w-[61.09px] min-h-[61.09px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden  ">
            <div className=" w-[43.28px] min-h-[43.28px] top-[6.36px] left-[6.36px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" w-[43.28px] min-h-[43.28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
            </div>
            <div className=" max-w-[23px] w-full box-border min-h-[39px] top-[8.27px] left-[16.77px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
              <span className="c-2-3121004-0 ">{text2}</span>
            </div>
          </div>
          <div className=" w-[61.09px] min-h-[61.09px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden  ">
            <div className=" w-[43.28px] min-h-[43.28px] top-[6.36px] left-[6.36px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" w-[43.28px] min-h-[43.28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
            </div>
            <div className=" max-w-[23px] w-full box-border min-h-[39px] top-[8.27px] left-[17.55px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
              <span className="c-3-3121008-0 ">{text3}</span>
            </div>
          </div>
          <div className=" w-[61.09px] min-h-[61.09px] opacity-[1] z-[3]  rotate-[0deg]   overflow-hidden  ">
            <div className=" w-[43.28px] min-h-[43.28px] top-[6.36px] left-[6.36px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" w-[43.28px] min-h-[43.28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
            </div>
            <div className=" max-w-[23px] w-full box-border min-h-[39px] top-[8.27px] left-[17.32px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
              <span className="c-4-3121012-0 ">{text4}</span>
            </div>
          </div>
          <div className=" w-[61.09px] min-h-[61.09px] opacity-[1] z-[4]  rotate-[0deg]   overflow-hidden  ">
            <div className=" w-[43.28px] min-h-[43.28px] top-[6.36px] left-[6.36px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" w-[43.28px] min-h-[43.28px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_1.5px_#000000ff,inset_0_0_1.5px_0_#000000ff,inset_0_1.5px_0_0_#000000ff,inset_1.5px_0_0_0_#000000ff] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]   absolute "></div>
            </div>
            <div className=" max-w-[23px] w-full box-border min-h-[39px] top-[8.27px] left-[17.09px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
              <span className="c-5-3121016-0 ">{text5}</span>
            </div>
          </div>
        </section>
        {/* Right2 */}
        <section className=" w-[64px] min-h-[64px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden  ">
          <div className=" w-[50.67px] min-h-[50.67px] top-[6.67px] left-[6.67px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
            <div className=" w-[45.33px] min-h-[45.33px] top-[5.33px] left-[5.33px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#000000ff] [box-shadow:inset_0_0_0_2px_#000000ff,inset_0_0_2px_0_#000000ff,inset_0_2px_0_0_#000000ff,inset_2px_0_0_0_#000000ff] border-l-[2px] border-l-[#000000ff] border-r-[2px] border-r-[#000000ff] border-t-[2px] border-t-[#000000ff] border-b-[2px] border-b-[#000000ff]   absolute "></div>
            <div className=" w-[45.33px] min-h-[45.33px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#ffffffff] [box-shadow:inset_0_0_0_2px_#000000ff,inset_0_0_2px_0_#000000ff,inset_0_2px_0_0_#000000ff,inset_2px_0_0_0_#000000ff] border-l-[2px] border-l-[#000000ff] border-r-[2px] border-r-[#000000ff] border-t-[2px] border-t-[#000000ff] border-b-[2px] border-b-[#000000ff]   absolute "></div>
            <div className=" w-[28px] min-h-[21.33px] top-[12px] left-[6.67px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
              <div className=" w-[28px] max-w-[100%] min-h-[5px] top-[8.17px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border   absolute ">
                <div className="nodeBg-3121022 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
              <div className=" w-[15.97px] max-w-[100%] min-h-[24.87px] top-[-1.77px] left-[15.57px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border   absolute ">
                <div className="nodeBg-3121023 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Pagination;
