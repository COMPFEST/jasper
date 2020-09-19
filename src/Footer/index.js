import React from "react"
import SubscribeForm from "./SubscribeForm"
import { FooterContainer } from "./style"

export const Footer = (props) => {
  const { Compfest, Facebook, Twitter, Youtube, Instagram, Line, LinkedIn, ...other } = props
  return (
    <FooterContainer {...other}>
      <div className="row">
        <div className="column" id="ft-left">
          <div id="logo">
            {/* <Link to="/"> */}
            <img src={Compfest} alt="COMPFEST" />
            {/* </Link> */}
          </div>
          <div>
            <h4 className="slogan">Empower Breakthrough</h4>
            <span className="deskripsi-singkat">
              An annual one-stop IT event run by students of Faculty of
              Computer Science, University of Indonesia
            </span>
          </div>
        </div>
        <div className="column" id="ft-right">
          <span className="ft-section-title">Find Us on Social Media!</span>
          <div id="socmed">
            <a id="fb" href="https://www.facebook.com/COMPFEST">
              <img src={Facebook} alt="FACEBOOK-COMPFEST" />
            </a>
            <a id="tw" href="https://twitter.com/COMPFEST">
              <img src={Twitter} alt="TWITTER-COMPFEST" />
            </a>
            <a
              id="yb"
              href="https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw"
            >
              <img src={Youtube} alt="YOUTUBE-COMPFEST" />
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
          <span className="ft-section-title">Subscribe to COMPFEST</span>
          <SubscribeForm />
        </div>
      </div>
      <div className="separator" />
      <div id="footer-bottom">
        <span id="copyright">© 2020 COMPFEST</span>
        {/* <div id="footer-link">
          <a href="#">Download Guidebook</a>
          <a href="#">Contact</a>
        </div> */}
      </div>
    </FooterContainer>
  )
}

export default Footer
