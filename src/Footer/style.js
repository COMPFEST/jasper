import styled from "styled-components"

export const FooterContainer = styled.div`
  margin-top: 53px;
  background-color: #302858;
  height: 240px;
  display: flex;
  flex-direction: column;
  color: white;

  p {
    font-family: "itc";
  }

  #footer-top {
    height: 80%;
    display: flex;
    width: 100%;
  }

  #left,
  #right {
    display: flex;
    flex-grow: 1;
  }

  #left {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #socmed {
    margin-top: 36px;
    display: flex;
  }

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

  #right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  #top {
    font-size: 16px;
    font-weight: 700;
  }

  #bottom {
    margin-top: 21px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  #bottom > div {
    margin-right: 36px;
  }

  #bottom > div > a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }

  .link {
    margin-bottom: 19px;
  }

  .link-container {
    display: flex;
    flex-direction: column;
  }

  .link-container p {
    font-size: 16px;
  }

  #logo {
    width: 161px;
    height: 30px;
  }

  #footer-bottom {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    #footer-top {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: auto;
    }

    #left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
    }

    #logo {
      margin-bottom: 10px;
    }

    #right {
      width: 100%;
      margin-top: 24px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #socmed {
      margin-top: 21px;
      display: flex;
      margin-bottom: 40px;
    }

    #fb {
      height: 17px;
      width: 16px;
      padding-right: 10px;
    }

    #tw {
      width: 20px;
      height: 16px;
      padding-right: 10px;
    }

    #yb {
      width: 21px;
      height: 15px;
      padding-right: 10px;
    }

    #ig,
    #ln {
      width: 15px;
      height: 15px;
      padding-right: 10px;
    }

    #in {
      width: 15px;
      height: 15px;
      padding-right: 10px;
    }

    #bottom > div > a {
      text-decoration: none;
      color: white;
    }

    #bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    #bottom > div {
      margin-right: 0px;
    }

    .container-right {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    #footer-bottom {
      margin-top: 40px;
      padding: 10px 0px;
    }
  }
`
