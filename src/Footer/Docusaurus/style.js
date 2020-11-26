import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #131313;
  height: 320px; // 240px pengennya
  padding: 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  color: white;
  /* font-family: "DM Sans", "itc"; */

  #ft-left {
    max-width: 35%; // 42% pengennya
  }


  div.row {
    display: flex;
    justify-content: space-between;
  }

  div.column {
    display: flex;
    flex-direction: column;
  }

  .ft-section-title {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0.4rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  .slogan {
    font-size: 15.1px; // 16 pengennya
    letter-spacing: 0.03em;
    margin-top: .2rem;
  }

  .deskripsi-singkat {
    font-size: 13px;
    line-height: 1.0;
  }

  .separator {
    /* border: 0.4px solid white; */
    margin: 1rem 0; // 0.7 pengennya
  }

  #copyright {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 1rem;
    display: block;
  }

  #footer-link > a {
    margin-right: 1rem;
  }

  #socmed {
    display: flex;
    margin-bottom: 1.5rem;
    #fb {
      height: 25px;
      width: 25px;
      margin-right: 20px;
    }

    #tw {
      width: 30px;
      height: 25px;
      margin-right: 20px;
    }

    #yb {
      width: 32px;
      height: 23px;
      margin-right: 20px;
    }

    #ig,
    #ln {
      width: 23px;
      height: 23px;
      margin-right: 20px;
    }

    #in {
      width: 23px;
      height: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 2rem 2rem;
    text-align: center;

    div.row,
    div.column {
      flex-direction: column;
      align-items: center;
    }

    #ft-left {
      max-width: 100%;
      margin-bottom: 1rem;
    }

    .slogan {
      font-size: 18px;
    }

    .deskripsi-singkat {
      font-size: 14px;
    }

    #socmed {
      margin-bottom: 1.5rem;
      #fb {
        height: 25px;
        width: 25px;
        margin-right: 17px;
      }

      #tw {
        width: 30px;
        height: 25px;
        margin-right: 17px;
      }

      #yb {
        width: 32px;
        height: 23px;
        margin-right: 17px;
      }

      #ig,
      #ln {
        width: 23px;
        height: 23px;
        margin-right: 17px;
      }

      #in {
        width: 23px;
        height: 22px;
      }
    }
  }
`
