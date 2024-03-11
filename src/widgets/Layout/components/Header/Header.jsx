import React, { useEffect, useState } from "react";
import styles from "./Header.scss";
import dots from "../../../../shared/assets/icons/dots.png";
import dashboard from "../../../../shared/assets/icons/dashboard.png";
import people from "../../../../shared/assets/icons/people-1.png";
import project from "../../../../shared/assets/icons/Vector.png";
import adminis from "../../../../shared/assets/icons/adminis.png";
import { NavLink, useNavigate } from "react-router-dom";
import PopoverPop from "../../../../shared/Popover/Popover";
import profile from "../../../../shared/assets/icons/user.png";
import leave from "../../../../shared/assets/icons/right-arrow.png";
import { logout } from "../../../../shared/service/AuthService";
import { toast } from "react-toastify";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useClickAway } from "react-use";

const Header = () => {
  // states
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen , setIsOpen] = useState(false);
  const ref = useRef();


  // functions
  const handleTogglePopover = () => setIsPopoverOpen(!isPopoverOpen);
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await logout();
      toast.success("Вы вышли из системы");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useClickAway(ref , () => setIsOpen(false));

  return (
    <div className="nav">
      <div className="nav_logo">
        <h3 className="logo_text">Logo</h3>
      </div>
      {width > 1000 ? (
        <div className="nav_menu">
          <ul className="nav_list">
            <NavLink to="/interview/" className="nav_item">
              <img className="item_img" src={dashboard} alt="" />
              <p className="item_text">Interview</p>
            </NavLink>
            <li className="nav_item">
              <img className="item_img" src={people} alt="" />
              <p className="item_text">With people</p>
            </li>
            <li className="nav_item">
              <img className="item_img" src={adminis} alt="" />
              <p className="item_text">Administration</p>
            </li>
            <li className="nav_item">
              <img className="item_img" src={project} alt="" />
              <p className="item_text">Projects</p>
            </li>
          </ul>
          <PopoverPop
            isOpen={isPopoverOpen}
            positions={["bottom", "right"]}
            padding={10}
            reposition={true}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <div className="nav_content">
                <li className="nav_item">
                  <img className="item_img" src={profile} alt="" />
                  <p className="item_text">Profile</p>
                </li>
                {/* <hr color="white" /> */}
                <li className="nav_item" onClick={handleLogout}>
                  <img className="item_img" src={leave} alt="" />
                  <p className="item_text">Log out</p>
                </li>
              </div>
            }
          >
            <button className="nav_burger" onClick={handleTogglePopover}>
              <img src={dots} alt="" className="burger_img" />
            </button>
          </PopoverPop>
        </div>
      ) : (
        <AnimatePresence>
        <div className="nav_menu" ref={ref}>
          <motion.ul 
          initial={{opacity: 0 , x: "-100%" }}
          animate={isOpen ? {opacity: 1, x: '0%'} : {opacity: 0, x: '-100%'}}
          exit={{opacity: 0, x: 0}}
          transition={{duration: 0.5}}
          className="nav_list">
            <NavLink to="/interview/" className="nav_item">
              <img className="item_img" src={dashboard} alt="" />
              <p className="item_text">Interview</p>
            </NavLink>
            <li className="nav_item">
              <img className="item_img" src={people} alt="" />
              <p className="item_text">With people</p>
            </li>
            <li className="nav_item">
              <img className="item_img" src={adminis} alt="" />
              <p className="item_text">Administration</p>
            </li>
            <li className="nav_item">
              <img className="item_img" src={project} alt="" />
              <p className="item_text">Projects</p>
            </li>
            <li className="nav_item">
              <img className="item_img" src={profile} alt="" />
              <p className="item_text">Profile</p>
            </li>
            <li className="nav_item" onClick={handleLogout}>
              <img className="item_img" src={leave} alt="" />
              <p className="item_text">Log out</p>
            </li>
          </motion.ul>
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} size={24} toggle={setIsOpen} color="white" padding={0}/>
          </div>
        </div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Header;
