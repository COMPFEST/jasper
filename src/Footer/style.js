import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #131313;
  height: 240px;
  padding: 3rem 7rem;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "DM Sans", "itc";

  #ft-left {
    max-width: 40%;
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
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  .slogan {
    font-size: 18px;
    letter-spacing: 0.04em;
    margin-top: .5rem;
  }

  .deskripsi-singkat {
    line-height: 1.5;
  }

  .separator {
    /* border: 0.4px solid white; */
    margin: 1.5rem 0;
  }

  #copyright {
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
      margin-right: 22px;
    }

    #tw {
      width: 30px;
      height: 25px;
      margin-right: 22px;
    }

    #yb {
      width: 32px;
      height: 23px;
      margin-right: 22px;
    }

    #ig,
    #ln {
      width: 23px;
      height: 23px;
      margin-right: 22px;
    }

    #in {
      width: 23px;
      height: 22px;
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

    #socmed {
      margin-bottom: 2.5rem;
      #fb {
        height: 17px;
        width: 16px;
        padding-right: 5px;
      }

      #tw {
        width: 20px;
        height: 16px;
        padding-right: 5px;
      }

      #yb {
        width: 21px;
        height: 15px;
        padding-right: 5px;
      }

      #ig,
      #ln {
        width: 15px;
        height: 15px;
        padding-right: 5px;
      }

      #in {
        width: 15px;
        height: 15px;
        padding-right: 5px;
      }
    }
  }
`
