import React, { useEffect, useState } from "react";
import "./MainPage.css";
import logo from "../../shared/assets/images/Logo.svg";
import mackbook from "../../shared/assets/images/Macbook-Air.png";
import check from "../../shared/assets/images/White-Tick.svg";
import user from "../../shared/assets/images/Testimonial-User-01-p-130x130q80.jpg";
import plus from "../../shared/assets/icons/plus.png";
import minus from "../../shared/assets/icons/minus.png";
import { SliderCompnent } from "../../shared/Slider/SliderCompnent";
import { slide as Menu } from "react-burger-menu";
import menu from '../../shared/assets/icons/list.png'
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  // states
  const [open , setOpen] = useState(false);
  const [choose, setChoose] = useState(true);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Tailor Your Experience with Precision",
      text: "Navigate seamlessly through your Pure world with the intuitive Dashboard. Access conversations, files, and essential tools in one centralized hub, simplifying your desktop app experience.",
      active: true,
    },
    {
      id: 2,
      title: "Guidance Beyond Conversations",
      text: "Fine-tune your Pure experience with our comprehensive Settings feature. From customizing themes to managing notifications, take control and make Pure uniquely yours.",
      active: false,
    },
    {
      id: 3,
      title: "Effortless Navigation",
      text: "Empower your journey with Mentors on Pure. Connect with experienced individuals who can provide insights, advice, and support beyond the chat. Elevate your personal and professional growth with Mentors.",
      active: false,
    },
  ]);
  const slides = [
    {
      id: 1,
      title: "Alice Simmons",
      text: "Digital Marketing Specialist",
      desck:
        "Pure has streamlined my team s communication. The dashboard is intuitive, and the mentors feature has been a game-changer for collaborative projects. Pure is not just an app; it s a productivity booster!",
      img: "https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0ae9de084dc4fb85e0836_Testimonial%20User%2001.jpg",
    },
    {
      id: 2,
      title: "David Nguyen",
      text: "Software Developer",
      desck:
        "Impressed by the 500,000+ lines of code behind Pure. The attention to detail reflects in its stability. As a developer, I appreciate the robust foundation and seamless integration of advanced features.",
      img: "https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0ae9de084dc4fb85e0832_Testimonial%20User%2003.jpg",
    },
    {
      id: 3,
      title: "Sophie Martinez",
      text: "Graphic Designer",
      desck:
        "The variety of themes in Pure is a designer's dream. I can switch between them effortlessly, giving my workspace a fresh look whenever inspiration strikes. Pure combines functionality with aesthetics beautifully.",
      img: "https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0ae9de084dc4fb85e0833_Testimonial%20User%2002.jpg",
    },
    {
      id: 4,
      title: "Michael Carter",
      text: "Entrepreneur",
      desck:
        "Pure's 99.9% uptime is crucial for my business calls. The reliability is unmatched, and the global support ensures I'm never alone. It's become an integral part of my daily operations.",
      img: "https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0ae9de084dc4fb85e0836_Testimonial%20User%2001.jpg",
    },
    {
      id: 5,
      title: "Elena Rodriguez",
      text: "Student",
      desck:
        "Being able to connect with mentors on Pure has been invaluable for my studies. It's like having a personal guide. The 24/7 support is fantastic, ensuring I'm never stuck during crucial project deadlines.",
      img: "https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0ae9de084dc4fb85e0832_Testimonial%20User%2003.jpg",
    },
  ];
  const [selected, setSelected] = useState(null);
  const questions = [
    {
      id: 1,
      title: "How secure is Pure's communication platform?",
      text: ` Absolutely! Pure offers a range of themes – over 30 to be exact –
      allowing you to personalize your experience. Choose the one that
      resonates with your style and enhances your overall desktop app
      ambiance.`,
    },
    {
      id: 2,
      title: "How secure is Pure's communication platform?",
      text: ` Absolutely! Pure offers a range of themes – over 30 to be exact –
      allowing you to personalize your experience. Choose the one that
      resonates with your style and enhances your overall desktop app
      ambiance.`,
    },
  ];
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  // funtions
  const handleItemClick = (id) => {
    const updated = items?.map((item) => {
      return item.id === id
        ? { ...item, active: true }
        : { ...item, active: false };
    });
    setItems(updated);
  };

  const toggleAccardion = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="wrapper">
      <header className="header">
        {width > 1000 ? (
          <>
            <div>
              <ul className="menu_list">
                <li className="menu_item">Features</li>
                <li className="menu_item">Experince</li>
                <li className="menu_item">FAQ</li>
              </ul>
            </div>
            <div className="header_logo">
              <img className="logo_image" src={logo} alt="" />
            </div>
            <div className="header_auth">
              <button className="auth_sign_up" onClick={() => navigate('/signup/')}>Sign up</button>
              <button className="auth_login" onClick={() => navigate('/login/')}>Log in</button>
            </div>
          </>
        ) : (
          <>
            <div className="header_logo" >
              <img className="logo_image" src={logo} alt="" />
            </div>
            <button className="humburger_btn" onClick={handleOpen}>
              <img src={menu} alt="" />
            </button>
            <div  className={`humburger_menu ${open ? 'show' : ''}`}>
            <ul className="menu_list">
              <li className="menu_item">Features</li>
              <li className="menu_item">Experince</li>
              <li className="menu_item">FAQ</li>
              <li className="menu_auth">
              <button className="auth_sign_up" onClick={() => navigate('/signup/')}>Sign up</button>
              <button className="auth_login" onClick={() => navigate('/login/')}>Log in</button>
              </li>
            </ul>
            </div>
          </>
        )}
      </header>
      <section className="banner">
        <div className="banner_content">
          <h3 className="banner_title">
            Seamless Conversations Elevated Experiences
          </h3>
          <p className="banner_text">
            Welcome to Pure, where communication meets sophistication. Elevate
            your messaging experience.
          </p>
          <button className="btn">Start now</button>
        </div>
        <div className="banner_wrapper">
          <div className="hero-section-mac-container">
            <div className="hero-section-mac">
              <img
                src={mackbook}
                loading="eager"
                alt=""
                className="mac-image"
              />
              <div className="macbook-app-holder">
                <img
                  src="images/Macbook-App_1Macbook-App.webp"
                  loading="eager"
                  alt=""
                  className="macbook-app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="instruct">
        <div className="instruct_head">
          <h3 className="instruct_title">Unrivaled Capabilities</h3>
          <p className="instruct_text">
            Explore the unparalleled features that make Pure the ultimate chat
            desktop app. With Pure Unleashed, experience a host of innovative
            tools designed to enhance your communication.
          </p>
        </div>
        <div className="instruct_body">
          <div className="step_one">
            <div className="instruct_content">
              <h3 className="step_title">
                Tailor Your Experience with Precision Effortless Navigation
              </h3>
              <p className="step_text">
                Fine-tune your Pure experience with our comprehensive Settings
                feature. From customizing themes to managing notifications, take
                control and make Pure uniquely yours.
              </p>
              <button className="btn">Download App</button>
            </div>
            <div className="step_one_image">
              <img
                className="instruct_image"
                src="https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0d25f783a7459b35ef152_Feature%20Image%2003-p-1600.webp"
                alt=""
              />
            </div>
          </div>
          <div className="step_two">
            <div className="instruct_content">
              <h3 className="step_title">Centralized Command</h3>
              <p className="step_text">
                Navigate seamlessly through your Pure world with the intuitive
                Dashboard. Access conversations,
              </p>
              <div className="marks">
                <div className="mark">
                  <div className="check-icon-holder">
                    <img
                      src={check}
                      loading="lazy"
                      alt=""
                      className="check-icon"
                    />
                  </div>
                  <div className="check-item-text">
                    Customizable layouts for efficient coding.
                  </div>
                </div>
                <div className="mark">
                  <div className="check-icon-holder">
                    <img
                      src={check}
                      loading="lazy"
                      alt=""
                      className="check-icon"
                    />
                  </div>
                  <div className="check-item-text">
                    Font preferences to match your style.
                  </div>
                </div>
                <div className="mark">
                  <div className="check-icon-holder">
                    <img
                      src={check}
                      loading="lazy"
                      alt=""
                      className="check-icon"
                    />
                  </div>
                  <div className="check-item-text">
                    Create multiple profiles for versatility.
                  </div>
                </div>
              </div>
              <button className="btn">Download App</button>
            </div>
            <div className="step_one_image">
              <img
                className="instruct_image"
                src="https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0d25faf68d082f05c8edd_Feature%20Image%2004.webp"
                alt=""
              />
            </div>
          </div>
          <div className="step_three">
            <div className="instruct_content">
              <h3 className="step_title">Guidance Beyond Conversations</h3>
              <p className="step_text">
                Empower your journey with Mentors on Pure. Connect with
                experienced individuals who can provide insights, advice, and
                support beyond the chat.
              </p>
              <div className="intruct_blocks">
                <div className="intruct_block">
                  <h3 className="block_title">500,000+</h3>
                  <p className="block_text">Lines of Code.Robust foundation</p>
                </div>
                <div className="intruct_block">
                  <h3 className="block_title">99.9%</h3>
                  <p className="block_text">UptimeExperience the reliability</p>
                </div>
                <div className="intruct_block">
                  <h3 className="block_title">30+</h3>
                  <p className="block_text">
                    Themes to Personalize Choose whatever
                  </p>
                </div>
                <div className="intruct_block">
                  <h3 className="block_title">24/7</h3>
                  <p className="block_text">Around-the-clock global support</p>
                </div>
              </div>
            </div>
            <div className="step_three_image">
              <img
                className="instruct_image"
                src="https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0d25fc226766af3a9c0db_Feature%20Image%2002.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="choose_haed">
          <h3 className="choose_title">Elevate your professional growth</h3>
          <p className="choose_text">
            Pure adapts to your needs. Elevate your conversations with Pure
            Unleashed – where advanced capabilities meet user-friendly design.
          </p>
        </div>
        <div className="choose_body">
          <div className="choose_cards">
            {items.map((item) => (
              <div
                key={item.title}
                className={`choose_card ${
                  choose === item.active ? "active" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <h3 className="card_title">{item?.title}</h3>
                <p className="card_tet">{item?.text}</p>
              </div>
            ))}
          </div>
          <div className="choose_image">
            <img
              src="https://assets-global.website-files.com/65c0ae9de084dc4fb85e081b/65c0d25fd9ff38f7048e4e1b_Feature%20Image%2001.webp"
              alt=""
              className="choose_img"
            />
          </div>
        </div>
      </section>
      <section className="slider">
        <div className="slider_head">
          <h3 className="slider_title">Voices of Pure Satisfaction</h3>
          <p className="slider_text">
            Discover what users are saying about Pure in our Testimonials
            section. Dive into the experiences of individuals who have embraced
            the seamless connectivity and elegance of Pure.
          </p>
        </div>
        <div className="slider_body">
          <SliderCompnent>
            {slides?.map((slide) => (
              <div className="slider_card" key={slide?.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <img src={slide?.img} alt="" className="slide_img" />
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      flexDirection: "column",
                    }}
                  >
                    <h3 className="slide_title">{slide?.title}</h3>
                    <p className="slide_text">{slide?.text}</p>
                  </div>
                </div>
                <p className="slider_desc">{slide?.desck}</p>
              </div>
            ))}
          </SliderCompnent>
        </div>
      </section>
      <section className="question">
        <div className="question_haed">
          <h3 className="question_title">Frequently asked questions</h3>
          <p className="question_text">Everything you need to know</p>
        </div>
        <div className="question_body">
          <div className="question_cards">
            {questions?.map((question, index) => (
              <div className="question_card" key={question?.id}>
                <div
                  className="question_head"
                  onClick={() => toggleAccardion(question?.id)}
                >
                  <p className="question_card_title">{question?.title}</p>
                  <button className="question_btn">
                    <img
                      src={selected === question?.id ? minus : plus}
                      alt=""
                      className="question_img"
                    />
                  </button>
                </div>
                <div
                  className={`question_content ${
                    selected === question?.id ? "show" : ""
                  }`}
                >
                  <p className="question_content_text">{question?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3 className="contact_title">Still have questions?</h3>
            <p className="contact_text">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="btn">Contact Us</button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-wrapper">
          <a href="index.html" aria-current="page" className="footer-brand">
            <div className="footer-text-wrapper">
              <img src={logo} loading="lazy" alt="" className="logo-image" />
              <h2 className="footer-heading">
                Transform Your Workflow with Pure
              </h2>
              <div className="footer-paragraph-holder">
                <p className="footer-paragraph">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
            </div>
          </a>
          <div className="footer-content">
            <div
              id="w-node-e92bf484-a605-4132-f141-4518468af7e2-468af7d9"
              className="footer-block"
            >
              <div className="title-small">Company</div>
              <a href="#Features" className="footer-link">
                Features
              </a>
              <a href="#Experince" className="footer-link">
                Experience
              </a>
              <a href="#Testimonials" className="footer-link">
                Reviews
              </a>
              <a href="#FAQ" className="footer-link">
                FAQ
              </a>
            </div>
            <div
              id="w-node-e92bf484-a605-4132-f141-4518468af7ef-468af7d9"
              className="footer-block"
            >
              <div className="title-small">Social media</div>
              <a
                href="http://instagram.com"
                target="_blank"
                className="footer-link"
              >
                Instagram
              </a>
              <a href="http://fb.com" target="_blank" className="footer-link">
                Facebook
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                className="footer-link"
              >
                Linkedin
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                className="footer-link"
              >
                Twitter
              </a>
            </div>
            <div
              id="w-node-e92bf484-a605-4132-f141-4518468af7fa-468af7d9"
              className="footer-block"
            >
              <div className="title-small">Webflow stuff</div>
              <a href="template/style-guide.html" className="footer-link">
                Style Guide
              </a>
              <a href="template/licensing.html" className="footer-link">
                Licensing
              </a>
              <a href="template/instructions.html" className="footer-link">
                Instructions
              </a>
              <a href="template/change-log.html" className="footer-link">
                Change Log
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider">
          <div className="footer-copyright-holder">
            <div className="footer-copyright-center">
              Created by{" "}
              <a
                href="http://madebyoversight.com/"
                target="_blank"
                className="white-link"
              >
                OVERSIGHT
              </a>
            </div>
          </div>
          <div className="footer-copyright-holder">
            <div className="footer-copyright-center">
              Powered by{" "}
              <a
                href="https://webflow.com/"
                target="_blank"
                className="white-link"
              >
                WEBFLOW
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
