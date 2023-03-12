import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const Features = () => {
  return (
    <div className="boxes-area relative pb-20 mt-[-130px] z-[1] font-poppins">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-6 lg:w-1/4 md:w-1/2 flex grow-0 basis-auto shrink-0 px-3">
            <div className="single-box border-dashed border border-[#cdf1d8] py-[30px] px-5 relative  rounded-[5px] shadow-md duration-[.5s] hover:border-transparent hover:-translate-y-2 before:hover:opacity-100 before:hover:visible ">
              <div className="icon bg-[#cdf1d8]  w-[55px] h-[55px] leading-[55px] rounded-full duration-[.5s] text-center items-center justify-center text-light-green-color inline-block hover:bg-white ">
                <Icon.Server className="inline" />
              </div>

              <h3 className=" text-black-color mt-[25px] mb-[15px] font-medium ">
                <Link href="/feature-details" className="text-lg hover:underline">Zero Configuration</Link>
              </h3>

              <p className="mb-0 text-paragraph-color leading-[1.8] text-sm">
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 lg:w-1/4 md:w-1/2 flex grow-0 basis-auto shrink-0 px-3">
            <div className="single-box border-dashed border border-[rgba(247,138,203,0.3)] py-[30px] px-5 relative  rounded-[5px] shadow-md duration-[.5s] hover:border-transparent hover:-translate-y-2 before:hover:opacity-100 before:hover:visible ">
              <div className="icon bg-[rgba(247,138,203,0.3)]  w-[55px] h-[55px] leading-[55px] rounded-full duration-[.5s] text-center items-center justify-center text-[#f78acb] inline-block hover:bg-white ">
                <Icon.Code className="inline"/>
              </div>

              <h3 className=" text-black-color mt-[25px] mb-[15px] font-medium  hover:underline">
                <Link href="/feature-details">Code Security</Link>
              </h3>

              <p className="mb-0 text-paragraph-color leading-[1.8] text-sm">
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 lg:w-1/4 md:w-1/2 flex grow-0 basis-auto shrink-0 px-3">
            <div className="single-box border-dashed border border-[#edc3fc] py-[30px] px-5 relative  rounded-[5px] shadow-md duration-[.5s] hover:border-transparent hover:-translate-y-2 before:hover:opacity-100 before:hover:visible ">
              <div className="icon bg-[#edc3fc]  w-[55px] h-[55px] leading-[55px] rounded-full duration-[.5s] text-center items-center justify-center text-[#c679e3] inline-block hover:bg-white ">
                <Icon.Users className="inline"/>
              </div>

              <h3 className=" text-black-color mt-[25px] mb-[15px] font-medium hover:underline">
                <Link href="/feature-details">Team Management</Link>
              </h3>

              <p className="mb-0 text-paragraph-color leading-[1.8] text-sm">
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 lg:w-1/4 md:w-1/2 flex grow-0 basis-auto shrink-0 px-3">
            <div className="single-box border-dashed border border-[rgba(235, 107, 61, 0.3)] py-[30px] px-5 relative  rounded-[5px] shadow-md duration-[.5s] hover:border-transparent hover:-translate-y-2 before:hover:opacity-100 before:hover:visible ">
              <div className="icon bg-[rgba(235,107,61,.3)]  w-[55px] h-[55px] leading-[55px] rounded-full duration-[.5s] text-center items-center justify-center text-[#eb6b3d] inline-block hover:bg-white ">
                <Icon.GitBranch className="inline"/>
              </div>

              <h3 className=" text-black-color mt-[25px] mb-[15px] font-medium hover:underline">
                <Link href="/feature-details">Access Controlled</Link>
              </h3>

              <p className="mb-0 text-paragraph-color leading-[1.8] text-sm">
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
