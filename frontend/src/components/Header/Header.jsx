import React, { useEffect, useRef, useState,useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [navClass, setNavClass] = useState({
    isActive: false,
  });

  const headerRef =useRef(null)
  const menuRef=useRef(null)
  const { user, role, token } = useContext(authContext);


  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop> 80 || document.documentElement.scrollTop> 80){
        headerRef.current.classList.add('stikcy_header')
      }
      else{
        headerRef.current.classList.remove('stikcy_header')

      }
    })
  }

  useEffect(()=>{
   handleStickyHeader()

   return ()=> window.removeEventListener('scroll',handleStickyHeader)

  })

  const toggleMenu =()=> menuRef.current.classList.toggle('show_menu')

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*=============logo=========*/}
          <div
            style={{
              flex: "0 0 auto",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          >
            <img src={logo} alt="" style={{ width: "100px", height: "auto" }} />
          </div>

          {/*=======menu=========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                    onClick={() => setNavClass({ isActive: true })}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*============navright==========*/}
          <div className="flex items-center gap-4">
            {
              token && user ?  <div >
              <Link to={`${role==='doctor' ?'/doctors/profile/me':'/users/profile/me'}`}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="w-full rounded-full" alt="" />
                </figure>

                
              </Link>
            </div>:<Link to="/login">
            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
              Login
            </button>
          </Link>
            }
           
          

          

          <span className="md:hiddend" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
