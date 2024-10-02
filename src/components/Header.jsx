import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/BiteBuddy1.png";


function Header() {
  const [toggle, setToggle] = useState(false);

  const showToggleMenu = () => {
    setToggle(true);
  };
  const hideShowMenu = () => {
    setToggle(false);
  };


  const links = [
    {
        icon : <IoSearchSharp />,
        text : "Search"
    },
    {
        icon : <BiSolidOffer />,
        text : "Offers",
        sup : "New"
    },
    {
        icon : <IoMdHelpCircleOutline />,
        text : "Help"
    },
    {
        icon : <IoPersonOutline />,
        text : "Sign In"
    },
    {
        icon : <IoCartOutline />,
        text : "Cart"
    }
  ]

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideShowMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[400px] h-full bg-white duration-[400ms] absolute z-[999999]"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#3d4152] sticky top-0 z-[9999] bg-white">
        <div className=" max-w-[1200px] mx-auto flex items-center">
          <div className="w-[200px]">
            <img src={logo} className="w-full" alt="" />
          </div>
          {/* <div className="relative">
            <span className="font-bold border-b-[3px] border-[black]">
              Ankleshwar
            </span>{" "}
            , Bharuch{" "}
            <RxCaretDown
              fontSize={"25px"}
              className="inline text-[#fc8019] font-bold cursor-pointer"
              onClick={showToggleMenu}
            />
          </div> */}
          <nav className="hidden list-none md:flex gap-2 lg:gap-8 font-semibold ml-auto text-[16px]" >
            

            {
                links.map(
                    (links,index) => {
                        return <li className="flex items-center gap-2 hover:text-[#fc8019] " key={index}>
                            {links.icon}
                            {links.text}
                            <sup>{links.sup}</sup>
                        </li>
                    })
            }
                        
          </nav>
          <div className="absolute right-[40px] block md:hidden" onClick={showToggleMenu}>
            <GiHamburgerMenu fontSize={24}/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
