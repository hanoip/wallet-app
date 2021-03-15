import styled from "styled-components";
import ButtonComp from "@material-ui/core/Button";
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled(TextField)`
  && {
    color: #1a252d;
    margin: 10px 100px 10px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
`;

const Button = styled(ButtonComp)`
  && {
    color: white;
    background-color: #1a252d;
    height: 65px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 20px;
    margin: 30px 150px 0;
    opacity: 0.9;
    &:hover {
      opacity: 1;
      background-color: #1a252d;
    }
  }
`;

export default {
  Container,
  Wrapper,
  Form,
  Input,
  Title,
  Button,
};
