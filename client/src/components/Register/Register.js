import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";
import styles from "./styles";

const Register = ({ registerUser }) => {
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
    registerUser(inputs).then(() => history.push("/login"));
  };

  return (
    <styles.Container>
      <styles.Wrapper>
        <styles.Title>Ingresa tus datos</styles.Title>
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
            type="text"
            name="name"
            label="nombre y apellidos"
            variant="outlined"
            value={inputs.name}
            onChange={handleInputChange}
          />

          <styles.Input
            type="text"
            name="document"
            label="documento"
            variant="outlined"
            value={inputs.document}
            onChange={handleInputChange}
          />

          <styles.Input
            type="text"
            name="phone"
            label="telefono"
            variant="outlined"
            value={inputs.phone}
            onChange={handleInputChange}
          />

          <styles.Input
            type="password"
            name="password"
            label="contraseña"
            variant="outlined"
            value={inputs.password}
            onChange={handleInputChange}
          />
          <styles.Button type="submit">Registrate</styles.Button>
        </styles.Form>
      </styles.Wrapper>
    </styles.Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data)),
  dispatch,
});

export default connect(null, mapDispatchToProps)(Register);
