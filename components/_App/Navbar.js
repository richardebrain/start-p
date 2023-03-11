import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);
  const [isSticky, setIsSticky] = React.useState(false);


  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
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
        <div className="container mx-auto px-[0.75rem] w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1250px]">
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
                <li className="nav-item relative py-[15px]">
                  <Link href="/#" activeClassName="active" legacyBehavior>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      Home <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu absolute">
                    <li className="nav-item">
                      <Link
                        href="/it-startup"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>IT Startup</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/it-startup-2"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>IT Startup Two</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/iot"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>IoT</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/hosting"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Hosting</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/machine-learning"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Machine Learning</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/machine-learning-2"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Machine Learning Two</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/bigdata-analytics"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Bigdata Analytics</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/digital-agency"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Digital Agency</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/digital-agency-portfolio"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Digital Agency Portfolio</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pc-repair"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>PC Repair</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item relative py-[15px]">
                  <Link href="/#" legacyBehavior>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"
                    >
                      About <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu absolute">
                    <li className="nav-item">
                      <Link
                        href="/about-1"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>About Style 1</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/about-2"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>About Style 2</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/about-3"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>About Style 3</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item relative  py-[15px]">
                  <Link href="/#"  legacyBehavior>
                    <a onClick={(e) => e.preventDefault()}  className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]">
                      Pages <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu absolute">
                    <li className="nav-item">
                      <Link
                        href="/#"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Features <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/features"
                            activeClassName="active"
                            legacyBehavior
                            className="nav-link"
                          >
                            <a onClick={toggleNavbar}>Features</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/feature-details"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Features Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/#"
                        activeClassName="active"
                        legacyBehavior
                        className="nav-link"
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Services <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/services-1"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Services Style 1</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services-2"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Services Style 2</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services-3"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Services Style 3</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services-4"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Services Style 4</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services-5"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Services Style 5</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/service-details"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Services Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/feedback"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Feedback</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/#"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Projects <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/projects-1"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Project Style 1</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/projects-2"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Project Style 2</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/project-details"
                            activeClassName="active"
                            className="nav-link"
                            legacyBehavior
                          >
                            <a onClick={toggleNavbar}>Project Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/team"
                        activeClassName="active"
                        legacyBehavior
                        className="nav-link"
                      >
                        <a onClick={toggleNavbar}>Team</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={toggleNavbar}>Pricing</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/#"
                        activeClassName="active"
                        className="nav-link"
                        legacyBehavior
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          User <Icon.ChevronDown />
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
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
                  <Link
                    href="/#"
                    activeClassName="active"
                    legacyBehavior
                  >
                    <a onClick={(e) => e.preventDefault()}  className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]">
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
                  <Link href="/#"  legacyBehavior>
                    <a onClick={(e) => e.preventDefault()}  className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]">
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
                  <Link
                    href="/contact"
                    activeClassName="active"
                    legacyBehavior
                  >
                    <a onClick={toggleNavbar}  className="nav-link text-navlink-color mx-[14px] font-medium  flex p-0 text-[15px]"> Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option ml-5">
              
              <Link href="/cart"  legacyBehavior>
                <a className="cart-wrapper-btn relative mr-[30px] inline-block text-black-color self-center">
                  <Icon.ShoppingCart />
                  <span className="absolute -top-1 z-20 -right-[9px] bg-red-500 text-[9px] w-[13px] h-[13px] text-center rounded-full text-white">{cart.length}</span>
                </a>
              </Link>

              <Link href="/contact" legacyBehavior>
                <a className="btn btn-light border-2 border-[#cdf1d8] font-semibold text-sm py-3 px-8 mr-3  border-dashed " >SUPPORT</a>
              </Link>

              <Link href="/login"  legacyBehavior>
                <a className="btn btn-primary font-semibold text-[14px] py-4 px-10 relative bg-purple-color text-white shadow-lg rounded-md">LOGIN</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
