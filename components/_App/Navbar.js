import React, { useRef, useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);
  const [isSticky, setIsSticky] = React.useState(false);
  const ref = useRef(null);
  const [current, setCurrent] = useState(null);
  const [innerCurrent, setInnerCurrent] = useState(null);

  const handleMouseOver = (name) => {
    setCurrent(name);
    setMenu(true);
  };
  const handleInnerMouseOver = (name) => {
    setInnerCurrent(name);
  };
  const handleInnerMouseOut = (name) => {
    setInnerCurrent(null);
  };
  const handleMouseOut = (name) => {
    setCurrent(null);
  };
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  const getCurrent = (name) => {
    return current === name;
  };
  const getInnerCurrent = (name) => {
    return innerCurrent === name;
  };
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  });

  const classOne = menu
    ? "md:flex items-center grow basis-auto navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header
      id="header"
      className={`fixed w-full z-[999] top-0 left-0 transition-all duration-300 pt-4 ${
        isSticky ? "shadow-lg !bg-white !py-[15px] " : ""
      }`}
    >
      <div className="bg-transparent ">
        <div className="container">
          <nav className="p-0  md:flex-wrap  md:justify-start relative flex items-center navbar-light">
            <Link
              href="/it-startup"
              className="navbar-brand pt-[0.3125rem] pb-[0.3125rem] mr-4 no-underline whitespace-nowrap text-xl transition-all duration-500 text-black "
              legacyBehavior
            >
              <a onClick={toggleNavbar}>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={`${classTwo}  md:hidden `}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={`${classOne}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto flex md:flex-row flex-col p-0 m-0 list-none ml-auto ">
                <li
                  className="nav-item relative py-[15px]"
                  ref={ref}
                  onMouseOver={() => handleMouseOver("home")}
                  onMouseOut={() => handleMouseOut("")}
                >
                  <Link href="/#" activeClassName="active" legacyBehavior>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      Home <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul
                    className={`dropdown-menu absolute  shadow-xl bg-white z-[99] border-none left-0 w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-20 ease-in-out transition-all duration-[.3s]  ${
                      getCurrent("home")
                        ? "top-full animate-drop-down"
                        : " opacity-0 -translate-y-0 invisible "
                    }`}
                  >
                    <li className="nav-item relative p-0">
                      <Link href="/it-startup" legacyBehavior>
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block text-navlink-color hover:text-light-green-color"
                        >
                          IT Startup
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/it-startup-2"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          IT Startup Two
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/iot" activeClassName="active" legacyBehavior>
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          IoT
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/hosting"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Hosting
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/machine-learning"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Machine Learning
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/machine-learning-2"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block text-navlink-color hover:text-light-green-color"
                        >
                          Machine Learning Two
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/bigdata-analytics"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link font-medium py-2 px-[15px] m-0 block text-navlink-color hover:text-light-green-color"
                        >
                          Bigdata Analytics
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/digital-agency"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Digital Agency
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/digital-agency-portfolio"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Digital Agency Portfolio
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pc-repair"
                        activeClassName="active"
                        legacyBehavior
                      >
                        <a
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          PC Repair
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className="nav-item relative py-[15px]"
                  ref={ref}
                  onMouseOver={() => handleMouseOver("about")}
                  onMouseOut={() => handleMouseOut("")}
                >
                  <Link href="/#" legacyBehavior>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      About <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul
                    className={`dropdown-menu absolute  shadow-lg bg-white z-[99] border-none left-0 w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-20 ease-in-out transition-all duration-[.3s]  ${
                      getCurrent("about")
                        ? "top-full animate-drop-down"
                        : " opacity-0 -translate-y-0 invisible "
                    }`}
                  >
                    <li className="nav-item">
                      <Link href="/about-1" legacyBehavior>
                        <a
                          onClick={toggleNavbar}
                          activeClassName="active"
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          About Style 1
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about-2" legacyBehavior>
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          About Style 2
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about-3" legacyBehavior>
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          About Style 3
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className="nav-item relative  py-[15px]"
                  ref={ref}
                  onMouseOver={() => handleMouseOver("pages")}
                  onMouseLeave={() => handleMouseOut("")}
                >
                  <Link href="/#" legacyBehavior>
                    <a
                      onClick={(e) => {
                        e.preventDefault(), handleMouseOver("pages");
                      }}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      Pages <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul
                    className={`dropdown-menu absolute  shadow-xl bg-white z-[99] border-none left-0 w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-20 ease-in-out transition-all duration-[.3s]  ${
                      getCurrent("pages")
                        ? "top-full animate-drop-down "
                        : " opacity-0 -translate-y-0 invisible  "
                    }`}
                  >
                    <li
                      className="nav-item relative"
                      ref={ref}
                      onMouseOver={() => handleInnerMouseOver("pages/features")}
                      onMouseLeave={() => handleInnerMouseOut("")}
                    >
                      <Link href="/#" legacyBehavior>
                        <a
                          onClick={(e) => e.preventDefault()}
                          activeClassName="active"
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0  hover:text-light-green-color text-navlink-color flex justify-between"
                        >
                          Features <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul
                        className={`dropdown-menu absolute  shadow-xl bg-white z-[99] border-none w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-0 ease-in-out transition-all duration-[.3s] block ${
                          getInnerCurrent("pages/features")
                            ? " visible opacity-100 left-full"
                            : " opacity-0  invisible  left-full"
                        }`}
                      >
                        <li className="nav-item">
                          <Link href="/features" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Features
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/feature-details" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Features Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className="nav-item relative"
                      ref={ref}
                      onMouseOver={() => handleInnerMouseOver("pages/services")}
                      onMouseLeave={() => handleInnerMouseOut("")}
                    >
                      <Link href="/#" legacyBehavior>
                        <a
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 hover:text-light-green-color text-navlink-color flex justify-between"
                          onClick={(e) => e.preventDefault()}
                        >
                          Services <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul
                        className={`dropdown-menu absolute  shadow-xl bg-white z-[99] border-none w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-0 ease-in-out transition-all duration-[.3s] block ${
                          getInnerCurrent("pages/services")
                            ? " visible opacity-100 left-full"
                            : " opacity-0  invisible  left-full"
                        }`}
                      >
                        <li className="nav-item">
                          <Link href="/services-1" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Services Style 1
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/services-2" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Services Style 2
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/services-3" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Services Style 3
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/services-4" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Services Style 4
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/services-5" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Services Style 5
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/service-details" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Services Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/feedback" legacyBehavior>
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Feedback
                        </a>
                      </Link>
                    </li>

                    <li
                      className="nav-item relative"
                      ref={ref}
                      onMouseOver={() => handleInnerMouseOver("pages/projects")}
                      onMouseLeave={() => handleInnerMouseOut("")}
                    >
                      <Link href="/#" legacyBehavior>
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 hover:text-light-green-color text-navlink-color flex justify-between"
                        >
                          Projects <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul
                        className={`dropdown-menu absolute  shadow-xl bg-white z-[99] border-none w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-0 ease-in-out transition-all duration-[.3s] block ${
                          getInnerCurrent("pages/projects")
                            ? " visible opacity-100 left-full"
                            : " opacity-0  invisible  left-full"
                        }`}
                      >
                        <li className="nav-item">
                          <Link href="/projects-1" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Project Style 1
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/projects-2" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Project Style 2
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/project-details" legacyBehavior>
                            <a
                              activeClassName="active"
                              onClick={toggleNavbar}
                              className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                            >
                              Project Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/team" legacyBehavior>
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Team
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/pricing" legacyBehavior>
                        <a
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 block hover:text-light-green-color text-navlink-color"
                        >
                          Pricing
                        </a>
                      </Link>
                    </li>

                    <li
                      className="nav-item relative"
                      ref={ref}
                      onMouseOver={() => handleInnerMouseOver("pages/user")}
                      onMouseLeave={() => handleInnerMouseOut("")}
                    >
                      <Link href="/#" legacyBehavior>
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link text-sm font-medium py-2 px-[15px] m-0 hover:text-light-green-color text-navlink-color flex justify-between"
                        >
                          User <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul
                        className={`dropdown-menu absolute  shadow-xl bg-white z-[99] border-none w-[250px]  py-[15px] px-[5px] rounded-[5px] min-w-[10rem] top-0 ease-in-out transition-all duration-[.3s] block ${
                          getInnerCurrent("pages/user")
                            ? " visible opacity-100 left-full"
                            : " opacity-0  invisible  left-full"
                        }`}
                      >
                        <li className="nav-item">
                          <Link
                            href="/login"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Login</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/sign-up"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Sign Up</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/forgot-password"
                            className="nav-link"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Forgot Password</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>FAQ&apos;s</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Coming Soon</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>404 Error Page</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item relative  py-[15px]">
                  <Link href="/#" activeClassName="active" legacyBehavior>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      Shop <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu absolute">
                    <li className="nav-item">
                      <Link
                        href="/shop"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Shop</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/checkout"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a a onClick={toggleNavbar}>
                          Checkout
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item relative  py-[15px]">
                  <Link href="/#" legacyBehavior>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      Blog <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu absolute">
                    <li className="nav-item">
                      <Link
                        href="/blog-1"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Grid</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-2"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Right Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-3"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Grid 2</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-4"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Right Sidebar 2</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-5"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Grid 3</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-6"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Right Sidebar 3</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-details"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Blog Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item relative  py-[15px]">
                  <Link href="/contact" activeClassName="active" legacyBehavior>
                    <a
                      onClick={toggleNavbar}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      {" "}
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option ml-5">
              <Link href="/cart" legacyBehavior>
                <a className="cart-wrapper-btn relative mr-[30px] inline-block text-black-color self-center">
                  <Icon.ShoppingCart />
                  <span className="absolute -top-1 z-20 -right-[9px] bg-red-500 text-[9px] w-[13px] h-[13px] text-center rounded-full text-white">
                    {cart.length}
                  </span>
                </a>
              </Link>

              <Link href="/contact" legacyBehavior>
                <a className="btn btn-light border-2 border-[#cdf1d8] font-semibold text-sm py-3 px-8 mr-3  border-dashed ">
                  SUPPORT
                </a>
              </Link>

              <Link href="/login" legacyBehavior>
                <a className="btn btn-primary font-semibold text-[14px] py-4 px-10 relative bg-purple-color text-white shadow-lg rounded-md">
                  LOGIN
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
