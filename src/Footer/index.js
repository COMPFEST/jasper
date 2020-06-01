import React from "react"
import { FooterContainer } from "./style"
import Instagram from "./Instagram.svg"
import Facebook from "./Facebook.svg"
import twitter from "./twitter.svg"
import Line from "./Line.svg"
import LinkedIn from "./LinkedIn.svg"
import youtube from "./youtube.svg"
import compfest from "./compfest-white.svg"

const SSOButton = props => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={props.loginWithSSO}
      className={props.className}
      id={props.id}
      role="button"
      tabIndex={0}
    >
      <p style={{ fontFamily: "itc" }}>{props.text}</p>
    </div>
  )
}

export const Footer = () =>(
  <FooterContainer>
    <div className="layout" id="footer-top">
      <div id="left">
        <div id="logo">
          
            <img src={compfest} alt="COMPFEST" />
          
        </div>
        <div id="socmed">
          <a id="fb" href="https://www.facebook.com/COMPFEST">
            <img src={Facebook} alt="FACEBOOK-COMPFEST" />
          </a>
          <a id="tw" href="https://twitter.com/COMPFEST">
            <img src={twitter} alt="TWITTER-COMPFEST" />
          </a>
          <a
            id="yb"
            href="https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw"
          >
            <img src={youtube} alt="YOUTUBE-COMPFEST" />
          </a>
          <a id="ig" href="https://www.instagram.com/compfest">
            <img src={Instagram} alt="INSTAGRAM-COMPFEST" />
          </a>
          <a id="ln" href="https://line.me/R/ti/p/%40compfest">
            <img src={Line} alt="LINE-COMPFEST" />
          </a>
          <a id="in" href="https://www.linkedin.com/company/compfest">
            <img src={LinkedIn} alt="LINKEDIN-COMPFEST" />
          </a>
        </div>
      </div>
      <div id="right">
        <div className="container-right">
          <span id="top">COMPFEST 12 HRD Open Recruitment</span>
          <div id="bottom">
            <div className="link-container">
              
                <p>Home</p>
              
              
                <p>About HRD</p>
              
            </div>
            <div className="link-container">
              
                <p>Departments</p>
              
                {/* <p>Results</p> */}
                <SSOButton text="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer-bottom">
      <span>© 2020 COMPFEST</span>
    </div>
  </FooterContainer>
)

export default Footer