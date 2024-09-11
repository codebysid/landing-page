import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Footer = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
  text9 = texts.text9,
  text10 = texts.text10,
  text11 = texts.text11,
  text12 = texts.text12,
  text13 = texts.text13,
  text14 = texts.text14,
  text15 = texts.text15,
  text16 = texts.text16,
  text17 = texts.text17,
  text18 = texts.text18,
  text19 = texts.text19,
  text20 = texts.text20,
}) => {
  return (
    <div className="wrapper-div-312951 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1440px] w-full box-border min-h-[341px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-start items-end gap-[80px] p-[64px_96px_64px__96px] bg-[#000000ff]  ">
        {/* Frame 591 */}
        <section className=" max-w-[922px] w-full box-border min-h-[213px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-start items-start gap-[72px] p-[0px_0px_0px__0px]  ">
          <div className=" w-[139px] min-h-[213px] opacity-[1] z-[0]  rotate-[0deg]    ">
            <div className=" w-[139px] min-h-[213px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" max-w-[45px] w-full box-border min-h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="menu-312955-0 ">{text1}</span>
              </div>
              <div className=" max-w-[87px] w-full box-border min-h-[21px] top-[44px] left-[1px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="find-a-store-312956-0 ">{text2}</span>
              </div>
              <div className=" max-w-[126px] w-full box-border min-h-[21px] top-[81px] left-[1px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="become-a-member-312957-0 ">{text3}</span>
              </div>
              <div className=" max-w-[122px] w-full box-border min-h-[21px] top-[118px] left-[1px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="sign-up-for-ema-312958-0 ">{text4}</span>
              </div>
              <div className=" max-w-[138px] w-full box-border min-h-[21px] top-[155px] left-[1px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="student-discoun-312959-0 ">{text5}</span>
              </div>
              <div className=" max-w-[125px] w-full box-border min-h-[21px] top-[192px] left-[1px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="send-us-feedbac-312960-0 ">{text6}</span>
              </div>
            </div>
          </div>
          <div className=" w-[123px] min-h-[213px] opacity-[1] z-[1]  rotate-[0deg]    ">
            <div className=" w-[123px] min-h-[213px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" max-w-[76px] w-full box-border min-h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="helpdesk-312963-0 ">{text7}</span>
              </div>
              <div className=" max-w-[97px] w-full box-border min-h-[21px] top-[44px] left-[1px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="order-status-312964-0 ">{text8}</span>
              </div>
              <div className=" max-w-[58px] w-full box-border min-h-[21px] top-[81px] left-[1px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="delivery-312965-0 ">{text9}</span>
              </div>
              <div className=" max-w-[58px] w-full box-border min-h-[21px] top-[118px] left-[1px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="returns-312966-0 ">{text10}</span>
              </div>
              <div className=" max-w-[122px] w-full box-border min-h-[21px] top-[155px] left-[1px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="payment-options-312967-0 ">{text11}</span>
              </div>
              <div className=" max-w-[86px] w-full box-border min-h-[21px] top-[192px] left-[1px] opacity-[1] z-[5]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="contact-us-312968-0 ">{text12}</span>
              </div>
            </div>
          </div>
          <div className=" w-[102px] min-h-[176px] opacity-[1] z-[2]  rotate-[0deg]    ">
            <div className=" w-[102px] min-h-[176px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
              <div className=" max-w-[102px] w-full box-border min-h-[24px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="about-glam-312971-0 ">{text13}</span>
              </div>
              <div className=" max-w-[39px] w-full box-border min-h-[21px] top-[44px] left-[1px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="news-312972-0 ">{text14}</span>
              </div>
              <div className=" max-w-[59px] w-full box-border min-h-[21px] top-[81px] left-[1px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="careers-312973-0 ">{text15}</span>
              </div>
              <div className=" max-w-[72px] w-full box-border min-h-[21px] top-[118px] left-[1px] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="investors-312974-0 ">{text16}</span>
              </div>
              <div className=" max-w-[100px] w-full box-border min-h-[21px] top-[155px] left-[1px] opacity-[1] z-[4]  rotate-[0deg]   text-left leading-[0px]   absolute ">
                <span className="sustainability-312975-0 ">{text17}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 541 */}
        <section className=" max-w-[246px] w-full box-border min-h-[173px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-end items-end gap-[24px] p-[0px_0px_0px__0px]  ">
          <div className=" w-[181px] min-h-[128px] opacity-[1] z-[0]  rotate-[0deg]  ">
            <div className=" max-w-[181px] w-full box-border min-h-[84px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   text-right leading-[0px]   absolute ">
              <span className="primary-address-312978-0 ">{text18}</span>
              <span className="primary-address-312978-1 ">{text19}</span>
            </div>
            <div className=" w-[84px] min-h-[20px] top-[108px] left-[97px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
              <div className=" w-[20px] min-h-[20px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden   absolute ">
                <div className=" w-[15.01px] max-w-[100%] min-h-[13.34px] top-[3.34px] left-[2.5px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-312981 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" w-[20px] min-h-[20px] top-[0px] left-[32px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden   absolute ">
                <div className=" w-[9.17px] max-w-[100%] min-h-[15px] top-[2.5px] left-[5px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-312983 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
              <div className=" w-[20px] min-h-[20px] top-[0px] left-[64px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden   absolute ">
                <div className=" w-[16.67px] max-w-[100%] min-h-[13.33px] top-[3.33px] left-[1.67px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-312985 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-[246px] w-full box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-right leading-[0px]  ">
            <span className="c-2024-glam-inc-a-312986-0 ">{text20}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Footer;
