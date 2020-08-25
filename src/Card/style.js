import styled from "styled-components"

const Style = styled.div`
  & * {
    margin: 0;
  }

  #card-body {
    background: ${props => props.theme.colors.secondary ? props.theme.colors.secondary : "#131313"};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  #mini-information-card {
    & div {
      padding: 25px 20px;
      width: 13rem;
    }
  }

  #title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    margin: 0;
  }

  #content {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 177%;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  #link {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #747373;
    text-decoration: none;
  }

  #large-card {
    width: 50rem;

    #img-container {
      margin-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #text {
      line-height: 140%;
      text-align: justify;
    }

    #body {
      color:#fff;
      padding: 32px 0;
    }

    & #card-body {
      display: flex;
    }

    .btn-container {
      padding: 20px 0 32px 0;
    }
  }

  #article-card {
    width: 30rem;
    & #card-body {
      color:#fff;
      padding: 24px;
    }

    #img-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-weight: normal;
      font-size: 1rem;
      margin-top: 20px;
    }

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  #carousel-card {
    & #card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px;
      width: max-content;
    }

    h1 {
      font-weight: bold;
      font-size: 2em;
    }
  }
`

export default Style
