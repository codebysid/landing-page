import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  image1 = images.image1,
  image2 = images.image2,
  image3 = images.image3,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
}) => {
  return (
    <div className="wrapper-div-2021393 relative m-auto p-[0px] box-border">
      <div className="min-h-[65px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-between items-center content-space-between gap-y-[35px] p-[0px_0px_0px__0px] bg-[#ffffffff] box-border border-l-[1px] border-l-[#939393ff] border-r-[1px] border-r-[#939393ff] border-t-[1px] border-t-[#939393ff] border-b-[1px] border-b-[#939393ff]  ">
        {/* Frame 17861 */}
        <section className=" max-w-[110px] w-full box-border min-h-[29px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[75px] w-full box-border min-h-[29px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="glam-2021395-0 ">{text1}</span>
          </div>
        </section>
        {/* Frame 17781 */}
        <section className=" max-w-[500px] w-full box-border min-h-[65px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center p-[0px_0px_0px__0px] box-border border-l-[1px] border-l-[#000000ff] border-r-[0px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
          <div className=" max-w-[83px] w-full box-border min-h-[65px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[3px_0px_3px__0px] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className="flex items-center max-w-[85px] w-full box-border min-h-[59px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="new-arrivals-2021398-0 ">{text2}</span>
            </div>
          </div>
          <div className=" max-w-[83px] w-full box-border min-h-[65px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[3px_0px_3px__0px] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className="flex items-center max-w-[50px] w-full box-border min-h-[59px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="brands-2021400-0 ">{text3}</span>
            </div>
          </div>
          <div className=" max-w-[83px] w-full box-border min-h-[65px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[3px_0px_3px__0px] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className="flex items-center max-w-[57px] w-full box-border min-h-[59px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="makeup-2021402-0 ">{text4}</span>
            </div>
          </div>
          <div className=" max-w-[83px] w-full box-border min-h-[65px] opacity-[1] z-[3]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[3px_0px_3px__0px] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className="flex items-center max-w-[28px] w-full box-border min-h-[59px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="skin-2021404-0 ">{text5}</span>
            </div>
          </div>
          <div className=" max-w-[83px] w-full box-border min-h-[65px] opacity-[1] z-[4]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[3px_0px_3px__0px] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className="flex items-center max-w-[28px] w-full box-border min-h-[59px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="hair-2021406-0 ">{text6}</span>
            </div>
          </div>
          <div className=" max-w-[83px] w-full box-border min-h-[65px] opacity-[1] z-[5]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[3px_0px_3px__0px] border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className="flex items-center max-w-[58px] w-full box-border min-h-[59px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="combos-2021408-0 ">{text7}</span>
            </div>
          </div>
        </section>
        {/* Frame 17831 */}
        <section className=" max-w-[400px] w-full box-border min-h-[65px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-wrap justify-start items-center p-[0px_0px_0px__0px] box-border border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
          <div className=" max-w-[99px] w-full box-border min-h-[65px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center p-[10px_0px_10px__0px] box-border border-l-[0px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className=" w-[25px] max-w-[100%] min-h-[25px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden mix-blend-darken  ">
              <img
                src={`${image1}`}
                className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-2021411 "
                alt="image 61 Image"
              />{" "}
            </div>
          </div>
          <div className=" max-w-[99px] w-full box-border min-h-[65px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px] box-border border-l-[0px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className=" w-[25px] max-w-[100%] min-h-[25px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden  ">
              <img
                src={`${image2}`}
                className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-2021413 "
                alt="image 71 Image"
              />{" "}
            </div>
          </div>
          <div className=" max-w-[99px] w-full box-border min-h-[65px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px] box-border border-l-[0px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className=" w-[25px] max-w-[100%] min-h-[25px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden  ">
              <img
                src={`${image3}`}
                className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-2021415 "
                alt="image 51 Image"
              />{" "}
            </div>
          </div>
          <div className=" max-w-[99px] w-full box-border min-h-[65px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px] box-border border-l-[0px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff]  ">
            <div className=" w-[25px] min-h-[25px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] box-border border-l-[1.2000000476837158px] border-l-[#000000ff] border-r-[1.2000000476837158px] border-r-[#000000ff] border-t-[1.2000000476837158px] border-t-[#000000ff] border-b-[1.2000000476837158px] border-b-[#000000ff]  ">
              <div className=" w-[13px] min-h-[13px] top-[6px] left-[6px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                <div className=" w-[14.2px] max-w-[109.22%] min-h-[6.08px] top-[7.52px] left-[-0.6px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border   absolute ">
                  <div className="nodeBg-2021419 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[6.07px] max-w-[100%] min-h-[6.07px] top-[-0.6px] left-[3.46px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border   absolute ">
                  <div className="nodeBg-2021420 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
