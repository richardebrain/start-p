import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="main-banner relative h-[910px] z-1 bg-[url(/images/banner-bg1.jpg)]">
      <div className="d-table table w-full h-full">
        <div className="d-table-cell table-cell align-middle">
          <div className="container ">
            <div className="row h-full justify-center items-center flex  flex-wrap">
              <div className="col-lg-5 lg:flex lg:w-5/12 max-w-full px-10">
                <div className="hero-content block">
                  <h1 className="mb-5 text-[45px] font-medium text-black-color leading-[1.2]">
                    Secure IT Solutions for a more secure environment
                  </h1>
                  <p className="mb-[30px] text-paragraph-color leading-[1.8] text-sm mt-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida
                  </p>

                  <Link
                    href="/contact"
                    className="btn btn-primary bg-light-green-color"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1 lg:flex lg:w-6/12 lg:ml-[8.33333%] basis-auto grow-0">
                <div className="banner-image relative block w-full">
                  <Image
                    src="/images/banner-image/man.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.1s max-w-full absolute z-[3] -top-[130px] -left-[45px] w-auto h-auto"
                    alt="man"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/code.png"
                    className="animate__animated animate__fadeInUp animate__delay-0.1s absolute right-[145px]
                    top-[-287px] h-auto w-auto"
                    alt="code"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/carpet.png"
                    className="animate__animated animate__fadeInLeft animate__delay-0.1s absolute w-auto h-auto left-[25px] top-[-20px] "
                    alt="carpet"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/bin.png"
                    className="animate__animated animate__zoomIn animate__delay-0.1s absolute right-[12%] top-[118px] z-[1] w-auto h-auto"
                    alt="bin"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/book.png"
                    className="animate__animated animate__bounceIn animate__delay-0.1s absolute left-[28%] top-[-120px] z-[2] w-auto h-auto"
                    alt="book"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/dekstop.png"
                    className="animate__animated animate__fadeInDown animate__delay-0.1s absolute w-auto h-auto right-[35%] top-[-150px]"
                    alt="dekstop"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/dot.png"
                    className="animate__animated animate__zoomIn animate__delay-0.1s absolute w-auto h-auto right-5 top-[-110px]"
                    alt="dot"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/flower-top-big.png"
                    className="animate__animated animate__fadeInUp animate__delay-0.1s absolute w-auto h-auto right-[25px] top-[-140px]"
                    alt="flower-top-big"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/flower-top.png"
                    className="animate__animated animate__rotateIn animate__delay-0.1s absolute w-auto h-auto right-[30%] top-[-35px] z-[1]"
                    alt="flower-top"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/keyboard.png"
                    className="animate__animated animate__fadeInUp animate__delay-0.1s absolute h-auto w-auto left-[37%] top-[-28px] z-[1]"
                    alt="keyboard"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/pen.png"
                    className="animate__animated animate__zoomIn animate__delay-0.1s absolute w-auto h-auto top-[-160px] left-[37%]"
                    alt="pen"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/table.png"
                    className="animate__animated animate__zoomIn animate__delay-0.1s absolute left-[90px] w-auto h-auto top-[-110px]"
                    alt="table"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/tea-cup.png"
                    className="animate__animated animate__fadeInLeft animate__delay-0.1s absolute left-[56%] w-auto h-auto top-[-25px]"
                    alt="tea-cup"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/headphone.png"
                    className="animate__animated animate__rollIn animate__delay-0.1 absolute w-auto h-auto right-[105px] top-[-28px]"
                    alt="headphone"
                    width={500}
                    height={500}
                  />
                  <Image
                    src="/images/banner-image/main-pic.png"
                    className="animate__animated animate__fadeInUp animate__delay-0.1 absolute hidden"
                    alt="main-pic"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1 absolute top-[20%] z-[1] left-[30px] animate-rotate3d opacity-[.4]">
        <Image
          src="/images/shape1.png"
          alt="shape"
          className=" w-auto h-auto "
          width={400}
          height={400}
        />
      </div>
      <div className="shape2 animate-rotateme absolute top-[60%] left-[15%] ">
        <Image
          src="/images/shape2.svg"
          alt="shape"
          width={400}
          height={400}
          className="w-auto h-auto"
        />
      </div>
      <div className="shape3 animate-animationFramesOne left-[25%] bottom-[15%] absolute ">
        <Image
          src="/images/shape3.svg"
          alt="shape"
          className="h-auto w-auto"
          width={400}
          height={400}
        />
      </div>
      <div className="shape4 left-[25%] bottom-[15%] absolute animate-animationFramesOne">
        <Image
          width={400}
          height={400}
          className="w-auto h-auto"
          src="/images/shape4.svg"
          alt="shape"
        />
      </div>
      <div className="shape5 animate-movebounce right-[5%] top-[10%] opacity-20 absolute">
        <Image
          width={400}
          height={400}
          className="w-auto h-auto"
          src="/images/shape5.png"
          alt="shape"
        />
      </div>
      <div className="shape6 animate-rotateme absolute top-[40%] right-[10%]">
        <Image
          width={400}
          height={400}
          className="w-auto h-auto"
          src="/images/shape4.svg"
          alt="shape"
        />
      </div>
      <div className="shape7 absolute animate-animationFramesOne left-[25%] top-[15%]">
        <Image
          width={400}
          height={400}
          className="w-auto h-auto"
          src="/images/shape4.svg"
          alt="shape"
        />
      </div>
      <div className="shape8 animate-rotateme top-[15%] absolute right-[10%] ">
        <Image
          width={400}
          height={400}
          className="w-auto h-auto"
          src="/images/shape2.svg"
          alt="shape"
        />
      </div>
    </div>
  );
};

export default MainBanner;
