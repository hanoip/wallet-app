import styled from "styled-components";
import ButtonComp from "@material-ui/core/Button";

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
  font-size: 60px;
  display: flex;
  justify-content: center;
  color: #1a252d;
  margin: 0 0 30px;
`;
const Logo = styled.img`
  height: 150px;
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
  Title,
  Logo,
  Button,
};
