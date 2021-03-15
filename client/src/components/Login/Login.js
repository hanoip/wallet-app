import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logUser } from "../../redux/actions";
import styles from "./styles";

const Login = ({ logUser, redirectTo }) => {
  const history = useHistory();

  const [inputs, setInputs] = useState({});

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    logUser(inputs).then(() => history.push("/account"));
  };

  return (
    <styles.Container>
      <styles.Wrapper>
        <styles.Title>Ingresa a tu cuenta</styles.Title>
        <styles.Form onSubmit={handleSubmit}>
          <styles.Input
            type="text"
            name="email"
            label="email"
            variant="outlined"
            value={inputs.email}
            onChange={handleInputChange}
          />
          <styles.Input
            type="password"
            name="password"
            label="contraseña"
            variant="outlined"
            disableUnderline={true}
            value={inputs.password}
            onChange={handleInputChange}
          />
          <styles.Button type="submit">Iniciar sesion</styles.Button>
        </styles.Form>
      </styles.Wrapper>
    </styles.Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logUser: (data) => dispatch(logUser(data)),
  dispatch,
});
const mapStateToProps = (state) => ({ redirectTo: state.redirectTo });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
