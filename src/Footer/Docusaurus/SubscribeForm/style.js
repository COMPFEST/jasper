import styled from "styled-components"

export const SubscribeFormContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .email-input {
    background-color: rgba(243, 243, 243, 0.4);
    border-radius: 5px;
    color: white;
    padding: 0.5rem;
    padding-right: 0.5rem;
    border: 0;
    margin-right: 1rem;
  }

  .email-input::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }

  .subscribe-button {
    font-size: 14px;
    border-radius: 50px;
    background-color: #fdd262;
    color: #001c2c;
    border: 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 0.4rem 0.9rem;

    &:hover {
      opacity: 0.75;
    }
  }

  .disabled {
    cursor: initial;
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

    .email-input {
      width: 100%;
      margin-bottom: 0.5rem;
      margin-right: 0rem;
    }

    .subscribe-button {
      max-width: 100%;
      margin-top: 0.7rem;
      margin-bottom: 0.5rem;
    }
  }
`
