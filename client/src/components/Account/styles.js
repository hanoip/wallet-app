import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 50px;
  width: 800px;
  padding: 50px 50px 100px;
`;
const Title = styled.h1`
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: #1a252d;
  margin: 0 0 10px;
`;

const Header = styled.div``;

const Tab = styled.div`
  margin: 10px;
`;

const Deposit = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Input = styled(TextField)`
  && {
    color: #1a252d;
    margin: 10px 100px 10px;
  }
`;

export default {
  Container,
  Wrapper,
  Title,
  Tab,
  Header,
  Deposit,
  Input,
};
