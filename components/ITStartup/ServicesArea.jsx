import Image from "next/image";
import React from "react";
import * as Icon from "react-feather";

const ServicesArea = () => {
  return (
    <>
      <div className="services-area py-20 bg-[#f7fafd] overflow-hidden">
        <div className="container">
          <div className="row justify-center items-center flex">
            <div className="col-lg-6  md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
              <div className="section-title  text-left  mb-5">
                <h2 className="mb-0 capitalize text-3xl font-semibold text-black-color">
                  Cloud Hosting Services
                </h2>
                <div className="bar  "></div>
                <p className="text-paragraph-color text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6  md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Database /> Cloud databases
                  </div>
                </div>
                <div className="col-lg-6 col-md-6  md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Globe /> Website hosting
                  </div>
                </div>

                <div className="col-lg-6 col-md-6  md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.File /> File storage
                  </div>
                </div>

                <div className=" md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.TrendingUp /> Forex trading
                  </div>
                </div>

                <div className=" md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Folder /> File backups
                  </div>
                </div>

                <div className=" md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Monitor /> Remote desktop
                  </div>
                </div>

                <div className=" md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Mail /> Email servers
                  </div>
                </div>

                <div className="col-lg-6 col-md-6  md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box hover:text-white">
                    <Icon.Cloud /> Hybrid cloud
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:w-1/2 relative">
              <Image
                src="/images/services-right-image/book-self.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s absolute w-auto h-auto animate-fa left-[22%] top-[-85px]
                z-index- [1]"
                alt="book-self"
                width={400}
                height={400}
              />

              <Image
                src="/images/services-right-image/box.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s absolute left-0 right-0 w-auto h-auto mx-auto text-center top-[-52px]"
                data-wow-delay="0.6s"
                alt="box"
                width={400}
                height={400}
              />

              <Image
                src="/images/services-right-image/chair.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s w-auto h-auto left-[44%] top-[-33px] absolute "
                alt="chair"
                width={400}
                height={400}
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/cloud.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s w-auto h-auto right-[38%]  top-[-220px] absolute "
                alt="cloud"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/cup.png"
                className="animate__animated animate__bounceIn animate__delay-0.2s w-auto h-auto absolute right-[24%] top-[8px]"
                alt="cup"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/flower-top.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s w-auto h-auto absolute left-[29%] top-0 z-[1]"
                alt="flower"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/head-phone.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s w-auto h-auto absolute right-[44%] top-[-78px] z-[1]"
                alt="head-phone"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/monitor.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s w-auto h-auto absolute right-[30%] top-[-134px] z-[1]"
                alt="monitor"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/mug.png"
                className="animate__animated animate__rotateIn animate__delay-0.2s w-auto h-auto absolute right-[31%] top-[-21px]"
                alt="mug"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/table.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s w-auto h-auto absolute right-[24%] top-[-80px]"
                alt="table"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/tissue.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s w-auto h-auto absolute left-[27%] top-[-60px] z-[2]"
                alt="tissue"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/water-bottle.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s w-auto h-auto absolute right-[28%] top-[-54px] z-[1]"
                alt="water-bottle"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/wifi.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s w-auto h-auto absolute left-[31%] top-[-105px] z-[1]"
                data-wow-delay="0.6s"
                alt="wifi"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/cercle-shape.png"
                className="bg-image animate-rotateme w-auto h-auto absolute top-[-262px]  left-0 right-0 text-center mx-auto"
                alt="shape"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-right-image/service-right-main-pic.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s w-auto h-auto absolute hidden"
                alt="main-pic"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-area py-20 overflow-hidden">
        <div className="container">
          <div className="row h-full justify-center items-center">
            <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:w-1/2 relative">
              <Image
                width={400}
                height={400}
                src="/images/services-left-image/big-monitor.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s absolute w-auto h-auto left-[15%]  top-[-98px]"
                alt="big-monitor"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/creative.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s absolute w-auto h-auto left-0 top-[-200px] mx-auto text-center right-0"
                alt="creative"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/developer.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s absolute w-auto h-auto left-[36%]  top-[-55px] z-[12]"
                alt="developer"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/flower-top.png"
                className="animate__animated animate__fadeInLeft animate__delay-0.2s absolute w-auto h-auto left-[55px] top-[-38px] z-[1]"
                data-wow-delay="0.6s"
                alt="flower-top"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/small-monitor.png"
                className="animate__animated animate__bounceIn animate__delay-0.2s absolute w-auto h-auto z-[3] right-[26%] top-[-66px]"
                alt="small-monitor"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/small-top.png"
                className="animate__animated animate__fadeInDown animate__delay-0.2s absolute w-auto h-auto right-[19%] top-[-41px] z-[2]"
                alt="small-top"
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/table.png"
                className="animate__animated animate__zoomIn animate__delay-0.2s absolute w-auto h-auto top-[40px] right-[97px] z-[1]"
                alt="table"
              />

              <Image
                src="/images/services-left-image/target.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s absolute w-auto h-auto right-[23%] top-[-175px] z-[2] "
                alt="target"
                width={400}
                height={400}
              />

              <Image
                width={400}
                height={400}
                src="/images/services-left-image/cercle-shape.png"
                className="bg-image rotateme absolute w-auto h-auto top-[-262px] right-0 left-0 mx-auto text-center animate-rotateme"
                alt="shape"
              />

              <Image
                src="/images/services-left-image/service-left-main-pic.png"
                className="animate__animated animate__fadeInUp animate__delay-0.2s absolute w-auto h-auto hidden"
                alt="main-pic"
                width={400}
                height={400}
              />
            </div>

            <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:w-1/2 services-content">
              <div className="section-title text-left  mb-5">
                <h2 className="mb-0 capitalize text-3xl font-semibold text-black-color">Design & Development</h2>
                <div className="bar"></div>
                <p className="text-paragraph-color text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row">
                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Layout /> Responsive design
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Code /> React web development
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Smartphone /> Android apps development
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Code /> Laravel web development
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Smartphone /> iOS apps development
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.Percent /> UX/UI design
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.ShoppingCart /> E-commerce development
                  </div>
                </div>

                <div className="md:w-full lg:grow-0 lg:shrink-0 lg:basis-auto lg:!w-1/2 px-3">
                  <div className="box">
                    <Icon.CheckCircle /> Print ready design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
