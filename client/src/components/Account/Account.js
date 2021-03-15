import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { logout, fetchBalance, makeDeposit } from "../../redux/actions";
import styles from "./styles";

const Account = ({ user, logout, fetchBalance, balance, makeDeposit }) => {
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleLogout = () => {
    logout();
    history.push("/");
  };
  const handleCheckBalance = () => {
    if (user.phone && user.document)
      fetchBalance({ phone: user.phone, document: user.document }).then(() => {
        alert(`Tu saldo es $${balance}`);
      });
  };

  const handleDeposit = () => {
    const inputValue = parseInt(value);
    if (user.phone && user.document && typeof inputValue === "number")
      makeDeposit({
        phone: user.phone,
        document: user.document,
        value: inputValue,
      }).then(() => {
        alert(`Recarga realizada con exito!`);
        setValue(0);
      });
  };

  const handleChange = (event) => {
    event.persist();
    setValue(() => event.target.value);
  };
  return (
    <styles.Container>
      <styles.Wrapper>
        <styles.Header>
          <styles.Tab>
            <Fab color="secondary" variant="extended" onClick={handleLogout}>
              Log out
            </Fab>
          </styles.Tab>
          <styles.Title>{`Hola ${user.name}`}</styles.Title>
        </styles.Header>
        <styles.Deposit>
          <styles.Input
            type="number"
            label="monto"
            variant="outlined"
            value={value}
            onChange={handleChange}
          />
          <styles.Tab onClick={handleDeposit}>
            <Fab color="primary" variant="extended" aria-label="add">
              <AddIcon />
              Recarga saldo
            </Fab>
          </styles.Tab>
        </styles.Deposit>
        <styles.Tab>
          <Fab color="primary" variant="extended" aria-label="edit">
            <CreditCardIcon />
            Realizar pago
          </Fab>
        </styles.Tab>
        <styles.Tab onClick={handleCheckBalance}>
          <Fab color="primary" variant="extended" aria-label="edit">
            <AccountBalanceWalletIcon />
            Consultar saldo
          </Fab>
        </styles.Tab>
      </styles.Wrapper>
    </styles.Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchBalance: (data) => dispatch(fetchBalance(data)),
  makeDeposit: (data) => dispatch(makeDeposit(data)),
  dispatch,
});

const mapStateToProps = (state) => ({
  user: state.user,
  balance: state.balance,
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
