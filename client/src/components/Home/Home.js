import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../svg/Wallet_Flat_Icon.svg";
import styles from "./styles";

const Home = () => {
  const history = useHistory();
  const handleClick = (path) => {
    history.push(`/${path}`);
  };
  return (
    <styles.Container>
      <styles.Wrapper>
        <styles.Logo src={logo} alt="wallet" />
        <styles.Title>Wallet</styles.Title>
        <styles.Button name="register" onClick={() => handleClick("register")}>
          Crear cuenta
        </styles.Button>
        <styles.Button onClick={() => handleClick("login")}>
          Ya tengo cuenta
        </styles.Button>
      </styles.Wrapper>
    </styles.Container>
  );
};

export default Home;
