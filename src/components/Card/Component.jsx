import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Card = ({
  image1 = images.image1,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
}) => {
  return (
    <div className="wrapper-div-2021462 relative m-auto p-[0px] box-border">
      <div className=" w-[299px] min-h-[524px] opacity-[1] z-[1]  rotate-[0deg]    ">
        {/* Card1 */}
        <section className=" max-w-[299px] w-full box-border min-h-[524px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[10px] p-[0px_0px_0px__0px] bg-[#ffffffff] border-l-[4px] border-l-[#000000ff] border-r-[4px] border-r-[#000000ff] border-t-[4px] border-t-[#000000ff] border-b-[4px] border-b-[#000000ff]   absolute ">
          <div className=" max-w-[299px] w-full box-border min-h-[307.5px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center p-[0px_0px_0px__0px] bg-[#ffffffff]  ">
            <div className=" w-[299px] max-w-[100%] min-h-[307.5px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden  ">
              <img
                src={`${image1}`}
                className="absolute  bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-I2021445_2006159 "
                alt="image1 Image"
              />{" "}
            </div>
          </div>
          <div className=" max-w-[299px] w-full box-border min-h-[206.5px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-center gap-[10px] p-[10px_0px_10px__0px] bg-[#ffffffff]  ">
            <div className=" max-w-[279px] w-full box-border min-h-[128px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[62px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[279px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[6px] p-[0px_0px_0px__0px]  ">
                <div className=" max-w-[279px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="matte-powder-bl-I2021445_2006160-0 ">
                    {text1}
                  </span>
                </div>
                <div className=" max-w-[96px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[4px] p-[0px_0px_0px__0px]  ">
                  <div className=" w-[15.22px] max-w-[100%] min-h-[14.47px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                    <div className="nodeBg-I2021445_2006177 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[15.22px] max-w-[100%] min-h-[14.47px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden  ">
                    <div className="nodeBg-I2021445_2006178 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[15.22px] max-w-[100%] min-h-[14.47px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden  ">
                    <div className="nodeBg-I2021445_2006179 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[15.22px] max-w-[100%] min-h-[14.47px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden  ">
                    <div className="nodeBg-I2021445_2006180 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[15.22px] max-w-[100%] min-h-[14.47px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden box-border  ">
                    <div className="nodeBg-I2021445_2006181 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
              <div className=" max-w-[279px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[0px_0px_0px__0px]  ">
                <div className="box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="c-1499-I2021445_2006167-0 ">{"₹"}</span>
                </div>
                <div className=" max-w-[279px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="c-1499-I2021445_2006167-0 ">{text2}</span>
                </div>
              </div>
            </div>
            <div className=" max-w-[279px] w-full box-border min-h-[48.5px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[20px_0px_20px__0px] box-border border-l-[3px] border-l-[#222222ff] border-r-[3px] border-r-[#222222ff] border-t-[3px] border-t-[#222222ff] border-b-[3px] border-b-[#222222ff]  ">
              <div className=" max-w-[109px] w-full box-border min-h-[17px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="add-to-bag-I2021445_2006164-0 ">{text3}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Card;
